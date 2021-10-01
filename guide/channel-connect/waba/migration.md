---
layout: default
title: WABA Number Porting
parent: WhatsApp Business API
grand_parent: Channel Integration
nav_order: 100
---
# WABA Number Porting
This document describes the Number Porting feature and its requirements, as well as the process needed to port a number from one BSP to MeherY



## Troubleshooting

During the migration process, a few errors might occur. Here is how to solve them:


> **"Message on behalf request not yet accepted"**


Before you can verify your phone number ownership, you first need to accept the message on behalf request that was sent to your Facebook Business Manager. You will also receive an email notification.

To approve the message on behalf request:

1. Click on the link in your email or log in to Business Manager.
1. Within Business Manager, click Business Settings.
1. Click Requests.
1. Under Received, find your 360dialogs request and click Approve.

If you can't see the message on behalf request, please check if the Facebook Business Manager you have access to has the same ID that you submitted in the migration form.

> **"Two-factor authentication not yet disabled"**


Before you can verify your phone number ownership you first need to disable two-factor authentication (2FA) for this number. This can be done either by you or by the Business Solution Provider, that is currently in charge of this number.

Please confirm that the 2FA was disabled before submitting the account for migration.

> **"This phone number is eligible to be added directly, and does not need to be ported. Please go to the 360 Client Hub and add it as a new number"**

This means that you should not use the migration form to register this number. Please should follow the process listed here instead.

> **"The phone number you are trying to port has already been moved to your destination WhatsApp Account. Please log in to the 360 Client Hub to continue."**

This means that the number is already available in 360dialog. You can use the 360 Client Hub to manage it.


> **"The source and destination WhatsApp Business Accounts need to represent the same business. Please use the same Facebook Business ID as before when submitting the number for migration."**

This means that the Facebook Business ID sent in the form is not the same ID that currently manages this account. Please check the Facebook Business Manager and/or the old BSP dashboard to confirm which Facebook Business ID manages this WhatsApp account.
Click here to understand more about the Facebook and WhatsApp accounts and IDs.


> **"Something went wrong when trying to migrate your phone number. Please try again after some time. If that does not work, please contact our support via the 360 Client Hub."**

This means that an unexpected error occurred. Please reach out to our Support team with the information about this number and account so we can investigate accordingly.






