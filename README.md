# NEES Core Engine V2 — Developer Preview RC2

**Public evaluation, integration, and evidence surface for NEES Core Engine V2.**

NEES Core Engine is a governed AI runtime that sits between an application request and model/tool execution. It evaluates request meaning, requested operation or capability, authority, consequence, policy boundaries, action/tool permission, and response permission before the workflow continues.

> This repository does **not** expose the private NEES Core Engine source code.
>
> It exists so developers can understand the public architecture, integrate with the runtime, test governance behavior, challenge decisions, and report evidence.

---

## Current Baseline

**Developer Preview RC2** is the current validated working baseline for the agreed core governance scope.

RC2 includes:

- request understanding for informational and action-oriented requests
- intent classification across explain, guidance, read, mutate, and execute paths
- resource, scope, sensitivity, authority, and side-effect interpretation
- semantic-assisted understanding
- governance decisions: **ALLOW, CLARIFY, ESCALATE, REFUSE/BLOCK**
- GovernanceIntentFrame-based resource and operation separation
- cost governance and per-request enforcement
- context budgeting with preservation of mandatory governance context
- model/provider routing and fallback controls
- governed cache behavior
- trace metadata, policy lineage, and audit-oriented observability

RC2 is feature-complete for its agreed core scope. Future changes should be driven by real usage, deployment hardening, developer feedback, regressions, or new evidence.

NEES is not a chatbot, a model replacement, a generic prompt filter, universal AI safety, or production-certified infrastructure.

---

## What Problem Does NEES Solve?

A direct AI integration often looks like this:

```txt
User → App → Model → Response / Action
```

That leaves critical production questions scattered across prompts and application code:

- Is the request informational or asking for an external action?
- Does the user have authority for the requested operation?
- Is the resource merely referenced, or is an operation requested against it?
- Should ambiguity be clarified before proceeding?
- Should the request be escalated or blocked?
- What session/context is allowed to influence this decision?
- Was a decision traceable after the fact?

NEES moves those questions into a runtime governance path.

```txt
User Request
    ↓
Application / Agent
    ↓
NEES Core Engine V2
    ↓
Request Understanding
    ↓
Intent + Resource + Capability + Authority
    ↓
Policy / Context / Cost / Routing Governance
    ↓
ALLOW | CLARIFY | ESCALATE | BLOCK
    ↓
Model / Tool / No Action
    ↓
Governed Response + Trace Evidence
```

See [Architecture](docs/architecture.md) and [Governance Decision Model](docs/governance-decisions.md).

---

## Core Testing Principle

Do not evaluate only the assistant reply. For every meaningful test, inspect both:

- the final assistant response
- the governance metadata returned with the response

The most important behavior to evaluate is separation between useful response and risky execution. Safe informational assistance may remain allowed even when a requested action or tool operation is restricted.

---

## Governance Decisions

### ALLOW
The request is sufficiently understood and permitted to continue within the governed path.

### CLARIFY
The system does not yet have enough reliable information to safely choose the intended operation, scope, resource, or authority path. No external action should occur while clarification is required.

### ESCALATE
The request requires a higher-assurance, higher-authority, or review-oriented path rather than normal execution.

### REFUSE / BLOCK
The requested operation is not permitted under the active governance conditions. The blocked action must not execute.

The goal is not to maximize blocking. The goal is to preserve legitimate assistance while restricting actions that should not proceed.

---

## Governance Lab

The **NEES Governance Lab** is the public testing surface for evaluating NEES Core Engine V2 behavior.

Use it to test:

- legitimate requests that should be allowed
- ambiguous requests that should require clarification
- authority-sensitive or risky operations
- prompts that should escalate or be blocked
- action vs no-action enforcement
- session/context continuity and boundary behavior
- traceability and structured governance evidence

**Website:** https://nees.cloud

The Governance Lab is intended to make governance behavior observable instead of asking developers to trust a marketing claim.

Read [Governance Lab Testing Guide](docs/governance-lab.md).

---

## Can You Make NEES Produce the Wrong Governance Decision?

**Please try.**

If NEES:

- allows something it should block
- blocks something legitimate
- fails to clarify real ambiguity
- clarifies when the request is already clear
- escalates unnecessarily
- executes an action when the decision requires no action
- crosses a session, identity, memory, or context boundary
- produces inconsistent governance for equivalent conditions

open a **Governance Challenge** issue.

A strong report includes:

```txt
Prompt / request:
Expected governance decision:
Actual governance decision:
Expected action state:
Actual action state:
Session/context setup:
Request ID / Trace ID (if available):
Why the result appears incorrect:
Reproduction steps:
```

This repo is designed to turn developer criticism into reproducible governance evidence.

See [Challenge NEES](docs/challenge-nees.md).

---

## Naina Persona — Reference Implementation

**Naina Persona** is a real application proof surface showing NEES Core Engine V2 inside a governed AI companion/persona integration.

It demonstrates why integration layers must respect governance outcomes rather than flattening them into a generic success/failure response.

A production integration issue previously exposed this distinction: a legitimate Core `CLARIFY` outcome had been mishandled in the Persona adapter path. The integration layer was corrected so `CLARIFY → NO ACTION → CORE → RESPONSE` is preserved while normal `ALLOW → EXECUTED → CORE → RESPONSE` behavior continues to work.

That makes Naina Persona useful as a reference implementation for an important principle:

> The application must honor the governance decision contract, not merely call the governance runtime.

Read [Naina Persona Reference Implementation](docs/naina-persona-reference.md).

---

## Quick Integration

Hosted Developer Preview API:

```txt
https://api.nees.cloud
```

Public endpoints:

```txt
GET /health
GET /ready
POST /chat
```

Basic request:

```bash
curl -X POST "https://api.nees.cloud/chat" \
  -H "Authorization: Bearer YOUR_NEES_API_KEY" \
  -H "Content-Type: application/json" \
  -H "X-API-Version: v1" \
  -d '{
    "prompt": "Explain AI governance in simple terms.",
    "session_id": "developer-preview-test",
    "mode": "public"
  }'
```

`prompt` is required. `session_id` is optional but recommended for grouping related test turns.

For onboarding, see:

- [15-Minute Integration Guide](docs/15-minute-integration-guide.md)
- [API Reference](docs/api-reference.md)
- [Request Developer Access](docs/request-api-key.md)
- [Python example](examples/python_quickstart.py)
- [Node.js example](examples/node_quickstart.js)
- [cURL example](examples/curl_quickstart.md)

Never expose real API keys in client-side production code, screenshots, logs, source control, or feedback reports.

---

## What To Inspect

Useful public response fields may include:

- `reply`
- `session_id`
- `mode`
- `request_id`
- `trace_id`
- `engine_source`
- `governance`

Useful governance metadata may include:

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

## Assurance and Evidence

NEES Core Engine has already completed a bounded independent governance assurance milestone on the earlier RC1 baseline with the agreed test boundary reported **VERIFIED / GREEN**.

That milestone is evidence for the tested boundary; it is not presented as universal certification of every possible request, integration, policy, deployment, or future release.

RC2 is the current developer-preview baseline. Future independent assurance for RC2 should be scoped against an explicit release milestone, evidence boundary, workflow, and test set.

Read [Assurance Scope](docs/assurance-scope.md).

---

## What This Repository Contains

```txt
README.md                        Public developer-preview entry point

docs/
  architecture.md               Public runtime architecture
  governance-decisions.md       ALLOW / CLARIFY / ESCALATE / BLOCK model
  governance-lab.md             Public evaluation guidance
  challenge-nees.md             How to report wrong governance decisions
  naina-persona-reference.md    Reference implementation notes
  assurance-scope.md            Evidence and assurance boundaries
  15-minute-integration-guide.md
  api-reference.md
  request-api-key.md
  developer-feedback.md
  use-cases.md

examples/
  python_quickstart.py
  node_quickstart.js
  curl_quickstart.md

.github/ISSUE_TEMPLATE/
  governance-challenge.md
  feedback.md
  bug-report.md
  api-key-request.md
```

---

## What This Repository Does NOT Contain

This public repository intentionally does **not** contain:

- private NEES Core Engine source code
- proprietary governance implementation logic
- internal policy files
- production secrets or credentials
- private admin endpoints
- internal infrastructure configuration
- private datasets or sensitive evidence

Architecture documentation describes observable/public system behavior without publishing the private implementation.

---

## Developer Preview Limitations

This is a Developer Preview, not production-ready infrastructure. Semantic/provider availability can affect behavior and latency. Some ambiguous, indirect, or context-heavy phrasing may require clarification. Broader real-world integration behavior is still being evaluated.

RC2 has completed internal automated and Governance Lab validation. It should still be tested inside bounded workflows before any production use.

---

## Developer Feedback

We are especially interested in evidence about:

- false allow
- false restriction
- unnecessary clarification
- wrong authority assessment
- wrong resource or request classification
- session/context leakage
- action/no-action enforcement failures
- confusing governance metadata
- latency or provider/fallback issues
- inconsistent repeated outcomes
- integration friction

Use the GitHub issue templates so reports remain reproducible and reviewable.

---

## Contact

**Nainacore Emotional Tech**

- Website: https://nees.cloud
- Runtime API: https://api.nees.cloud
- Email: info@nees.cloud

---

## Developer Preview Notice

NEES Core Engine V2 RC2 is a developer-preview release, not a claim of universal safety or correctness.

The purpose of this repository is to make the system easier to inspect, integrate, challenge, and improve through evidence.
