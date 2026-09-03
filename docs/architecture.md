# NEES Core Engine V2 — Public Architecture

This document describes the **public, behavior-level architecture** of NEES Core Engine V2 Developer Preview RC2.

It intentionally does not disclose private implementation code, internal policy files, proprietary scoring logic, infrastructure secrets, or administrative controls.

---

## Runtime Position

```txt
User / External Request
        ↓
Application / Agent / Persona
        ↓
NEES Core Engine V2
        ↓
Request Understanding
        ↓
Governance Intent Frame
        ↓
Policy + Authority + Resource + Context Checks
        ↓
Cost / Routing / Cache / Context Governance
        ↓
ALLOW | CLARIFY | ESCALATE | BLOCK
        ↓
Model / Tool / No Action
        ↓
Governed Response + Trace Evidence
```

NEES is designed to govern the path between a request and the action or model behavior that may follow from it.

---

## 1. Request Understanding

RC2 distinguishes between requests that are primarily informational and requests that may cause side effects.

The runtime can reason about whether the user is asking to:

- explain
- provide guidance
- mutate a resource
- execute an operation

The interpretation can include:

- resource reference
- requested operation
- scope
- sensitivity
- authority requirements
- side-effect implications
- semantic context

The purpose is to avoid treating every natural-language request as equivalent.

---

## 2. GovernanceIntentFrame

A central public concept in RC2 is the separation between **what is mentioned** and **what is being requested**.

For example, referring to a resource does not automatically mean the user is authorized to operate on it.

The public intent model distinguishes concepts such as:

- resource reference only
- resource operation requested
- concept vs operation
- intent
- capability
- resource
- authority

This reduces the risk of collapsing a descriptive request into an operational one.

---

## 3. Governance Decision Layer

The runtime resolves the request into one of four high-level governance outcomes:

- **ALLOW**
- **CLARIFY**
- **ESCALATE**
- **REFUSE / BLOCK**

These outcomes are not merely labels. Integrations are expected to respect their action implications.

For example:

```txt
CLARIFY → NO ACTION
BLOCK   → NO ACTION
ALLOW   → action may proceed if all execution conditions are satisfied
ESCALATE → normal execution should not silently continue
```

See [Governance Decision Model](governance-decisions.md).

---

## 4. Context Governance

RC2 includes context budgeting designed to preserve mandatory governance context while reducing lower-priority history or facts when needed.

The public design principle is:

> Context reduction must not silently remove the information required to make the governance decision correctly.

Session-aware continuity is therefore part of governance behavior, not merely conversational convenience.

---

## 5. Cost Governance

RC2 includes request-level cost governance.

The runtime can use pricing metadata and configured request limits to determine whether a request should continue within its permitted cost envelope.

Cost governance is treated as an enforceable runtime constraint rather than post-hoc accounting only.

---

## 6. Model Routing

Governance and routing are connected.

RC2 can map routing labels to concrete provider/model choices, apply enforcement constraints, and use fallback behavior where permitted.

The model provider is therefore downstream of governance rather than the sole controller of behavior.

---

## 7. Governed Cache

RC2 includes cache behavior that remains subject to governance constraints.

The public principle is simple:

> A cached result must not bypass the decision boundary that would apply to an equivalent live request.

---

## 8. Traceability and Audit Evidence

Governed interactions can produce trace-oriented metadata useful for:

- debugging
- decision review
- policy lineage
- regression analysis
- developer feedback
- bounded assurance work

Traceability does not by itself prove a decision was correct. It makes the decision path more reviewable and reproducible.

---

## Integration Responsibility

NEES can return a correct governance outcome and still be integrated incorrectly by an application.

Applications must preserve the decision contract.

A reference pattern is:

```txt
Request
  ↓
Core governance decision
  ↓
Integration honors decision
  ↓
Action / No Action
  ↓
User-facing response
```

The Naina Persona reference implementation is included in this repository specifically because it demonstrates this boundary.

See [Naina Persona Reference Implementation](naina-persona-reference.md).
