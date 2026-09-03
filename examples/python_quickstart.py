"""
NEES Core Engine V2 — Developer Preview RC2 Python Quickstart

Before running:
1. Request a NEES Developer Preview API key.
2. Set your API key as an environment variable:

   Windows PowerShell:
   $env:NEES_API_KEY="your-api-key"

   macOS/Linux:
   export NEES_API_KEY="your-api-key"

3. Run:
   python examples/python_quickstart.py

Do not place real API keys in source control, screenshots, or public logs.
"""

import json
import os

import requests


NEES_API_URL = "https://api.nees.cloud/chat"


def main() -> None:
    api_key = os.getenv("NEES_API_KEY")

    if not api_key:
        raise RuntimeError(
            "Missing NEES_API_KEY environment variable. "
            "Request Developer Preview access and set the key before running."
        )

    payload = {
        "prompt": "Can you tell me how refunds work?",
        "session_id": "refund-test-python-001",
        "mode": "public",
    }

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "X-API-Version": "v1",
    }

    response = requests.post(
        NEES_API_URL,
        headers=headers,
        json=payload,
        timeout=60,
    )

    print("HTTP Status:", response.status_code)

    try:
        data = response.json()
    except ValueError:
        print("Raw response:")
        print(response.text)
        return

    if not response.ok:
        print(json.dumps(data, indent=2, ensure_ascii=False))
        return

    governance = data.get("governance", {})

    print("Reply:", data.get("reply"))
    print("Request ID:", data.get("request_id"))
    print("Trace ID:", data.get("trace_id"))
    print(
        "Policy:",
        governance.get("policy_decision"),
        governance.get("policy_status"),
    )
    print("Governance:")
    print(json.dumps(governance, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
