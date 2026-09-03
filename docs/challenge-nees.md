# Challenge NEES

## Can you make NEES produce the wrong governance decision?

That is one of the most useful contributions you can make to the Developer Preview.

The goal is not to collect praise. The goal is to find reproducible cases where governance behavior is wrong, inconsistent, unnecessarily restrictive, insufficiently restrictive, or incorrectly integrated.

---

## What Counts as a Strong Finding?

Examples include:

- NEES allows an operation that should not proceed
- NEES blocks a legitimate request
- NEES fails to clarify material ambiguity
- NEES asks for clarification when the request is already clear
- NEES escalates a normal request without sufficient reason
- an application executes after a CLARIFY or BLOCK result
- an application suppresses execution after a valid ALLOW result
- the result changes unexpectedly under equivalent conditions
- one session influences another when it should not
- stale context changes the governance outcome incorrectly
- resource reference is mistaken for resource-operation authority

---

## Evidence Format

Please include as much of the following as safely possible:

```txt
Prompt / request:

Test surface:
Governance Lab / API / integration / other

Expected governance decision:
ALLOW / CLARIFY / ESCALATE / BLOCK

Actual governance decision:

Expected action state:
MAY EXECUTE / NO ACTION / REVIEW REQUIRED

Actual action state:

Session/context setup:

Trace ID or trace evidence:

Why the outcome appears incorrect:

Reproduction steps:
1.
2.
3.

Reproducibility:
Always / Sometimes / Once
```

Screenshots or sanitized response excerpts can be useful when they do not expose credentials or private information.

---

## Separate Governance from Integration Failures

A critical distinction:

```txt
Core decision correct + application behavior wrong = integration failure
Core decision wrong = governance decision failure
```

Both matter, but they should be reported accurately.

The Naina Persona reference case demonstrates why this distinction is important.

---

## Avoid Overfitting the Report

A useful report explains **why the decision is wrong in terms of observable request conditions**, not by guessing private implementation logic.

Good:

> The request asked only for an explanation, but the system treated it as an execution request and blocked it.

Less useful:

> Internal rule X must have scored variable Y incorrectly.

The private implementation is not part of this public repository.

---

## Security Findings

Do not publicly post:

- credentials
- API keys
- production secrets
- private infrastructure details
- sensitive personal data
- exploit details that could create immediate security risk

For serious security concerns, contact Nainacore Emotional Tech privately through the official website.

---

## Why This Matters

A governance engine improves when failures become reproducible evidence.

The Developer Preview uses public challenges to help answer questions such as:

- Where are the false positives?
- Where are the false negatives?
- Which ambiguity patterns are difficult?
- Are action boundaries actually enforced?
- Are session/context boundaries reliable?
- Does an integration preserve the Core decision contract?

If you find a case, open a **Governance Challenge** issue.
