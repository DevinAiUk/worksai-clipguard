# WorksAi ClipGuard (`worksai-08`)

> Privacy-first clipboard history extension that scrubs API keys and PII before you paste into LLMs.

**Category:** C. Plugins or extensions  
**License:** MIT (Derivative of [Maccy](https://github.com/p0deje/Maccy) @ `f0b571e`)  
**Portfolio Page:** `https://devinai.uk/worksai/products/worksai-clipguard/`

## Value Proposition & Scope
Replaces Paste's $29.99/year subscription while preventing developers and employees from accidentally pasting live AWS keys, OpenAI tokens, bearer JWTs, or customer PII into ChatGPT, Claude, or Slack.

### What Works Out-of-the-Box (Zero External Credentials Required)
Full clipboard history ring-buffer, fuzzy search, secret/PII scrubbing, JSON/Markdown formatting, and Manifest V3 popup UI.

### What Requires User Configuration (`.env.example`)
Optional Apple Developer ID ($99/yr) if compiling a signed native macOS `.dmg` wrapper; optional team policy URL for enterprise regex sync.

## Measurable Acceptance Criteria
- AC-01: Detects and redacts OpenAI (`sk-...`), GitHub (`ghp_...`), AWS (`AKIA...`), JWT bearer tokens, RSA private keys, emails, and credit card numbers with 100% precision on test vectors.
- AC-02: Deduplicates consecutive identical copies, preserves pinned items during ring-buffer eviction, and ignores concealed password-manager payloads.
- AC-03: Executes deterministic developer transforms (JSON format, Markdown table conversion, slugify) accurately.
- AC-04: Ships a valid Chrome Manifest V3 (`manifest_version: 3`) configuration with least-privilege permissions (`storage`, `clipboardWrite`).

## Known Limitations
- Chrome Web Store public listing requires owner submission in the Google Developer Dashboard.
- Browsers restrict background clipboard reads without an active user gesture or focused popup tab.

## Quick Start & Verification
```bash
npm test
```
