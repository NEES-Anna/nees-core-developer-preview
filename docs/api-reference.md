# NEES Core Engine API Reference

This document provides a basic developer preview API reference for NEES Core Engine.

---

## Base URL

```txt
https://api.nees.cloud
```

---

## Authentication

NEES Core Engine requires Bearer token authentication.

```txt
Authorization: Bearer YOUR_NEES_API_KEY
```

API keys are currently issued manually during developer preview.

---

## Chat Endpoint

```txt
POST /chat
```

---

## Request Headers

```txt
Authorization: Bearer YOUR_NEES_API_KEY
Content-Type: application/json
```

---

## Request Body

```json
{
  "message": "Respond as a governed assistant",
  "mode": "supportive",
  "session_id": "demo-session"
}
```

---

## Request Fields

| Field | Type | Required | Description |
|---|---|---:|---|
| `message` | string | Yes | User message or instruction |
| `mode` | string | No | Runtime behavior mode |
| `session_id` | string | No | Session identifier for continuity/testing |

---

## Example Request

```bash
curl -X POST "https://api.nees.cloud/chat" \
  -H "Authorization: Bearer YOUR_NEES_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Explain AI governance in simple terms.",
    "mode": "supportive",
    "session_id": "demo-session"
  }'
```

---

## Example Response

```json
{
  "reply": "AI governance means controlling how an AI system behaves before its response reaches the user...",
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

---

## Common Status Codes

| Status | Meaning |
|---:|---|
| `200` | Request completed successfully |
| `401` | Missing or invalid API key |
| `429` | Rate limit or usage limit reached |
| `500` | Internal service error |

---

## Developer Preview Notice

The API contract may evolve during the developer preview phase.

Developers are encouraged to share feedback on:

- Request structure
- Response structure
- Trace metadata
- Governance fields
- SDK needs
- Error clarity
