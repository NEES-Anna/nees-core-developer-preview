# NEES Core Engine V2 — Developer Preview RC2

**Suggested tag:** `v2.0.0-dev-preview-rc2`  
**Release title:** `NEES Core Engine V2 — Developer Preview RC2`

NEES Core Engine V2 Developer Preview RC2 is the current validated working baseline for the agreed core governance scope.

This release marks the public developer-preview transition from generic governance documentation toward a structured evaluation, integration, and evidence surface.

## Highlights

- Request understanding for informational and action-oriented requests
- Explain, guidance, read, mutate, and execute path classification
- Resource-reference vs resource-operation separation
- Authority, authorization, consequence, and side-effect interpretation
- Semantic-assisted request understanding
- Governance decisions: **ALLOW, CLARIFY, ESCALATE, REFUSE / BLOCK**
- GovernanceIntentFrame-based intent/capability/resource/authority separation
- Cost governance and per-request enforcement
- Context budgeting with preservation of mandatory governance context
- Model/provider routing and fallback controls
- Governed cache behavior
- Trace metadata, policy lineage, and audit-oriented observability

## Public Evaluation Surfaces

### Governance Lab

Primary public RC2 testing surface:

https://nees.cloud

The Governance Lab is intended for deliberate governance evaluation, including:

- legitimate allow cases
- ambiguity and clarification behavior
- authority-sensitive requests
- escalation boundaries
- refusal/block behavior
- action vs no-action enforcement
- session/context boundary testing
- traceability and structured evidence

### Naina Persona Reference App

Live governed application/reference implementation:

https://naina.nees.cloud/

Naina Persona demonstrates how a downstream application consumes and preserves NEES Core Engine governance decisions.

## Governance Decision Contract

RC2 exposes governance outcomes including:

- **ALLOW** — request may continue within the governed path
- **CLARIFY** — more information is required before safe continuation; no external action should occur
- **ESCALATE** — higher-authority, higher-assurance, or review-oriented path required
- **REFUSE / BLOCK** — requested operation must not proceed

The objective is not to maximize blocking. Safe informational assistance may remain available while risky execution is restricted.

## Integration Lesson from Naina Persona

A production Persona integration issue showed why downstream applications must preserve Core decisions correctly.

A legitimate `CLARIFY` response was initially mishandled by the Persona integration layer. The adapter/runtime path was corrected so:

```txt
CLARIFY → NO ACTION → CORE → RESPONSE
```

is preserved, while normal allowed execution continues as:

```txt
ALLOW → EXECUTED → CORE → RESPONSE
```

This finding was attributed to the downstream integration layer rather than the Core governance decision.

## Developer Preview API

Hosted API:

```txt
https://api.nees.cloud
```

Public endpoints:

```txt
GET /health
GET /ready
POST /chat
```

Example request:

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

## Challenge NEES

Developers are explicitly invited to challenge governance behavior.

Open a **Governance Challenge** issue if NEES:

- allows something it should block
- blocks something legitimate
- misses real ambiguity
- clarifies unnecessarily
- escalates unnecessarily
- executes when the decision requires no action
- crosses a session/context boundary
- produces inconsistent outcomes under equivalent conditions

Strong reports should include expected vs actual governance decision, action state, sanitized `request_id` / `trace_id`, session/context setup, reasoning, and reproduction steps.

## Assurance Boundary

An earlier RC1 baseline completed a bounded independent governance assurance milestone with the agreed test boundary reported **VERIFIED / GREEN**.

That result applies only to its tested boundary and is not presented as universal certification.

RC2 is the current developer-preview baseline. Any future independent RC2 assurance should define its own workflow, evidence boundary, scope, and test set.

## Repository Safety Boundary

This release does **not** publish or open-source the private NEES Core Engine implementation.

The public repository contains documentation, examples, evaluation guidance, issue templates, and public reference material.

It does not contain:

- private NEES Core source code
- proprietary governance implementation logic
- internal policy files
- production secrets or credentials
- private admin endpoints
- private infrastructure configuration
- sensitive internal evidence or datasets

## License

Public repository materials are provided under the repository's MIT-based public-materials license boundary.

That license does not grant rights over the private Core implementation, hosted NEES services, production infrastructure, internal governance logic, trademarks/brand assets, or other non-public intellectual property.

## Developer Preview Limitations

RC2 is a controlled Developer Preview, not production-certified infrastructure or a claim of universal safety/correctness.

Semantic/provider availability can affect behavior and latency. Ambiguous or context-heavy phrasing may require clarification. Real-world integration behavior is still being evaluated.

RC2 should be tested inside bounded workflows before any production use.

## Feedback and Contact

Structured developer feedback:

https://docs.google.com/forms/d/e/1FAIpQLSeQCG3MATzk5OGhSb77ioDIWlOwhtcNTTdpU4TIOHAeGgT_rg/viewform?usp=header

Website:

https://nees.cloud

Contact:

info@nees.cloud

---

Built by **Nainacore Emotional Tech**.
