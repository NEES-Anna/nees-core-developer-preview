# NEES Core Engine — Assurance Scope

This document explains how assurance claims are presented in the Developer Preview.

---

## Completed Milestone

An earlier NEES Core Engine V2 RC1 baseline completed an independent **bounded governance assurance assessment** with the agreed test boundary reported **VERIFIED / GREEN**.

This is a meaningful milestone because it shows that a defined governance boundary was independently exercised and assessed.

It should not be interpreted as universal certification of:

- every possible prompt
- every deployment environment
- every downstream application
- every future release
- every policy configuration
- every tool or side-effect integration
- all possible security or safety properties

---

## Current Baseline

The current Developer Preview baseline is **RC2**.

RC2 contains further governance-runtime refinements and is the baseline developers should evaluate now.

The prior RC1 assurance milestone remains historical evidence for its tested scope. It is not automatically extended to RC2 without a separately defined assurance boundary.

---

## Future RC2 Assurance

A future independent RC2 assurance engagement should define, before substantive testing begins:

- release identifier
- workflow
- evidence boundary
- scenarios
- expected artifacts
- independence conditions
- assessment scope
- commercial terms where applicable

This helps prevent vague claims such as "independently validated" from being stretched beyond the evidence that actually exists.

---

## Evidence Philosophy

The Developer Preview separates several evidence types:

### Internal testing

Useful for regression detection and engineering confidence.

### Public Governance Lab testing

Useful for observable behavior, developer challenge, and reproducible field evidence.

### Integration evidence

Useful for showing whether downstream applications preserve governance outcomes correctly.

### Independent bounded assurance

Useful for assessment by an external party against an agreed test boundary.

These evidence types complement one another, but they are not interchangeable.

---

## Reporting Language

Preferred language is specific and bounded.

Good:

> RC1 completed an independent bounded governance assurance assessment with the agreed test boundary VERIFIED / GREEN.

Avoid:

> NEES is independently certified safe for all AI applications.

The first statement describes the evidence. The second would overstate it.

---

## Why Public Challenges Matter

RC2 is now being exposed as a developer-preview evaluation surface so new evidence can come from real prompts, real integrations, and adversarial developer testing.

A high-quality failure report is not a marketing problem. It is useful evidence for improving the next release.
