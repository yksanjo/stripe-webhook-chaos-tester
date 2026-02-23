const PROJECT = "stripe-webhook-chaos-tester";
const DOMAIN = "application";

export function assess(signal) {
  const text = String(signal || "").toLowerCase();
  let score = 0.1;
  if (["critical", "breach", "outage", "failure", "incident"].some((k) => text.includes(k))) score += 0.6;
  if (["warning", "anomaly", "retry", "latency"].some((k) => text.includes(k))) score += 0.2;
  if (score > 1) score = 1;
  const status = score >= 0.7 ? "high" : score >= 0.4 ? "medium" : "low";
  return {
    project: PROJECT,
    domain: DOMAIN,
    score,
    status,
    reason: "Context-aware baseline model for core runtime signals to support reliable product operations.",
    timestamp: new Date().toISOString(),
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const result = assess("baseline health check");
  console.log(`${result.project}:${result.domain}:${result.status}:${result.score}`);
}
