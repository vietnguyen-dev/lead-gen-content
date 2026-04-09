# AGENTS.md

## Project Overview

This repository, `lead-gen-content`, is a shared npm package for content-related logic used across a broader network of lead generation websites. It is not a standalone website. Work in this repo should focus on reusable package code that can be versioned, published, or linked into multiple downstream properties.

The package is configured as an ES module package through `package.json` with `"type": "module"`.

## Current Repository Structure

- `README.md`
  - High-level intent for the package.
- `package.json`
  - npm package metadata and scripts.
- `index.ts`
  - Intended top-level module entry point for exports.
- `property-wholesaling/`
  - Property-specific shared content/types area.
- `property-wholesaling/iHome.ts`
  - Defines the `iHome` interface:
    - `title: string`
    - `subHeading: string`
- `property-wholesaling/test-template/`
  - Present but currently empty.

## What Agents Should Build Here

Agents should treat this repo as a reusable library package. Good contributions include:

- shared content interfaces and schemas
- reusable templates for lead generation properties
- formatting and transformation utilities
- package exports and module organization
- tests and release-oriented package improvements

Agents should not treat this repository like a full website application unless the user explicitly changes that direction.

## Implementation Guidance

- Prefer small, reusable modules over site-specific one-off logic.
- Keep property-specific code grouped under folders like `property-wholesaling/`.
- Export public package surface area through `index.ts` when adding reusable modules.
- Preserve ES module compatibility.
- Keep naming and types straightforward; this repo currently leans toward simple TypeScript interfaces and utility modules.

## Current State Notes

- The codebase is still in an early scaffolding phase.
- `package.json` still points `main` to `index.js`, while the source entry file is currently `index.ts`.
- The default `npm test` script is still a placeholder and does not run a real test suite.
- There is an existing tracked file `property-wholesaling/iHome.ts` in git history. If it is missing from the working tree, do not assume it should be recreated or removed unless the user asks.

## Safe Working Rules

- Read `README.md` first before making structural changes.
- Do not introduce app-specific assumptions that conflict with the repo’s package/library role.
- Avoid duplicating content logic that should live in shared abstractions.
- If adding new folders, keep them organized by reusable domain concepts or property groupings.
- If you add TypeScript source files, make sure exports and package structure remain coherent.

## Priority When Updating This Repo

1. Preserve the package’s role as shared infrastructure for multiple lead generation sites.
2. Keep the public module surface simple and reusable.
3. Improve structure, types, and maintainability before adding speculative complexity.
