---
layout: default
title: Tracking Open Rates for campaigns
parent: Email
grand_parent: Channel Integration
nav_order: 6
---

# Understanding Open Rate Tracking in MeherY Smart Conversations

Monitoring email open rates is crucial for assessing the success of your email campaigns. MeherY Smart Conversations includes built-in open rate tracking to help you gauge recipient engagement and improve your outreach strategies.

## How Open Rate Tracking Works

MeherY inserts a tiny, invisible image—known as a **tracking pixel**—into every email sent through the platform. This pixel is hosted on our servers. When the recipient opens the email, their email client loads the pixel, allowing MeherY to record the open event and display it in MeherY dashboard.

This technique is commonly used in the email marketing industry and provides a reliable way to track opens. However, it is important to be aware of the following limitations:

- Certain email clients, such as Apple Mail with Privacy Protection, **preload images on their servers**. This can cause the pixel to trigger even if the email hasn’t actually been opened by the recipient, leading to **false positives**.
- Some recipients’ email settings may **block images by default**, meaning the tracking pixel won’t load unless they manually allow images from the sender.

## Why you may want to disable open rates tracking:
While tracking open rates offers valuable insights, there are situations where turning it off may be advantageous:

- **Increased Link Count:** Emails containing many links may impact how providers evaluate your message for spam filtering and deliverability.
- **Maintaining Trust and Authenticity:** Including tracking pixels might make your emails appear automated to the receiving serrvice providers. Disabling tracking can help your messages feel more authentic.
- **Avoiding Suspicion:** Email clients like Gmail sometimes notify recipients when images are blocked, which could reduce trust and engagement.

## How to Disable Tracking

MeherY lets you control open rate tracking easily:

1. Open the **Admin Panel** in your MeherY dashboard.  
2. Go to the **Config Setup** section.  
3. Under the **Default** tab, find the **Message Tracker** option.  
4. Toggle it off to disable open rate tracking for all outgoing emails.

> **Note:** Disabling tracking removes the tracking pixel from emails, so open rates will no longer be tracked.

---

By understanding how open rate tracking works, its limitations, and when it might be best to use it, you can make better decisions to optimize your email campaigns and audience experience in MeherY.
