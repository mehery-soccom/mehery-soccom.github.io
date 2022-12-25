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

### Image Message
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
  "type": "image",
  "image": {
    "caption": "your-video-caption",
    "filename": "your-video-caption",
    "link": "http(s)://the-url"
  }
}
```
### Video Message
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
  "type": "video",
  "video": {
    "caption": "your-video-caption",
    "filename": "your-video-caption",
    "link": "http(s)://the-url"
  }
}
```

### Template Message
You can create templates in *MeherY Admin Panel* under HSM templates. Once template is created you can use any of the following paramenter to select template :-  
  1. _Template ID_ 
  2. _Template Code_ with _lang_ as optional paramenter for Language.

In additon to template, you can custom variables in _data_, which will be supplied to eventually create your message from template, defined by you.

> if you are going to send templates after session has go started, templates do not need any approval, ont the other hand, in case you are going to use template to initiate conversation (without customer's response), you will need to submit template for apporval to channel. For example to push message to any _Whatsapp_ channel you will need to submit it for waba approval and track request progress under _Waba Templates_.

<img width="600" alt="Screenshot 2022-02-16 at 6 14 24 PM" src="https://user-images.githubusercontent.com/5462166/154267267-f035746b-a9eb-47d7-b193-f6a2403a6910.png">

#### Sample Request 1: 
##### POST : /api/v1/message/send
```javascript
{
  "channelId": "91SERVICENUMBER",
  "to": {
    "email": "john.doe@example.com",
    "name": "John Doe",
    "phone": "919988776655"
  },
  "type": "template",
  "template": {
    "data": {
      "amount": 10,
      "currency": "INR"
    },
    "code": "transaction_acknowledgment",
    "lang" : "en"
  }
}
```
#### Sample Request 2 : with image 
##### POST : /api/v1/message/send
```javascript
{
  "channelId": "91SERVICENUMBER",
  "to": {
    "email": "john.doe@example.com",
    "name": "John Doe",
    "phone": "919988776655"
  },
  "type": "template",
  "template": {
    "data": {
      "amount": 10,
      "currency": "INR"
    },
    "code": "transaction_acknowledgment",
    "lang" : "en"
  },
  "image": {
    "caption": "your-image-caption",
    "filename": "your-image-caption",
    "link": "http(s)://the-url"
  }
}
```
#### Sample Request 3 : with video 
##### POST : /api/v1/message/send
```javascript
{
  "channelId": "91SERVICENUMBER",
  "to": {
    "email": "john.doe@example.com",
    "name": "John Doe",
    "phone": "919988776655"
  },
  "type": "template",
  "template": {
    "data": {
      "amount": 10,
      "currency": "INR"
    },
    "code": "transaction_acknowledgment",
    "lang" : "en"
  },
  "video": {
    "caption": "your-video-caption",
    "filename": "your-video-caption",
    "link": "http(s)://the-url"
  }
}
```
#### Sample Request 4 : with document 
##### POST : /api/v1/message/send
```javascript
{
  "channelId": "91SERVICENUMBER",
  "to": {
    "email": "john.doe@example.com",
    "name": "John Doe",
    "phone": "919988776655"
  },
  "type": "template",
  "template": {
    "data": {
      "amount": 10,
      "currency": "INR"
    },
    "code": "transaction_acknowledgment",
    "lang" : "en"
  },
 "document": {
    "caption": "your-video-caption",
    "filename": "your-video-caption",
    "link": "http(s)://the-url"
  }
}
```
