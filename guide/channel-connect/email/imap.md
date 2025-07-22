---
layout: default  
title: IMAP
parent: Email
grand_parent: Channel Integration
nav_order: 3
---

# IMAP & SMTP Configuration Guide

This document provides step-by-step instructions to:

1. **Generate app passwords and enable IMAP access** using popular providers like Gmail and Yahoo.
2. **Configure any IMAP/SMTP-supported email provider** with MeherY Smart Conversations.

Steps for Gmail and Yahoo are provided in this documentation. However, you can use any email provider that supports IMAP/SMTP. Please refer to your provider’s official documentation for the exact configuration settings.

---

## Step 1: Enabling IMAP & Generating App Passwords

To integrate your email securely, ensure IMAP is enabled and generate an app password (if required) through your email provider’s security settings.

### 1: Gmail

#### 1. Enable IMAP Access
- Open Gmail.
- Click the **Settings** gear icon → **See all settings**.
- Go to the **Forwarding and POP/IMAP** tab.
- Under **IMAP Access**, select **Enable IMAP**.
- Click **Save Changes**.

#### 2. Generate App Password
- Visit [Google Account Security](https://myaccount.google.com/security).
- Ensure **2-Step Verification** is enabled.
- After enabling:
  - Click **App passwords**.
  - Enter a name (e.g., `Mehery-IMAP`) and click **Generate**.
  - Save the generated password securely.

---

### 2: Yahoo

#### 1. Enable IMAP Access
- IMAP is enabled by default on Yahoo Mail.

#### 2. Generate App Password
- Visit [Yahoo Account Security](https://login.yahoo.com/account/security).
- Enable **2-Step Verification**.
- Then:
  - Go to **Generate and manage app passwords** under Account Access.
  - Create a name (e.g., `Mehery-IMAP`) and generate the password.
  - Save it securely.

---

## Step 2: Configuring Email with MeherY

After you’ve enabled IMAP and obtained your app password, follow these steps to connect your email to **MeherY Smart Conversations**.

### Steps to Configure Email Channel

1. Log in to the **MeherY Admin Panel**.
2. Go to the **Channels** section from the left sidebar.
3. Click **Add Channel** and select **Email**.
4. In the modal that appears, choose **IMAP**.
5. Enter the necessary IMAP/SMTP details as per your email provider:

---

### Configuration for Gmail

| Protocol | Host           | Port | Encryption | Notes                     |
|----------|----------------|------|------------|---------------------------|
| IMAP     | imap.gmail.com | 993  | SSL/TLS    | IMAP TLS must be ON       |
| SMTP     | smtp.gmail.com | 465  | SSL/TLS    | SMTP Auth and TLS ON      |

---

### Configuration for Yahoo

| Protocol | Host                | Port | Encryption | Notes                     |
|----------|---------------------|------|------------|---------------------------|
| IMAP     | imap.mail.yahoo.com | 993  | SSL/TLS    | IMAP TLS must be ON       |
| SMTP     | smtp.mail.yahoo.com | 465  | SSL/TLS    | SMTP Auth and TLS ON      |

---

### For Other Email Providers

You can integrate **any email account** that supports IMAP and SMTP.  
To find the correct configuration details:

- Visit your provider’s **support page** or **documentation**.
- Look for **IMAP/SMTP settings**, **port numbers**, and **encryption requirements**.
- Some providers may also require **app passwords** and enabling IMAP manually.
- You can contact MeherY's support team and they will help you out.

---

## Important Notes

- **Always use app passwords** instead of your main account password if 2-Step Verification is enabled.
- **Enable SSL/TLS encryption** to ensure secure communication.
- App passwords are visible only once—**store them securely** or regenerate if lost.

---
