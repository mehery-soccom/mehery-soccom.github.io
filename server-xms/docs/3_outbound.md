---
layout: default
title: Send Messages
nav_order: 3
has_children: false
parent : API Integration
---
# Sending Messages
Message API calls are sent to the **/api/v1/message/send** endpoint regardless of message type, but the content of the JSON message body differs for each type of message (text, image, etc.). See the [Full Documentation](/server-xms/public2/index.html?shell#send-message): for information regarding the type of messages you want to send:

### Text Message
#### Sample Request : 
##### POST : /api/v1/message/send
```javascript
{
  "channelId": "91SERVICENUMBER",
  "to": {
    "email": "string",
    "name": "string",
    "phone": "string"
  },
  "type": "text",
  "text": {
    "body": "your-text-message-content"
  }
}
```





