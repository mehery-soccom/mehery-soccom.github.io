---
layout: default  
title: IMAP
parent: Email
grand_parent: Channel Integration
nav_order: 3
---

# IMAP & SMTP Configuration Guide

This document provides step-by-step instructions to configure IMAP and SMTP settings and generate app passwords for Gmail and Yahoo accounts. These settings are required for secure email integration with Mehery Smart Conversations.

---

## Gmail Configuration

### 1. Enable IMAP Access
- Open Gmail.
- Click the **Settings** gear icon → **See all settings**.
- Navigate to the **Forwarding and POP/IMAP** tab.
- Under **IMAP Access**, select **Enable IMAP**.
- Click **Save Changes**.

### 2. Set Up App Password
- Go to your [Google Account Security page](https://myaccount.google.com/security).
- Under **Signing in to Google**, ensure **2-Step Verification** is **ON**.
- After enabling 2-Step Verification:
  - Click **App passwords**.
  - Enter an app name, e.g., `Mehery-IMAP`.
  - Click **Generate**.
  - Save the generated app password securely.

### 3. Use Gmail IMAP and SMTP Settings

| Protocol | Host              | Port | Encryption | Notes               |
| -------- | ----------------- | ---- | ---------- | ------------------- |
| IMAP     | imap.gmail.com    | 993  | SSL/TLS    | Enable IMAP TLS - ON |
| SMTP     | smtp.gmail.com    | 465  | SSL/TLS    | SMTP Auth - ON, SMTP TLS - ON |

- **User:** Your full Gmail address (e.g., yourname@gmail.com)  
- **Password:** Use the app password generated above

---

## Yahoo Configuration

### 1. Enable IMAP Access
- IMAP is enabled by default on Yahoo accounts. No action needed.

### 2. Set Up App Password
- Go to your [Yahoo Account Security page](https://login.yahoo.com/account/security).
- Ensure **2-Step Verification** is **ON**.
- After enabling 2-Step Verification:
  - Scroll to **Account access** → **Generate and manage app passwords**.
  - Enter an app name, e.g., `Mehery-IMAP`.
  - Generate and save the app password securely.

### 3. Use Yahoo IMAP and SMTP Settings

| Protocol | Host                | Port | Encryption | Notes               |
| -------- | ------------------- | ---- | ---------- | ------------------- |
| IMAP     | imap.mail.yahoo.com  | 993  | SSL/TLS    | Enable IMAP TLS - ON |
| SMTP     | smtp.mail.yahoo.com  | 465  | SSL/TLS    | SMTP Auth - ON, SMTP TLS - ON |

- **User:** Your full Yahoo email address (e.g., yourname@yahoo.com)  
- **Password:** Use the app password generated above

---

## Important Notes
- Always use app passwords instead of your account password for email client integration when 2-Step Verification is enabled.
- Ensure encryption (SSL/TLS) is enabled for both IMAP and SMTP connections to keep your data secure.
- Save app passwords securely; they cannot be retrieved after closing the generation window. If lost, generate a new one.

---
