/**
 * NEES Core Engine V2 — Developer Preview RC2 Node.js Quickstart
 *
 * Before running:
 * 1. Request a NEES Developer Preview API key.
 * 2. Set NEES_API_KEY in your environment.
 * 3. Run: node examples/node_quickstart.js
 *
 * Do not place real API keys in source control, screenshots, or public logs.
 */

const NEES_API_URL = "https://api.nees.cloud/chat";

async function main() {
  const apiKey = process.env.NEES_API_KEY;

  if (!apiKey) {
    throw new Error(
      "Missing NEES_API_KEY environment variable. Request Developer Preview access and set the key before running."
    );
  }

  const payload = {
    prompt: "Can you tell me how refunds work?",
    session_id: "refund-test-node-001",
    mode: "public"
  };

  const response = await fetch(NEES_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "X-API-Version": "v1"
    },
    body: JSON.stringify(payload)
  });

  const text = await response.text();
  console.log("HTTP Status:", response.status);

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    console.log("Raw response:");
    console.log(text);
    return;
  }

  if (!response.ok) {
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  const governance = data.governance || {};

  console.log("Reply:", data.reply);
  console.log("Request ID:", data.request_id);
  console.log("Trace ID:", data.trace_id);
  console.log("Policy:", governance.policy_decision, governance.policy_status);
  console.log("Governance:", JSON.stringify(governance, null, 2));
}

main().catch((error) => {
  console.error("Error:", error.message);
  process.exit(1);
});
