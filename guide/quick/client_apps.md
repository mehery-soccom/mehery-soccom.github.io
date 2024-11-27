---
layout: default
title: Client Apps
parent: Guide
nav_order: 1
has_children: true
---
# Client Apps
Any inbound and outbound message goes through client apps and is routed to appropriate handler based on it configuration. _Client Apps_ can be switched for any convesation using API's or configurations.
- For inbound communcation can be bound to only one _Client App_ at a time assigned.
- Any _Client App_ can be used for outbound communication, and will not affect existing app connected with session.

  <img width="725" alt="Screenshot 2022-01-29 at 8 09 51 PM" src="/content/static//design/data-flow.png">