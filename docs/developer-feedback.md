# Developer Feedback Guide

NEES Core Engine V2 RC2 is in developer preview.

Feedback is most useful when it helps distinguish product opinion from reproducible governance evidence.

## Choose the Right Feedback Route

Use the route that best matches your finding:

| Finding | Best route |
|---|---|
| Wrong or inconsistent governance decision | GitHub **Governance Challenge** issue |
| API/docs/example/integration defect | GitHub **Bug Report** issue |
| Broader product or developer feedback | [Google Feedback Form](https://docs.google.com/forms/d/e/1FAIpQLSeQCG3MATzk5OGhSb77ioDIWlOwhtcNTTdpU4TIOHAeGgT_rg/viewform?usp=header) |
| Security vulnerability or sensitive disclosure | `info@nees.cloud` — see [Security Policy](../SECURITY.md) |

---

## Use the Governance Challenge Template When

Open a **Governance Challenge** if you observe:

- a false allow
- a false block
- missed ambiguity
- unnecessary clarification
- unnecessary escalation
- wrong action/no-action behavior
- cross-session or context-boundary behavior
- inconsistent outcomes under equivalent conditions
- an integration that mishandles a correct Core decision

See [Challenge NEES](challenge-nees.md).

---

## Use the Google Feedback Form When

Use the structured feedback form for broader experience feedback such as:

- API clarity
- request/response structure
- trace usefulness
- governance metadata clarity
- integration experience
- documentation quality
- missing SDKs
- real-world use cases
- operational concerns
- developer ergonomics

Feedback form:

https://docs.google.com/forms/d/e/1FAIpQLSeQCG3MATzk5OGhSb77ioDIWlOwhtcNTTdpU4TIOHAeGgT_rg/viewform?usp=header

---

## Helpful Feedback Format

```txt
What were you trying to build or test?

Which surface did you use?
Governance Lab / API / integration / docs

What worked well?

What was confusing or difficult?

Which governance or trace information was useful?

What evidence or metadata was missing?

Would this fit a real AI product? Why or why not?

What should we test or improve next?
```

---

## Evidence Beats General Impressions

This is useful:

> In three equivalent tests the request was ALLOW twice and CLARIFY once, with no context change. Here are the sanitized traces and reproduction steps.

This is harder to act on:

> The governance felt inconsistent.

Both forms of feedback are welcome, but reproducible evidence can be investigated and regression-tested.

---

## Protect Sensitive Information

Never include:

- API keys
- passwords
- credentials
- production secrets
- private user data
- sensitive infrastructure details

Security-sensitive findings should be reported privately to **info@nees.cloud** rather than through a public issue or feedback form.
