# Naina Persona — NEES Core V2 Reference Implementation

Naina Persona is a real application proof surface for NEES Core Engine V2.

Its value to developers is not that every application should copy the same persona design. Its value is that it demonstrates how an application layer must preserve and correctly act on governance outcomes returned by Core.

---

## Integration Principle

A governed application should follow a pattern like this:

```txt
User request
   ↓
Application adapter
   ↓
NEES Core Engine V2
   ↓
Governance decision
   ↓
Application honors decision
   ↓
Action / No Action
   ↓
User-facing response
```

The application adapter is part of the safety and reliability boundary.

---

## Why CLARIFY Matters

A production integration issue previously showed this clearly.

NEES Core returned a legitimate **CLARIFY** result for a request that required more information. The Core behavior was correct, but the Persona integration path initially treated that response as invalid instead of preserving it as a first-class governance outcome.

The integration was corrected so the runtime now preserves:

```txt
CLARIFY → NO ACTION → CORE → RESPONSE
```

while maintaining normal execution behavior for valid allowed requests:

```txt
ALLOW → EXECUTED → CORE → RESPONSE
```

This is an important developer lesson:

> Correct governance at the Core layer is not enough if the consuming application collapses or overrides the decision contract.

---

## What Developers Should Learn from the Reference

### 1. Treat governance outcomes as first-class states

Do not reduce ALLOW, CLARIFY, ESCALATE, and BLOCK into a generic success/failure boolean.

### 2. Couple decisions to action state

CLARIFY and BLOCK should not silently execute an external action.

### 3. Preserve fail-closed behavior for malformed responses

Supporting legitimate CLARIFY behavior should not weaken handling of malformed or untrusted response structures.

### 4. Test both sides of a fix

When an integration bug is corrected, retest both the newly supported path and previously working behavior.

For the Persona integration, that meant confirming legitimate CLARIFY handling while also confirming normal ALLOW execution continued to function.

---

## Reference, Not Certification

Naina Persona is a reference implementation and live integration example. It is not evidence that every downstream integration will automatically preserve NEES governance correctly.

Each application remains responsible for:

- mapping governance outcomes correctly
- enforcing action/no-action behavior
- maintaining session/context boundaries
- protecting secrets and credentials
- handling failures safely
- testing its own side effects and tool integrations

Use the Governance Lab and Developer Preview challenge workflow to test those boundaries.
