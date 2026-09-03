# NEES Core Engine V2 — Governance Decision Model

RC2 exposes four high-level governance outcomes:

- **ALLOW**
- **CLARIFY**
- **ESCALATE**
- **REFUSE / BLOCK**

The purpose of this model is not to maximize refusals. It is to preserve useful assistance while preventing requests from silently crossing authority, policy, scope, resource, or action boundaries.

---

## ALLOW

Use **ALLOW** when the request is sufficiently understood and permitted to continue within the active governance conditions.

An ALLOW decision does not mean "anything may happen." Execution still depends on the downstream capability and application integration.

Expected action state:

```txt
ALLOW → MAY EXECUTE
```

---

## CLARIFY

Use **CLARIFY** when proceeding would require guessing about material intent, scope, resource, authority, or requested operation.

Examples include:

- the user refers to a resource but does not clearly request an operation
- the requested action is ambiguous
- multiple materially different interpretations are possible
- authority or scope information is missing

Expected action state:

```txt
CLARIFY → NO ACTION
```

A correct CLARIFY result should preserve useful assistance by asking for the missing information rather than unnecessarily refusing the entire request.

---

## ESCALATE

Use **ESCALATE** when the request should not continue through the normal execution path and requires a higher-assurance, higher-authority, or review-oriented path.

Expected action state:

```txt
ESCALATE → DO NOT SILENTLY EXECUTE
```

The exact escalation destination is integration-dependent.

---

## REFUSE / BLOCK

Use **REFUSE / BLOCK** when the requested operation is not permitted under the active governance conditions.

Expected action state:

```txt
BLOCK → NO ACTION
```

A block should be specific to the disallowed operation where possible. Legitimate informational or safe assistance should not be removed merely because a risky action cannot proceed.

---

## Decision Quality

A governance engine can fail in more than one direction.

### False allow

The system allows an operation that should have been blocked, clarified, or escalated.

### False block

The system blocks a legitimate request that should have been allowed.

### Missed clarification

The system proceeds despite material ambiguity.

### Unnecessary clarification

The system asks for clarification when the request is already sufficiently clear.

### Wrong action state

The decision label appears correct, but the integration still executes or suppresses an action incorrectly.

### Context-boundary error

The decision is influenced by information from the wrong session, identity, memory scope, or context boundary.

These are the failure classes developers should actively test.

See [Challenge NEES](challenge-nees.md).
