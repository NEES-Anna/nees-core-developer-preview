# cURL Quickstart

This example shows how to call NEES Core Engine from the terminal.

---

## 1. Set your API key

### macOS/Linux

```bash
export NEES_API_KEY="your-api-key"
```

### Windows PowerShell

```powershell
$env:NEES_API_KEY="your-api-key"
```

---

## 2. Send a governed chat request

### macOS/Linux

```bash
curl -X POST "https://api.nees.cloud/chat" \
  -H "Authorization: Bearer $NEES_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Respond as a governed assistant and explain why AI apps need runtime governance.",
    "mode": "supportive",
    "session_id": "demo-session-curl"
  }'
```

### Windows PowerShell

```powershell
$headers = @{
  Authorization = "Bearer $env:NEES_API_KEY"
  "Content-Type" = "application/json"
}

$body = @{
  message = "Respond as a governed assistant and explain why AI apps need runtime governance."
  mode = "supportive"
  session_id = "demo-session-powershell"
} | ConvertTo-Json

Invoke-RestMethod `
  -Uri "https://api.nees.cloud/chat" `
  -Method POST `
  -Headers $headers `
  -Body $body
```

---

## Expected Result

A successful response may include:

```json
{
  "reply": "Governed assistant response...",
  "trace_id": "trace_xxxxx",
  "engine_source": "core_engine",
  "governance": {
    "status": "allowed",
    "mode_used": "supportive",
    "policy_applied": true
  }
}
```

Response fields may evolve during developer preview.
