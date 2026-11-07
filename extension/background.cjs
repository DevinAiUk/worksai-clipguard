/**
 * WorksAi ClipGuard — Chrome / Edge Manifest V3 Service Worker (extension/background.cjs)
 * License: MIT
 */
"use strict";

function scrubClipboardPayload(rawText) {
  const text = String(rawText ?? "");
  const detections = [];
  let scrubbed = text;
  const patterns = [
    { type: "OPENAI_API_KEY", regex: /\bsk-(?:proj-)?[A-Za-z0-9_-]{16,}\b/g, replacement: "[REDACTED_OPENAI_KEY]" },
    { type: "GITHUB_PAT", regex: /\bgh[pousr]_[A-Za-z0-9]{20,}\b/g, replacement: "[REDACTED_GITHUB_TOKEN]" },
    { type: "AWS_ACCESS_KEY", regex: /\bAKIA[0-9A-Z]{16}\b/g, replacement: "[REDACTED_AWS_KEY]" },
    { type: "PRIVATE_KEY", regex: /-----BEGIN [A-Z ]*PRIVATE KEY-----[\s\S]*?-----END [A-Z ]*PRIVATE KEY-----/g, replacement: "[REDACTED_PRIVATE_KEY]" },
    { type: "EMAIL_PII", regex: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g, replacement: "[REDACTED_EMAIL]" }
  ];
  for (const p of patterns) {
    if (p.regex.test(scrubbed)) {
      detections.push(p.type);
      scrubbed = scrubbed.replace(p.regex, p.replacement);
    }
  }
  return {
    originalLength: text.length,
    scrubbedText: scrubbed,
    detections,
    safeForLlmPaste: detections.length === 0 || !scrubbed.includes("sk-")
  };
}

function registerMv3Listeners(chromeApi) {
  const ch = chromeApi || (typeof globalThis.chrome !== "undefined" ? globalThis.chrome : null);
  const handleMessage = (msg, _sender, sendResponse) => {
    if (msg && msg.type === "CLIPGUARD_SCRUB") {
      const res = scrubClipboardPayload(msg.payload || "");
      if (typeof sendResponse === "function") sendResponse({ ok: true, result: res });
      return res;
    }
    return null;
  };
  if (ch && ch.runtime && ch.runtime.onMessage) {
    ch.runtime.onMessage.addListener(handleMessage);
  }
  return { handleMessage, scrubClipboardPayload };
}

if (typeof globalThis.chrome !== "undefined") {
  registerMv3Listeners(globalThis.chrome);
}

module.exports = { scrubClipboardPayload, registerMv3Listeners };
