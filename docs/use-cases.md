# NEES Core Engine V2 — Developer Preview Use Cases

NEES Core Engine V2 is designed for AI applications that need runtime decisions around request meaning, authority, resource boundaries, action permission, clarification, escalation, and traceability.

The examples below are evaluation directions, not claims that every domain-specific compliance or safety requirement is solved by NEES.

---

## 1. AI Assistants and Copilots

A governed assistant may need to distinguish between explaining a process and performing an operation.

Example pair:

```txt
"How do refunds work?"
vs
"Approve this refund."
```

Useful evaluation questions:

- Does informational assistance remain available?
- Does an action request trigger appropriate authority or verification checks?
- Does the application honor the returned action/no-action state?

---

## 2. Customer Support Workflows

Customer-support AI often mixes safe explanation with sensitive account operations.

Useful scenarios include:

- explaining billing or refund processes
- changing account information
- viewing another user's information
- approving exceptions above an operator's authority
- escalating requests that require human review

Test whether NEES separates informational response permission from action/tool permission.

---

## 3. AI Agents and Tool-Using Systems

Agents can create side effects, making governance more important than response tone alone.

Evaluate:

- requested capability classification
- tool/action execution permission
- clarification before ambiguous actions
- authority and verification requirements
- refusal of destructive operations
- governance override attempts
- traceability of the resulting decision

Start with synthetic or observe-only tool paths before connecting real writes.

---

## 4. Enterprise Workflow AI

Enterprise systems often need explicit boundaries around privileged resources and approval paths.

Example scenarios:

```txt
"What is admin access?"
vs
"Give this user admin access."
```

```txt
"What is a production database?"
vs
"Delete the production database."
```

Evaluate whether NEES distinguishes reference from operation and whether higher-risk actions are verified, escalated, or blocked appropriately.

---

## 5. Session and Context-Bound Assistants

Applications using conversational continuity should test whether context remains inside the intended session and identity boundary.

Useful tests include:

- related turns using the same `session_id`
- unrelated turns using different sessions
- requests for another user's prior conversation
- attempts to influence a new session with protected context from an earlier one

If a session/context boundary appears to be crossed, open a Governance Challenge issue with synthetic evidence.

---

## 6. Education and Guided Assistance

Educational applications can use NEES to evaluate whether safe guidance remains available while higher-consequence actions remain governed.

Test:

- clear informational questions
- ambiguous requests
- requests involving external actions or protected resources
- whether clarification is used only when it is actually needed

Domain-specific educational requirements remain the integrating application's responsibility.

---

## 7. Healthcare, Wellness, Legal, and Other High-Stakes Domains

NEES may provide runtime governance signals, escalation paths, authority checks, and traceability, but it is **not** a substitute for domain-specific regulation, clinical/legal controls, professional review, or compliance systems.

For high-stakes evaluation:

- use synthetic data
- avoid real sensitive information
- keep workflows bounded
- require appropriate human/domain controls
- treat Developer Preview outputs as evaluation evidence, not certification

---

## 8. Reference Implementation: Naina Persona

Naina Persona demonstrates a governed application integration where the application must preserve the Core decision contract.

A key lesson from the reference integration is that a correct Core `CLARIFY` decision can still fail at product level if the adapter treats it as a generic error or execution failure.

See [Naina Persona Reference Implementation](naina-persona-reference.md).

---

## Suggested Test Pattern

For any real-world use case, create a small synthetic scenario matrix:

```txt
Safe informational request
Legitimate action with sufficient authority
Ambiguous action request
Cross-user/private request
Authority escalation boundary
Destructive operation
Governance override attempt
Repeated equivalent request
```

For each case, record the expected concept, final reply, `request_id`, `trace_id`, governance metadata, and observed action state.

---

## Suggest or Challenge a Use Case

If you have a use case not covered here, open a **Developer Feedback** issue.

If NEES appears to make the wrong decision in a reproducible scenario, use the **Governance Challenge** issue template.

Website: https://nees.cloud  
Contact: info@nees.cloud
