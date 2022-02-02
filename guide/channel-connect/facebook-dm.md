---
layout: default
title: Facebook DM integration
parent: Channel Integration
nav_order: 4
---
# Facebook DM integration

## Prerequisite
1. Verified Facebook Developer Account. [Login/Signup](https://developer.facebook.com/)
2. Verified Facebook Page [How to find Facebook PageId](https://www.facebook.com/help/1503421039731588)
3. Verified Facebook Buisness Manager Id

## Steps
1. On welcome screen, click on Create First App button. 
  - Click on "My App" >> "Add a New App"
  - ![How to Create a FBApp](https://theonetechnologies.com/Posts/files/select-an%20app-type_637714276530355668.png)
2. Here you'll be asked for Display Name and Contact Email of your New App ID.
  - ![How to Create a FBApp](https://theonetechnologies.com/Posts/files/entering%20-details-in-app-type%20(1)_637714276532494269.png)
2. From the popup enter “Display Name” of your new application and "Contact Email”, then click on the “Create App Id” Button.
3. Once your app is created, you’ll have to add a Messenger “product”.
  - There are tons of jobs a Facebook app can be dedicated to, but we specifically want a private messaging application. Go to your app’s dashboard and click Set Up in the Messenger box.
  - ![Product Type](https://miro.medium.com/max/1400/0*mh37nWRW5_keeS-0.png)
  - In the left-hand menu, you’ll then see Messenger under PRODUCTS
4. Get your page token and app secret
  - ![AppSecrets](https://support.appmachine.com/hc/article_attachments/360000207090/Screen_Shot_2018-05-03_at_10.05.45.png)
5. Add new "Channel"  in MeherY admin panel.
  - Enter all the details
  - "Verification Token" is provided by you, you can enter any secret string, just keep it handy for next step.
  - Once created you will see channel's webhook url. This is unique url, created specifically for your channel.
  - Copy Webhook.
6. Connect MeherY platform to your app
  - On the Products > Messenger > Settings page, go to the Webhooks section and click Subscribe To Events.
  - ![Webhook](https://miro.medium.com/max/1400/1*2PvIugb_27r0V9S--mnuWA.png)
  - Enter your webhook and Verification key
