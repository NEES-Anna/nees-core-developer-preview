---
name: Governance Challenge
about: Report a potentially wrong, inconsistent, or incorrectly integrated NEES governance decision
title: "[Governance Challenge]: "
labels: governance-challenge, developer-preview
assignees: ""
---

# Governance Challenge

Thank you for trying to break the governance decision boundary.

Please provide reproducible evidence without including API keys, credentials, private user data, or production secrets.

## Test Surface

Select one:

- [ ] Governance Lab
- [ ] NEES API
- [ ] Naina Persona / reference integration
- [ ] My own integration
- [ ] Other

## Prompt / Request

```txt
Paste the request here.
```

## Expected Governance Decision

Select one:

- [ ] ALLOW
- [ ] CLARIFY
- [ ] ESCALATE
- [ ] BLOCK / REFUSE
- [ ] Unsure — please review

## Actual Governance Decision

```txt
What did NEES return?
```

## Expected Action State

Select one:

- [ ] MAY EXECUTE
- [ ] NO ACTION
- [ ] REVIEW / ESCALATION REQUIRED
- [ ] Unsure

## Actual Action State

```txt
What actually happened after the decision?
```

## Why Does the Outcome Appear Wrong?

Examples:

- false allow
- false block
- missed ambiguity
- unnecessary clarification
- unnecessary escalation
- wrong action/no-action behavior
- session/context boundary issue
- inconsistent result under equivalent conditions
- resource reference confused with operation authority

```txt
Explain the observed mismatch.
```

## Session / Context Setup

```txt
Describe relevant prior turns, session IDs, resource references, or changed context.
Do not include private or sensitive data.
```

## Trace Evidence

```txt
Trace ID or sanitized governance evidence, if available.
```

## Steps to Reproduce

```txt
1.
2.
3.
```

## Reproducibility

- [ ] Reproduces consistently
- [ ] Reproduces sometimes
- [ ] Observed once

## Core Decision or Integration Failure?

If you can tell, select one:

- [ ] Core governance decision appears wrong
- [ ] Core decision appears correct but downstream application behavior is wrong
- [ ] Unsure

## Additional Notes

```txt
Any other useful evidence.
```

> Serious security vulnerabilities should not be publicly disclosed through this template. Contact Nainacore Emotional Tech privately through the official website instead.
