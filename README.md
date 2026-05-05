# NEES Core Engine — Add Governance to Any AI App in 10 Minutes

**NEES Core Engine** is a governed AI runtime layer for production AI applications.

Most AI apps directly call a model and return the response.

NEES adds a governance layer between your application and the model provider — helping control AI behavior through policy, identity, memory scope, traceability, and runtime decision logic.

This repository is a public developer preview for builders who want to understand, test, and review the NEES Core Engine API.

---

## What is NEES Core Engine?

NEES Core Engine is not another chatbot.

It is a governance runtime designed to help AI products become more controlled, traceable, and production-ready.

Instead of sending user input directly to an AI model, your application sends the request through NEES Core Engine.

```txt
User
  ↓
Your App
  ↓
NEES Core Engine
  ↓
Governance Layer
  - Policy control
  - Identity rules
  - Memory scope
  - Runtime mode
  - Trace ID
  - Explainability metadata
  ↓
Model Provider
  ↓
Governed Response
```

---

## Why NEES?

Production AI needs more than better prompts.

AI apps need:

- Policy enforcement
- Traceability
- Identity consistency
- Memory boundaries
- Runtime governance
- Safer response control
- Reviewable decision metadata

NEES Core Engine is built to provide that governance layer.

---

## Developer Preview

We are inviting AI builders, developers, indie hackers, researchers, and product teams to test and review NEES Core Engine.

You can use this repo to:

- Explore the NEES governance flow
- Run quickstart examples
- Understand the API contract
- Request a developer API key
- Share technical feedback
- Suggest real-world use cases
- Help validate NEES as production AI governance infrastructure

NEES API keys are currently issued manually for early reviewers and selected builders.

---

## Quickstart

For the fastest first test, see the [15-Minute Integration Guide](docs/15-minute-integration-guide.md).

### 1. Request a Developer API Key

NEES Core Engine is currently available through controlled developer preview.

To request access:

- Open a GitHub issue using the **API Key Request** template
- Or visit: https://www.nainaaicreation.com
- Product hub: https://nees.cloud

### 2. Run a Test Request

Python example:

```python
import requests

response = requests.post(
    "https://api.nees.cloud/chat",
    headers={
        "Authorization": "Bearer YOUR_NEES_API_KEY"
    },
    json={
        "message": "Respond as a governed assistant",
        "mode": "supportive",
        "session_id": "demo-session"
    },
    timeout=45
)

print(response.json())
```

Node.js example:

```js
const response = await fetch('https://api.nees.cloud/chat', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer YOUR_NEES_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    message: 'Respond as a governed assistant',
    mode: 'supportive',
    session_id: 'demo-session',
  }),
})

const data = await response.json()
console.log(data)
```

---

## Example Response

A governed NEES response may include fields such as:

```json
{
  "reply": "Governed assistant response...",
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

Exact response fields may evolve during the developer preview.

---

## Repository Contents

```txt
examples/
  python_quickstart.py      Basic Python API example
  node_quickstart.js        Basic Node.js API example
  curl_quickstart.md        cURL / terminal request example

docs/
  governance-flow.md        How NEES sits between app and model
  api-reference.md          Basic API request and response contract
  request-api-key.md        How to request developer access
  use-cases.md              Suggested use cases
  developer-feedback.md     How to share useful technical feedback
```

---

## What You Can Test

During developer preview, developers can test:

- Basic governed AI response flow
- Session-based interaction
- Mode-based runtime behavior
- Trace ID visibility
- API response clarity
- Integration into prototype AI apps

---

## What This Repo Is Not

This repository does not expose the private NEES Core Engine source code.

It is a public developer preview repo for:

- API examples
- Documentation
- Developer onboarding
- Feedback collection
- Integration testing

Sensitive internal systems, private governance logic, production secrets, admin endpoints, and internal policy files are not included.

---

## Share Feedback

We are especially looking for feedback on:

- API clarity
- Governance response format
- Traceability usefulness
- Developer experience
- Possible SDK needs
- Real production use cases
- Safety and reliability concerns

Open an issue using the **Feedback** template.

---

## Built by

**Nainacore Emotional Tech**

Official website: https://www.nainaaicreation.com
Product hub: https://nees.cloud
Live API: https://api.nees.cloud

---

## Status

NEES Core Engine is currently in controlled developer preview.

API behavior, fields, documentation, and access rules may evolve as developer feedback is collected.
