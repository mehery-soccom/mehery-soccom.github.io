---
layout: default
title: Receive Messages
nav_order: 2
has_children: false
parent : API Integration
---
# Received Messages Notifications
When you receive an inboud message, a notification is sent to the Webhook URL you set using Admin Dashboard. This document goes over the inbound messages you can receive and provides examples.

You must configure a callback (webhook URL) to receive messages.


### Set Webhook URL 
The webhook URL is a URL where the MeherY SocCom sends the notifications to, triggered by specific events. 
[Full Documentation](/server-xms/public2/index.html?shell#set-webhook-url)

```javascript
{
  "url": URL
}
```

* Webhooks can be used for:
    - Inbound Message Notifications: Use it to get a notification you when you have received a message.
    - Message Status Notifications: Monitor the status of sent messages.


### Notifications
When a customer sends you a message, the **MeherY** will send an HTTP POST request notification to the webhook URL with the details that are described in the [Full Documentation](/server-xms/public2/index.html?shell#messaging-apis-inbound-requests): 

#### Sample Notification for Text Message
```javascript
{
  "meta": {
    "domain": "alex",
    "server": "server.com"
  }
  "contacts": [
    {
      "channelId": "wa360:919988776655",
      "contactId": 1234567,
      "contactType": "WHATSAPP",
      "csid": "91YOURNUMBER",
      "lane": 919999998888,
      "profile": {
        "mobile": 919988776655,
        "name": "John Doe"
      },
      "profileId": "C34567"
    }
  ],
  "messages": [
    {
      "timestamp": 156753339076,
      "id": "wldnqneo324n4445l4",
      "contactId": "wa919988776655_918828218374",
      "from": 919988776655,
      "messageIdExt": 1234567,
      "session": {
        "sessionId": "xsds34434"
      },
      "type": "text",
      "text": {
        "body": "your-text-message-content",
        "type": "text"
      }
    }
  ]
}
```


 


