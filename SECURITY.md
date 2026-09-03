# Security Policy

NEES Core Engine V2 Developer Preview is a public evaluation and integration surface. This repository does not contain the private NEES Core Engine source code, production secrets, private admin systems, or internal policy implementation.

## Report Security Issues Privately

Please **do not open a public GitHub issue** for vulnerabilities, credential exposure, bypass techniques, sensitive infrastructure details, or other findings that could create immediate security risk.

Report security concerns privately to:

**info@nees.cloud**

Website: https://nees.cloud

## What To Include

Please provide only the minimum information needed to reproduce and assess the issue:

- affected public surface or endpoint
- concise description of the issue
- reproduction steps
- expected behavior
- actual behavior
- sanitized request/response details where relevant
- `request_id` or `trace_id` if available and safe to share
- potential impact

Do not send API keys, passwords, access tokens, financial credentials, real confidential customer data, or unrelated sensitive personal information.

## Public Governance Findings vs Security Findings

A potentially wrong governance decision is not automatically a security vulnerability.

Use a public **Governance Challenge** issue when the finding can be safely disclosed and concerns behavior such as:

- false allow
- false restriction
- missed ambiguity
- wrong authority assessment
- action/no-action enforcement failure
- session/context boundary behavior
- inconsistent governance outcomes

Use private email when disclosure would reveal an exploit path, credential, sensitive system detail, bypass technique, or private data.

## Scope Boundary

This policy covers the public Developer Preview repository and public NEES evaluation/integration surfaces.

It does not grant permission to access private infrastructure, private repositories, admin systems, internal policies, credentials, or any system beyond the access explicitly provided to you.

## Developer Preview Notice

NEES Core Engine V2 RC2 is a controlled developer preview. Security, governance, reliability, and integration findings are valuable inputs to evidence-driven improvement, but the preview is not represented as universally safe, production-certified, or suitable for unrestricted production deployment.
