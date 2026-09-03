# NEES Core Engine V2 — RC2 Status

**Release:** Developer Preview RC2  
**Status:** Controlled Developer Preview  
**Current baseline:** RC2  
**Primary public evaluation surface:** https://nees.cloud  
**Developer Preview API:** https://api.nees.cloud  
**Contact:** info@nees.cloud

## Current Position

RC2 is the current validated working baseline for the agreed core governance scope.

For that scope, RC2 is feature-complete. This means the agreed core governance capabilities are implemented and their major behavior has been tested. It does **not** mean the product is permanently finished, universally safe, or production-certified.

Current work should focus on:

- bounded real-world usage
- developer adoption and integration experience
- deployment hardening
- tester and developer feedback
- regressions and edge cases
- evidence-driven improvements
- future independent assurance at an explicit RC2 milestone

The default direction is not to reopen already-validated architecture without a concrete regression, new evidence, or a clearly justified new requirement.

## RC2 Core Capabilities

### Request Understanding

RC2 distinguishes and reasons about:

- informational vs action-oriented requests
- explain, guidance, read, mutate, and execute paths
- referenced resources vs requested operations
- scope, sensitivity, consequence, and side effects
- authority and authorization requirements
- semantic-assisted interpretation

### Governance Decisions

The public governance model includes:

- **ALLOW**
- **CLARIFY**
- **ESCALATE**
- **REFUSE / BLOCK**

The objective is not to maximize refusal. Safe informational assistance may remain available while risky action execution is restricted.

### GovernanceIntentFrame

RC2 separates concepts such as:

- resource reference vs resource operation
- intent
- capability
- resource
- authority

This helps avoid treating discussion of a protected resource as equivalent to performing an operation on it.

### Cost Governance

RC2 includes runtime cost-governance behavior such as configured pricing information, per-request limits, enforceable rejection paths, and traceability.

### Context Budgeting

Reducible history or facts may be trimmed while mandatory governance context is preserved.

### Model Routing

Governance routing can resolve labels into concrete provider/model paths with enforcement and fallback behavior.

### Governed Cache

Cache lookup and storage occur inside the governed runtime path rather than bypassing governance.

### Traceability and Audit

RC2 exposes public trace and governance metadata intended to support debugging, evaluation, reproducibility, and review.

## Governance Lab

The NEES Governance Lab is live at:

https://nees.cloud

It is the primary public behavior-testing surface for RC2 and is intended to expose observable governance decisions and structured evidence without exposing the private Core implementation.

Developers should evaluate both:

- the assistant response
- the governance metadata and action/no-action behavior

## Naina Persona Reference Implementation

Naina Persona is a governed application/reference implementation connected to NEES Core Engine V2.

A production integration issue previously demonstrated why downstream applications must preserve Core governance decisions correctly. A legitimate `CLARIFY` outcome had been mishandled by the Persona integration layer. The integration was corrected so:

```txt
CLARIFY → NO ACTION → CORE → RESPONSE
```

is preserved, while normal allowed execution continues as:

```txt
ALLOW → EXECUTED → CORE → RESPONSE
```

The finding was attributed to the Persona integration layer rather than the Core decision itself.

## Assurance Boundary

An earlier RC1 baseline completed a bounded independent governance assurance milestone with the agreed test boundary reported **VERIFIED / GREEN**.

That result applies to its tested boundary. It is not presented as universal certification of every deployment, policy, integration, request type, or future release.

RC2 is the current developer-preview baseline. Any future independent assurance for RC2 should define its own workflow, evidence boundary, scope, and test set.

## Known Preview Limitations

RC2 remains a Developer Preview. Semantic/provider availability can affect behavior and latency. Some ambiguous, indirect, or context-heavy phrasing may require clarification. Broader real-world integration behavior is still being evaluated.

RC2 should be tested inside bounded workflows before any production use.

## Feedback

For wrong or inconsistent governance decisions, use the GitHub **Governance Challenge** issue template.

For broader structured developer feedback, use:

https://docs.google.com/forms/d/e/1FAIpQLSeQCG3MATzk5OGhSb77ioDIWlOwhtcNTTdpU4TIOHAeGgT_rg/viewform?usp=header

For security-sensitive findings, contact:

**info@nees.cloud**
