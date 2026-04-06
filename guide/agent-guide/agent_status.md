---
layout: default
title: States
parent: Agent Guide
nav_order: 1
has_children: true
---
# Agent Status
Displays the real-time availability of agents in the Mehery Portal.

## Status Indicators:
- Green group icon – Represents a team
- Green tick – Agent is available and logged in
- Orange tick – Agent is available but logged out (based on configuration)
- Grey cross – Agent is unavailable and logged out (based on configuration)
- Orange question mark – Agent is idle (based on configuration)
- Red minus sign – Agent is unavailable but still logged in

---

## Configuration Behavior:

These statuses depend on the Agent Assignment settings in the Config Setup

When Agent Availability Condition is set to ONLINE:
- The orange tick (available but logged out) is shown
- The idle (question mark) state is not used

When set to ACTIVE:
- The idle (orange question mark) state is enabled
- A grey cross is shown whenever the agent is logged out, regardless of availability
