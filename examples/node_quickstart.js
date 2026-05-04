/**
 * NEES Core Engine Node.js Quickstart
 *
 * Before running:
 * 1. Request a NEES developer API key.
 * 2. Set your API key as an environment variable:
 *
 *    Windows PowerShell:
 *    $env:NEES_API_KEY="your-api-key"
 *
 *    macOS/Linux:
 *    export NEES_API_KEY="your-api-key"
 *
 * 3. Run:
 *    node examples/node_quickstart.js
 */

const NEES_API_URL = "https://api.nees.cloud/chat";

async function main() {
  const apiKey = process.env.NEES_API_KEY;

  if (!apiKey) {
    throw new Error(
      "Missing NEES_API_KEY environment variable. Please request a developer API key and set it before running."
    );
  }

  const payload = {
    message:
      "Respond as a governed assistant and explain why governance matters in production AI.",
    mode: "supportive",
    session_id: "demo-session-node"
  };

  const response = await fetch(NEES_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const text = await response.text();

  console.log("Status:", response.status);

  try {
    const data = JSON.parse(text);
    console.log(JSON.stringify(data, null, 2));
  } catch {
    console.log("Raw response:");
    console.log(text);
  }
}

main().catch((error) => {
  console.error("Error:", error.message);
  process.exit(1);
});
