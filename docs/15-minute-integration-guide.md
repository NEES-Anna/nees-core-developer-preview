# 15-Minute Integration Guide

This guide shows the fastest way to test **NEES Core Engine** as a governed runtime layer for an AI application.

The goal is simple:

> Send one AI request through NEES Core Engine and receive a governed response with traceability metadata.

NEES is not meant to make the first integration heavy.
The first win is seeing the difference between a direct model call and a governed AI runtime call.

---

## Who This Is For

NEES Core Engine is for builders working on:

- AI agents
- customer-support copilots
- internal AI assistants
- workflow automation tools
- AI products using memory, tools, roles, or escalation logic

If your AI app needs consistent behavior, traceability, memory boundaries, or reviewable decisions, this preview is designed for you.

---

## Try NEES Core Engine When

- your AI agent drifts from its role
- prompts are not enough to control behavior
- memory or context scope becomes unclear
- tool/action permissions need governance
- debugging AI behavior becomes difficult
- you need trace IDs and reviewable decisions
- you want to test behavioral governance before production

---

## Who This Guide Is For

This guide is for:

- Developers building AI apps
- Teams testing AI agents
- Builders exploring AI governance
- Founders moving from AI prototype to production
- Product teams that need traceability and runtime control

---

## What You Will Learn

In 15 minutes, you should be able to:

1. Understand where NEES sits in your AI stack
2. Send your first governed request
3. Read the response and governance metadata
4. Identify the trace ID
5. Understand how NEES differs from a direct model call

---

## Before You Start

You need:

- A NEES developer API key
- Python, Node.js, or cURL
- Basic terminal access

If you do not have an API key yet, request one using the GitHub issue template:

```txt
.github/ISSUE_TEMPLATE/api-key-request.md
```

You can also review:

```txt
docs/request-api-key.md
```

---

## 1. Where NEES Fits

Most AI apps directly call a model provider:

```txt
User
  ↓
Application
  ↓
Model Provider
  ↓
Response
```

With NEES Core Engine:

```txt
User
  ↓
Application
  ↓
NEES Core Engine
  ↓
Governance Runtime
  ↓
Model Provider
  ↓
Governed Response
```

NEES adds a runtime layer for:

- Policy awareness
- Identity consistency
- Runtime mode
- Memory scope
- Traceability
- Response metadata
- Developer debugging

---

## 2. Your First Governed Request

Base URL:

```txt
https://api.nees.cloud
```

Endpoint:

```txt
POST /chat
```

Authentication:

```txt
Authorization: Bearer YOUR_NEES_API_KEY
```

---

## 3. Quick Test with cURL

### macOS/Linux

```bash
export NEES_API_KEY="your-api-key"

curl -X POST "https://api.nees.cloud/chat" \
  -H "Authorization: Bearer $NEES_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Explain why AI apps need runtime governance in simple terms.",
    "mode": "supportive",
    "session_id": "demo-session-15min"
  }'
```

### Windows PowerShell

```powershell
$env:NEES_API_KEY="your-api-key"

$headers = @{
  Authorization = "Bearer $env:NEES_API_KEY"
  "Content-Type" = "application/json"
}

$body = @{
  message = "Explain why AI apps need runtime governance in simple terms."
  mode = "supportive"
  session_id = "demo-session-15min"
} | ConvertTo-Json

Invoke-RestMethod `
  -Uri "https://api.nees.cloud/chat" `
  -Method POST `
  -Headers $headers `
  -Body $body
```

---

## 4. Quick Test with Python

```python
import os
import json
import requests

api_key = os.getenv("NEES_API_KEY")

if not api_key:
    raise RuntimeError("Missing NEES_API_KEY environment variable.")

response = requests.post(
    "https://api.nees.cloud/chat",
    headers={
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    },
    json={
        "message": "Explain why AI apps need runtime governance in simple terms.",
        "mode": "supportive",
        "session_id": "demo-session-15min-python",
    },
    timeout=45,
)

print("Status:", response.status_code)
print(json.dumps(response.json(), indent=2, ensure_ascii=False))
```

---

## 5. Quick Test with Node.js

```js
const apiKey = process.env.NEES_API_KEY;

if (!apiKey) {
  throw new Error("Missing NEES_API_KEY environment variable.");
}

const response = await fetch("https://api.nees.cloud/chat", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    message: "Explain why AI apps need runtime governance in simple terms.",
    mode: "supportive",
    session_id: "demo-session-15min-node"
  })
});

const data = await response.json();

console.log("Status:", response.status);
console.log(JSON.stringify(data, null, 2));
```

---

## 6. What To Look For In The Response

A successful response may include:

```json
{
  "reply": "AI apps need runtime governance because...",
  "trace_id": "trace_xxxxx",
  "engine_source": "core_engine",
  "governance": {
    "status": "allowed",
    "mode_used": "supportive",
    "policy_applied": true,
    "memory_scope": "session"
  }
}
```

Response fields may evolve during developer preview.

The important idea is that the response is not only text. It can also include governance metadata that helps developers understand how the AI response was handled.

---

## 7. Why This Is Different From A Direct Model Call

A direct model call usually gives you:

```txt
Prompt → Model → Text Response
```

A governed NEES call gives you:

```txt
Request
  ↓
Runtime governance
  ↓
Model response
  ↓
Governance metadata
  ↓
Traceable output
```

This helps developers answer questions such as:

- Which runtime mode was used?
- Was policy applied?
- What memory scope was active?
- Which engine handled the request?
- Is there a trace ID for debugging?
- Can this response be reviewed later?

---

## 8. Recommended First Test

Try the same user message in two ways:

1. Directly through your normal model provider
2. Through NEES Core Engine

Then compare:

| Area | Direct Model Call | NEES Governed Call |
|---|---|---|
| Text response | Yes | Yes |
| Runtime mode | Usually no | Yes |
| Trace ID | Usually no | Yes |
| Governance metadata | Usually no | Yes |
| Memory scope visibility | Usually no | Yes |
| Policy visibility | Usually no | Yes |
| Debugging support | Limited | Stronger |

---

## 9. Common First Integration Mistakes

### Missing API Key

If you see `401 Unauthorized`, check:

- Did you set `NEES_API_KEY`?
- Did you pass it as `Authorization: Bearer YOUR_KEY`?
- Is the key active?

### Wrong Endpoint

Use:

```txt
https://api.nees.cloud/chat
```

Do not use:

```txt
https://api.nees.cloud/v1/chat
```

unless your access instructions specifically mention another endpoint.

### Missing Content-Type

Make sure your request includes:

```txt
Content-Type: application/json
```

### Expecting Only Text

NEES may return text plus governance metadata.

Do not treat the response as only a plain string. Parse the full JSON response.

---

## 10. What To Try Next

After your first request works, try:

- Changing the `mode`
- Keeping the same `session_id`
- Sending follow-up messages
- Logging the `trace_id`
- Comparing direct model calls vs NEES calls
- Adding NEES into a small prototype app

---

## 11. Live Sample App

A live sample app connected to the governed runtime is available here:

```txt
https://naina.nees.cloud
```

This can help you see the governed response flow in a real interface.

The GitHub repository is mainly for API docs, quickstarts, and developer preview access.

---

## 12. Feedback We Want Most

If you test NEES Core Engine, we are especially interested in:

- where the API feels unclear
- whether trace IDs help debugging
- whether governance metadata is useful
- where fallback or escalation behavior feels incomplete
- what fields your production AI app would need
- what would stop you from integrating this into a real workflow

Feedback template:

```txt
.github/ISSUE_TEMPLATE/feedback.md
```

I'd genuinely suggest trying NEES Core Engine once in a real or simulated AI workflow:

```txt
https://github.com/NEES-Anna/nees-core-developer-preview
```

---

## 13. First 15-Minute Success Criteria

You have completed the first integration when:

- You sent a request through NEES Core Engine
- You received a governed response
- You identified the trace ID
- You understood the governance metadata
- You can explain how NEES differs from a direct model call

---

## Developer Preview Notice

NEES Core Engine is currently in controlled developer preview.

API behavior, response fields, access rules, and documentation may evolve based on feedback from early builders.
