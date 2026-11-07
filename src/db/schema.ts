export const APP_DB_CONFIG = {
  schema: "worksai_hub",
  appSlug: "worksai-clipguard",
  subdomain: "clipguard.worksai.org",
  mcpEndpoint: "https://clipguard.worksai.org/api/mcp",
  aiEndpoint: "https://clipguard.worksai.org/api/ai/analyze",
  mcpTools: ["clipguard.scan_secrets", "clipguard.redact_pii", "clipguard.verify_policy"]
} as const;
