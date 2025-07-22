---
layout: default
title: POP3
parent: Email
grand_parent: Channel Integration
nav_order: 4
---
# GMail integration

## Prerequisite
1. Verified Google Account
2. Access to MeherY Client-Hub.

## Steps
To link Google account with MeherY:
1. Open Google Account, https://myaccount.google.com/security complete 2 – step verification & generate App Password (for mail) and note down it for future purpose.
2. Go to admin panel, Channels -> add channel -> Email
  - _Desc_ – Name of Channel as per your requirement
  - _Channel Code_ – Enter any code as per your requirement
  - _Default Queue_ – Select queue where you want inbound conversation to be handle
  - _POP3 Host_ – pop.gmail.com
  - _POP3 Port_ – 995
  - _Pop3 user_ – enter your email id which you want to integrate
  - _POP3 Password_ – enter your app password which you have created
  - _Please Enable (ON)_ – POP3 TLS, SMTP Auth, SMTP TLS
  - _SMTP Host_ – smtp.gmail.com
  - _SMTP Port_ – 587
  - _SMTP User_ - enter your same email id
  - _SMTP Password_ - enter your app password which you have created
## Functionality
  Customers can connect for their queries with user by using integrated email channel.
  Users can send their queries, multiple attachments, images, voice note, revert on mails to the agent. Also agent can revert with their solutions to the customers by attaching files, images.