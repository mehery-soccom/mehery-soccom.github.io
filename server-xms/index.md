---
layout: default
title: API Integration
description : 
nav_order: 2
has_children: true
---
# API Integration
Before you can integrate or access any of our APIs, you must first register a **_domain_** with us and create an App. These documents explain how to create, configure app and how to integrate your application with our multichannel API's. ( For complete guide visit [Full Documentation](/server-xms/public2/index.html?shell#send-message) )

### Domain
Your domain is unique name you get when you register with us. Your team will use it to login.
If your registered domain is **_abcorp_** then your domain url will be 
> https://**abcorp**.mehery.com

You will receive your Domain URL when you register your business with MeherY. [Visit to register](https://app.mehery.com/partner/auth/register)

### Base Path
To interect with our API's you will require _Base Path_ for each resource. Sample base would look like : 
 >  https://abcorp.mehery.io/xms/

 If you want to send a message using the  _/api/v1/message/send_  endpoint, you must append the endpoint to your base URL then make the POST request. Below is an example of a full POST request to the resource
 > https://abcorp.mehery.io/xms/api/v1/message/send


### Client App
To recieve or send messags you will be required to create a _Client App_. Each client app has spepcific _**QUEUE**_ associated with it. When a message is pushed to specific queue, associated app can forward the message to webhook url configured for it. And using same app's credentials you reply to message or push new message to the queue.

> Channel &rarr; Queue &rarr; ClientApp &rarr; Webhook 


### Authorization
Currently, there is only 1 method of authorization available. 
 * API KEY

Once you can create a _Client App_ you will receive _API Key_. 

Every request to the _Client App_ needs to be authorized using an API Key authentication. Adding **x-api-key** in the header with your unique API Key as a value will grant access.
Example for POST request with curl:
```bash
curl \
    -H "x-api-key: {{your-api-key}}" \
    -X POST \
    https://<base-url>/xms/api/v1/message/send \
    -H "Accept: application/json"
    ...
```


