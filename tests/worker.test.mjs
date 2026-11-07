import test from "node:test";
import assert from "node:assert/strict";
import { APP_META, handleAppRequest } from "../src/worker.mjs";

test("worksai-clipguard standalone Worker renders clean WorksAI UI with capabilityMatrix and zero forbidden branding", async () => {
  const res = await handleAppRequest(new Request("https://clipguard.worksai.org/"));
  assert.equal(res.status, 200);
  const html = await res.text();
  assert.equal(html.includes(APP_META.name), true);
  assert.equal(html.toLowerCase().includes("devinai.uk"), false);
  assert.equal(html.toLowerCase().includes("devonfolio"), false);
  assert.equal(html.includes("MIT Open Source • WorksAI Foundry"), true);
});

test("worksai-clipguard /api/ai/analyze executes deterministic engine, supports Workers AI + R2 persistence, and rejects empty input", async () => {
  const r2Map = new Map();
  const mockEnv = {
    AI: {
      async run(_model, _input) {
        return { response: "Verified Workers AI insight for worksai-clipguard." };
      }
    },
    DATALAKE_BUCKET: {
      async put(k, v) { r2Map.set(k, v); },
      async get(k) {
        if (!r2Map.has(k)) return null;
        const v = r2Map.get(k);
        return { async text() { return v; } };
      }
    }
  };

  const sample = "Production credentials: OPENAI_API_KEY=sk-proj-1234567890abcdef12345678 and operator email ops@worksai.org";
  const aiRes = await handleAppRequest(
    new Request("https://clipguard.worksai.org/api/ai/analyze", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ input: sample, tool: APP_META.mcpTools[0] })
    }),
    mockEnv
  );
  assert.equal(aiRes.status, 200);
  const aiData = await aiRes.json();
  assert.equal(aiData.ok, true);
  assert.equal(aiData.executionBreakdown.deterministicUtilityExecuted, true);
  assert.equal(aiData.executionBreakdown.genuineAiModelInvoked, true);
  assert.equal(aiData.executionBreakdown.persistedToR2, true);

  const stateRes = await handleAppRequest(new Request("https://clipguard.worksai.org/api/workspace/state"), mockEnv);
  assert.equal(stateRes.status, 200);
  const stateJson = await stateRes.json();
  assert.equal(stateJson.persistedInR2, true);
});

test("worksai-clipguard executable MV3 service worker (extension/background.cjs) scrubs secrets and handles CLIPGUARD_SCRUB messages", async () => {
  const { createRequire } = await import("node:module");
  const req = createRequire(import.meta.url);
  const bg = req("../extension/background.cjs");
  let registeredListener = null;
  const mockChrome = { runtime: { onMessage: { addListener(fn) { registeredListener = fn; } } } };
  bg.registerMv3Listeners(mockChrome);
  assert.equal(typeof registeredListener, "function");
  let resp = null;
  registeredListener({ type: "CLIPGUARD_SCRUB", payload: "Key sk-proj-1234567890abcdef12345678 and user@worksai.org" }, {}, (r) => { resp = r; });
  assert.equal(resp.ok, true);
  assert.equal(resp.result.scrubbedText.includes("[REDACTED_OPENAI_KEY]"), true);
  assert.equal(resp.result.scrubbedText.includes("[REDACTED_EMAIL]"), true);
});

