# NEES Core Engine V2 — Developer Preview API Reference

This document describes the current public RC2 Developer Preview request/response contract.

---

## Base URL

```txt
https://api.nees.cloud
```

## Public Endpoints

```txt
GET /health
GET /ready
POST /chat
```

---

## Authentication

NEES Core Engine requires Bearer token authentication.

```txt
Authorization: Bearer <NEES_API_KEY>
```

Never expose a real API key in client-side production code, screenshots, logs, source control, or feedback reports.

---

## API Version Header

Developer Preview examples use:

```txt
X-API-Version: v1
```

---

## Chat Endpoint

```txt
POST /chat
```

### Request Headers

```txt
Authorization: Bearer <NEES_API_KEY>
Content-Type: application/json
X-API-Version: v1
```

### Minimum Request Body

```json
{
  "prompt": "Hello from my NEES integration",
  "session_id": "test-session-001"
}
```

`prompt` is required. `session_id` is optional but recommended so related test turns can be grouped.

### Optional Mode

```json
{
  "prompt": "Can you tell me how refunds work?",
  "session_id": "refund-test-001",
  "mode": "public"
}
```

### Request Fields

| Field | Type | Required | Description |
|---|---|---:|---|
| `prompt` | string | Yes | User request or instruction to evaluate |
| `session_id` | string | No | Recommended identifier for grouping related test turns |
| `mode` | string | No | Runtime mode when supported by the preview configuration |

---

## Example Request

```bash
curl -X POST "https://api.nees.cloud/chat" \
  -H "Authorization: Bearer <NEES_API_KEY>" \
  -H "Content-Type: application/json" \
  -H "X-API-Version: v1" \
  -d '{
    "prompt": "Can you tell me how refunds work?",
    "session_id": "refund-test-001",
    "mode": "public"
  }'
```

---

## Response Fields

A successful `/chat` response includes public fields such as:

- `reply`
- `session_id`
- `mode`
- `request_id`
- `trace_id`
- `engine_source`
- `governance`

Useful governance fields may include:

- `policy_decision`
- `policy_status`
- `consequence_severity`
- `authority_state`
- `authorization_required`
- `requested_capability`
- `request_understanding`
- `governance_action_plan`
- `semantic_status`
- `semantic_output_mode`

Some fields are conditional and may be absent depending on request type, context, configuration, and provider path.

---

## How To Read Governance Metadata

`requested_capability`, when present, describes what NEES believes the request is asking for. It is not by itself the final allow/block decision.

`governance_action_plan`, when present, may describe separate permissions for:

- action execution
- informational response
- provider response
- tool execution
- clarification
- verification
- escalation
- safe alternative handling

An action can be prohibited while an informational response remains allowed.

This separation is a core part of the public evaluation model.

---

## Request Failures

If a request returns a non-2xx response, record:

- HTTP status
- `request_id`, if returned
- `trace_id`, if returned
- whether the failure appears related to authentication, validation, timeout, provider/runtime availability, or another runtime error

Avoid automatically retrying destructive or side-effecting actions.

---

## Common Status Codes

| Status | Meaning |
|---:|---|
| `200` | Request completed successfully |
| `401` | Missing, invalid, expired, or revoked API key |
| `429` | Rate or usage limit reached |
| `500` | Internal runtime/service error |

Other status codes may be returned depending on validation or runtime conditions.

---

## Testing Principle

Do not evaluate only the assistant reply. Inspect the governance metadata alongside the final response.

For bounded evaluation, record the prompt, expected governance concept, final reply, `request_id`, `trace_id`, and the governance fields you inspected.

---

## Developer Preview Notice

This is a Developer Preview, not production-certified infrastructure. Public fields, conditional metadata, provider behavior, and API details may evolve as evidence is collected.

Website: https://nees.cloud  
Contact: info@nees.cloud
