# WorksAi ClipGuard (`worksai-clipguard`)

> Privacy-first clipboard history extension that scrubs API keys and PII before you paste into LLMs.

- **Live Subdomain Application:** [https://clipguard.worksai.org](https://clipguard.worksai.org)
- **WorksAI Hub Specification:** [https://worksai.org/apps/worksai-clipguard](https://worksai.org/apps/worksai-clipguard)
- **Category:** C. Plugins or extensions
- **License:** MIT (Derived from [Maccy](https://github.com/p0deje/Maccy) @ `f0b571e`)

## Capability Matrix
- **What You Can Do:** Download and load the Chrome/Edge Manifest V3 extension (manifest.json + background.cjs + popup.html) or use the companion web verifier to redact OpenAI keys, GitHub PATs, AWS keys, private keys, and email PII.
- **Deterministic Domain Utilities:** scrubClipboardSecrets (deterministic regex & PEM block redactor for API keys, private keys, and email PII).
- **Genuine AI Model Features:** Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct) contextual policy explanation for redacted payload categories.
- **Persisted R2/Neon Features:** Redaction audit counts (without raw secrets) persisted in Cloudflare R2 (workspaces/worksai-clipguard/*).
- **Known Limitations:** OS-wide background clipboard interception requires loading the unpacked MV3 extension in Chrome/Edge; browser sandboxing restricts automatic clipboard reads without user gesture on the web.

## Verification & Local Testing
```bash
npm run lint
npm run typecheck
npm test
```
