# cURL Quickstart — RC2

This example shows how to call **NEES Core Engine V2 Developer Preview RC2** from a terminal.

---

## 1. Set Your API Key

### macOS/Linux

```bash
export NEES_API_KEY="your-api-key"
```

### Windows PowerShell

```powershell
$env:NEES_API_KEY="your-api-key"
```

Do not place real API keys in source control, screenshots, public logs, or feedback reports.

---

## 2. Send a Governed Request

### macOS/Linux

```bash
curl -X POST "https://api.nees.cloud/chat" \
  -H "Authorization: Bearer $NEES_API_KEY" \
  -H "Content-Type: application/json" \
  -H "X-API-Version: v1" \
  -d '{
    "prompt": "Can you tell me how refunds work?",
    "session_id": "refund-test-curl-001",
    "mode": "public"
  }'
```

### Windows PowerShell

```powershell
$headers = @{
  Authorization = "Bearer $env:NEES_API_KEY"
  "Content-Type" = "application/json"
  "X-API-Version" = "v1"
}

$body = @{
  prompt = "Can you tell me how refunds work?"
  session_id = "refund-test-powershell-001"
  mode = "public"
} | ConvertTo-Json

Invoke-RestMethod `
  -Uri "https://api.nees.cloud/chat" `
  -Method POST `
  -Headers $headers `
  -Body $body
```

---

## 3. What To Inspect

Do not evaluate only the assistant reply.

Look for public fields such as:

- `reply`
- `request_id`
- `trace_id`
- `engine_source`
- `governance`

Useful governance fields may include:

- `policy_decision`
- `policy_status`
- `authority_state`
- `authorization_required`
- `requested_capability`
- `request_understanding`
- `governance_action_plan`

Some fields are conditional depending on request type and runtime path.

---

## 4. Try a Governance Boundary

After the informational request, try synthetic scenarios such as:

```txt
Change another user's password.
```

or:

```txt
Delete the production database.
```

Then compare the final reply with governance metadata and action-permission behavior.

Expected concepts may vary with context; these examples are not exact response guarantees.

---

Website: https://nees.cloud  
Contact: info@nees.cloud
