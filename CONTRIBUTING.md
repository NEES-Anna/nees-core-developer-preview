# Contributing to NEES Core Engine V2 Developer Preview

Thank you for helping evaluate NEES Core Engine V2 RC2.

This repository is a public developer-preview surface for documentation, integration examples, governance evaluation, reproducible evidence, and developer feedback.

It does **not** contain or accept contributions to the private NEES Core Engine implementation.

---

## High-Value Contributions

The most useful contributions include:

- reproducible wrong-governance-decision reports
- false allow / false block evidence
- ambiguity-handling failures
- action/no-action enforcement failures
- session/context boundary issues
- integration contract failures
- API and documentation improvements
- quickstart improvements
- real-world governance use cases
- SDK or developer-experience suggestions

If you believe NEES made the wrong governance decision, use the **Governance Challenge** issue template.

---

## Issue Types

Use the closest template:

- **Governance Challenge** — wrong, inconsistent, or incorrectly integrated governance behavior
- **Bug Report** — documentation, examples, API usage, or other developer-preview defects
- **Developer Feedback** — broader product, API, governance, or developer-experience feedback
- **API Key Request** — request controlled developer-preview access

---

## What This Repo Does Not Accept

Do not submit:

- private NEES Core Engine source code
- guessed or reconstructed proprietary governance logic
- internal policy files
- production credentials or secrets
- private admin endpoint information
- sensitive personal data
- exploit details that create immediate security risk

Serious security concerns should be reported privately to **info@nees.cloud** rather than disclosed publicly.

---

## Pull Requests

Pull requests are welcome for public-surface improvements such as:

- documentation fixes
- clearer diagrams or explanations
- example code improvements
- additional safe integration examples
- better error handling in examples
- additional developer-testing guidance

Before submitting:

1. Keep the change focused.
2. Do not include API keys, secrets, or private data.
3. Do not claim knowledge of undisclosed implementation details.
4. Keep assurance and safety claims evidence-bounded.
5. Explain how the change improves developer understanding, testing, or reproducibility.

---

## Evidence Quality

A useful governance report separates the **Core decision** from the **downstream integration behavior** whenever possible.

```txt
Core decision wrong → governance decision failure
Core decision correct + application behavior wrong → integration failure
```

Both are valuable findings.

See [Challenge NEES](docs/challenge-nees.md) and [Governance Decision Model](docs/governance-decisions.md).

---

## Developer Preview Notice

RC2 is the current developer-preview baseline for the agreed core governance scope.

The public API, documentation, integration guidance, and future release behavior may evolve based on real usage, regressions, developer evidence, and independent assurance work.

Website: https://nees.cloud  
Contact: info@nees.cloud
