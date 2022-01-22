---
layout: default
title: WABA Sandbox Number
parent: WhatsApp Business API
grand_parent: Channel Integration
nav_order: 150
---
# WABA Sandbox Number
This document describes how to get started with the MeherY Sandbox for WhatsApp

With the MeherY Sandbox for WhatsApp, you can prototype with WhatsApp immediately, without waiting for your number to be approved for WhatsApp

## What is the MeherY Sandbox for WhatsApp?

During the migration process, a few errors might occur. Here is how to solve them:


The MeherY Sandbox for WhatsApp is a pre-configured environment available to your domain in which you can prototype sending outbound messages, replying to incoming messages, and configuring things like message delivery callbacks. While you wait for your WhatsApp Business Profile to be connected with your phone number, it's a quick way to test out the functionality of the WhatsApp Business API with MeherY.

The Sandbox is pre-provisioned with a MeherY phone number (+91 8689909204) that is shared across all sandbox users. However, other users who share the same sandbox number won't receive your messages, only the ones who have opted in to your sandbox.

> *Please be aware that the MeherY Sandbox for WhatsApp is meant for **testing and discovery purposes only**. It should not be used for production.*

## How to proxy a MeherY Sandbox

To send or receive WhatsApp messages to an end user from the Sandbox, you must first have any user proxy the Sandbox.

First, send the message **"/proxy <your domain>"** to your Sandbox number in WhatsApp to join your sandbox.

When MeherY receives the proxy message, we will reply with a confirmation to that user that they have joined the Sandbox.

Upon joining your sandbox, end users will only receive messages from your specific sandbox. To disconnect from the Sandbox, they can reply to the message from WhatsApp with the word **/unproxy  <your domain>**. You can switch to a different Sandbox by messaging **/proxy <other domain>**.

> *Please note that the **Sandbox expires 24 hours after joining**. After this time, you should re-join to continue testing.*
  
## Test API's with sample code
 * [![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/tame-neon-chestnut)
