# NEES Core Engine V2 — Governance Flow

NEES Core Engine V2 is designed as a governance runtime between an application and the model/tool path that may produce a response or external action.

A basic AI path often looks like this:

```txt
User → Application → Model / Tool → Response / Action
```

With NEES Core Engine V2:

```txt
User Request
    ↓
Application / Agent
    ↓
NEES Core Engine V2
    ↓
Request Understanding
    ↓
Governance Intent Frame
    ↓
Policy / Resource / Authority / Context Evaluation
    ↓
Cost / Routing / Cache Governance
    ↓
ALLOW | CLARIFY | ESCALATE | BLOCK
    ↓
Model / Tool / No Action
    ↓
Governed Response + Trace Evidence
```

---

## Request Understanding

RC2 evaluates whether a request is informational or action-oriented and can distinguish paths such as:

- explain
- guidance
- mutate
- execute

It can also interpret resource, scope, sensitivity, authority requirements, and side-effect implications with semantic assistance.

---

## Intent and Resource Separation

The GovernanceIntentFrame helps distinguish between:

- mentioning a resource
- requesting an operation against a resource
- describing a concept
- asking the application to execute a capability

This matters because a resource reference alone should not be treated as authority to modify or act on that resource.

---

## Governance Decisions

### ALLOW

The request is sufficiently understood and permitted to continue within the governed path.

### CLARIFY

Material information is missing or ambiguous. The system should request clarification before an external action proceeds.

```txt
CLARIFY → NO ACTION
```

### ESCALATE

The request should move to a higher-assurance, higher-authority, or review-oriented path rather than silently execute normally.

### REFUSE / BLOCK

The requested operation is not permitted under the active governance conditions.

```txt
BLOCK → NO ACTION
```

See [Governance Decision Model](governance-decisions.md).

---

## Context and Memory Boundaries

Session/context continuity can affect governance decisions, so context is treated as part of the decision boundary rather than conversational decoration.

RC2 context budgeting is designed to preserve mandatory governance context while reducing lower-priority history or facts when necessary.

Developers should actively test for stale context and cross-session influence.

---

## Cost, Routing, and Cache Governance

RC2 also governs operational runtime concerns:

- request-level cost limits and enforcement
- mapping routing labels to provider/model choices
- fallback behavior where permitted
- governed cache lookup/store behavior

A cached or cheaper path should not become a bypass around governance.

---

## Traceability

Governed interactions can expose trace-oriented metadata useful for review, debugging, policy lineage, regression analysis, and evidence collection.

Traceability makes a decision inspectable; it does not replace testing of whether the decision was correct.

---

## Integration Boundary

The consuming application must honor the governance result.

A correct Core decision can still fail at the application layer if the adapter ignores or incorrectly maps the decision.

The Naina Persona reference case demonstrates this difference between a **Core governance failure** and an **integration failure**.

See [Naina Persona Reference Implementation](naina-persona-reference.md).

---

## Test the Flow

Use the [Governance Lab Testing Guide](governance-lab.md) and [Challenge NEES](challenge-nees.md) to test false allows, false blocks, ambiguity handling, action/no-action enforcement, and session/context boundaries.
