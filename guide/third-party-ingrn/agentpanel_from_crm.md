---
layout: default
title: Agent Panel from CRM
parent: Third Party Integration
nav_order: 3
has_children: true
---
# Agent Panel from CRM

CRM will call browser URL with some encoded Information.

Scenarios:

User Not Logged In
- If the user is not logged in to the Agent Portal, accessing the URL will redirect them to the login page.

User Already Logged In:
- No Active Session for the Customer
If no active session exists for the customer, the chat window will open with the user's code/name pre-filled.

- Active Session Exists
If a session is already active, the URL will redirect the user to the ongoing chat session.

User Profile Does Not Exist in the System
- If the user's profile does not exist in the system, accessing the URL will automatically create the profile in the Admin Portal and redirect the user to the Agent Portal. The chat window will open with the user's code/name pre-filled.

---
CRM will need to call the below mentioned URL in the format specified:

https://{customer domain name}.mehery.com/agent/app/home/CHATBOX/chat_to_customer/{base64_encoded_number}.  

For eg: https://customer.mehery.com/agent/app/home/CHATBOX/chat_to_customer/bmFtZT1iaGF2aWs7bnVtYmVyPTkxODY5MTk0NTc2MDtjb2RlPWFiYztlbWFpbD1hYmNAZ21haWwuY29t

The encoded parameters will be passed as (name=dev;number=918691945766;code=abc;email=abc@gmail.com;)

Code and (email or phone number) are mandatory. Name is optional. If any element is missing, the URL callback will return an error.

Note: The User needs to be logged into the Mehery agent portal, for this URL to be successfully called.
