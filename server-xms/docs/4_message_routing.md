---
layout: default
title: Routing Messages
nav_order: 4
has_children: false
parent : API Integration
---
# Routing Inbound Messages to Queue
By default all your inbound messages are forwarded to AgentDesk or ClientApp configred with __Default Inbound Queue__. 
To change routing of current session you can use session routing API. [Full Documentation](/server-xms/public2/index.html?shell#session-routing):

### Switch to External Server

#### POST /api/v1/session/routing
```javascript
{
  "queue": "external_bot",
  "sessionId": "61f3810a02e14c0877fc1a32"
}
```

### Switch to AgentDesk
To connect your customer to your agent on AgentDesk, all you need to do is create ClientApp with _AppType_ **AGENT** and hit the api. For example if you have named this queue as _agent\_panel\_queue_, you can use the following request.

#### POST /api/v1/session/routing
```javascript
// Default agent Desk Queue
{
  "queue": "agent_desk",
  "sessionId": "61f3810a02e14c0877fc1a32"
}
```

#### POST /api/v1/session/routing
```javascript
// Route to Team
{
  "queue": "agent_desk",
  "sessionId": "61f3810a02e14c0877fc1a32",
  "team": "sales"
}
```
#### POST /api/v1/session/routing
```javascript
// Route to Agent
{
  "queue": "agent_desk",
  "sessionId": "61f3810a02e14c0877fc1a32",
  "agent": "bob"
}
```
#### POST /api/v1/session/routing
```javascript
// Custom agent Desk Queue
{
  "queue": "agent_panel_queue",
  "sessionId": "61f3810a02e14c0877fc1a32"
}
```
