---
layout: default
title: WABA - Onboarding
parent: WhatsApp Business API
grand_parent: Channel Integration
nav_order: 1
---
# WABA API - Onboarding an Enterprise

This part of the documentation details the processes to onboard an Enterprise onto the Mehery Smart Conversations platform with WhatsApp Business Account API. Components are related to activities with Facebook (Meta), with WhatsApp and with the Mehery platform. 

## WABA prerequisites

These are the basic prerequisites, without which we will not be able to proceed with getting a Phone Number allocated and operational for WhatsApp. So please read these and verify for yourself that they are all in place, before you go any further.

A Facebook Page should be available in the name of the enterprise seeking to use WhatsApp Business Account API. If the Facebook Business Account page shows any documentation as "pending", please review and submit the same.

A Facebook Business ID (with a verified Business if possible) should be visible on your Facebook Business Account Page

WhatsApp Number (Landline or Mobile), which can receive an incoming call from WA for validation of the access

Provide the Business Description which is required to be shown in the WhatsApp Business Account, to your end customers.

## Conditions

The number being proposed to be used for WhatsApp Business Account API should not be used for WhatsApp at the time of migration. If it is being used for WhatsApp, the WhatsApp Account has to be deleted, not just the WhatsApp App on your mobile. The Guidelines for deleting a WhatsApp Account are detailed here https://developers.facebook.com/docs/whatsapp/overview/phone-number#migrate 

You need to define a Display Name which will be shown on WhatsApp. The display name has to be close to your organisations name. The guidelines for Display name are detailed here https://developers.facebook.com/docs/whatsapp/overview/display-name 

## Migrating your WhatsApp Conversations from a mobile to the Mehery Platform (optional, where relevant)

If you are using a phone number for WhatsApp and you have several customer conversations on the phone, your enterprise may want to migrate these to your new Mehery Smart Conversation platform, so that you do not loose your historical conversations. To migrate these conversations, you need to do the following steps:
1. Individually for each user, export the conversation and save it either on your desktop or on a cloud drive
2. Once this is done, you can upload all the conversations onto your Mehery platform
3. These conversations will be visible as past conversations under (a) admin / sessions and (b) under teams / closed / expired sections

## The Facebook (Meta) approval procedure includes the following steps

## Facebook Business ID
You need to have a Facebook Business ID before you can proceed to the WhatsApp approval process. To find your Business ID, log into the Facebook Business Manager of the business and navigate to Business Settings. The Business Manager ID is displayed under the business name. 

If you don’t have a verified Facebook Business account, you need to create a Facebook Business Manager. To create a Business Manager:
1. Go to [business.facebook.com/overview.](https://business.facebook.com/overview)
2. Click Create Account.
3. Enter a name for your business, your name and work email address and click Next.
4. Enter your business details and click Submit.

More information about the [creation of the Facebook Business Manager you can find here.](https://www.facebook.com/business/help/1710077379203657)

## Message On Behalf request

After the Facebook Business Manager ID is provided, you will receive a Message on Behalf request. You need to accept it, so we can send messages on your behalf with your Facebook Business Manager ID.

To approve this request inside your FB Business Manager account, follow these steps:
1. Go to “Business Settings”
2. Click the option "Requests" and choose the section "Received".
3. Approve the request
![354225eaba7fd5ee8a46f2ba022964eb](https://user-images.githubusercontent.com/5462166/134468397-269b7e95-69df-40d3-93a4-d11c82f44e15.png)
**Only the admin** of the FBM account can see this request and accepted it .


> [INFO](){: .label .label-blue } The next step you should take is to verify your Facebook Business account, if you have not done so previously.


## WhatsApp approval procedure / Verify your Business Client account
Start the process of verifying your business in Facebook Business Manager. This procedure helps to protect users from false information.

> [WARNING](){: .label .label-yellow } Once you’ve completed the official form with the legal business details, you won’t be able to change them.

Go to Security Center and click Start Verification. If you haven’t logged in to your Business account, the button will be grayed out.
- Enter your business details, click Next and select your business from the list.
- Select a phone number and confirm details.
- After you received the verification code, click the Submit button.

It can take some time for Facebook to check all the details and approve your Business Verification.

## Phone number, Display Name & Review Process
After the verification is successful, you will be able to add your phone number and the Display Name for your WhatsApp business profile.

During the WhatsApp approval procedure, the WhatsApp team reviews the client’s request according to the [WhatsApp Business Policy](https://www.whatsapp.com/legal/business-policy/). You can check the status in the Facebook Business Manager account.

> [NOTE](){: .label .label-green } For more information, please read the [official WhatsApp API FAQ](https://developers.facebook.com/docs/whatsapp/faq/).

