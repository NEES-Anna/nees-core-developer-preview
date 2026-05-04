"""
NEES Core Engine Python Quickstart

Before running:
1. Request a NEES developer API key.
2. Set your API key as an environment variable:

   Windows PowerShell:
   $env:NEES_API_KEY="your-api-key"

   macOS/Linux:
   export NEES_API_KEY="your-api-key"

3. Run:
   python examples/python_quickstart.py
"""

import os
import json
import requests


NEES_API_URL = "https://api.nees.cloud/chat"


def main() -> None:
    api_key = os.getenv("NEES_API_KEY")

    if not api_key:
        raise RuntimeError(
            "Missing NEES_API_KEY environment variable. "
            "Please request a developer API key and set it before running."
        )

    payload = {
        "message": "Respond as a governed assistant and explain why governance matters in production AI.",
        "mode": "supportive",
        "session_id": "demo-session-python",
    }

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }

    response = requests.post(
        NEES_API_URL,
        headers=headers,
        json=payload,
        timeout=45,
    )

    print("Status:", response.status_code)

    try:
        data = response.json()
    except ValueError:
        print("Raw response:")
        print(response.text)
        return

    print(json.dumps(data, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()