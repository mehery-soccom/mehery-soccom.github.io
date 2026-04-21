---
layout: default
title: SDK Integration
parent: PushApp
nav_order: 1
---

# SDK Integration

## 🧾 Overview

SDK integration is required to enable push notifications and user tracking in your app.

It ensures that:

- Devices are registered correctly
- Push notifications can be delivered
- User activity (events) can be tracked

---

## ⚙️ Step 1: Register Your Mobile App

Before integrating the SDK, you need to add your mobile app in PushApp admin.

### Navigate to:

Admin → **Mobile Apps** → Create

---

### Configure Your App

For each app, you can add one or more platforms:

- Android
- iOS

---

### Platform Setup Requirements

#### 📱 Android

Provide:

- Package name (Bundle ID)
- Firebase configuration:
  - FCM Service Account (`service-account.json` file)

---

#### 🍎 iOS

Provide:

- Bundle ID
- Firebase configuration:
  - FCM Service Account (`service-account.json` file)
- APNs configuration:
  - Auth Key (`.p8` file)
  - Key ID
  - Team ID

---

### 🎯 What you get

Once setup is complete, you will receive a:

👉 **Channel ID**

This uniquely identifies your app and is required during SDK initialization.

---

## 🔌 Step 2: Integrate SDK in Your App

After creating your app, integrate the PushApp SDK into your codebase.

During SDK initialization, you must pass:

- **Channel ID**

This links your app instance to PushApp.

---

## 📦 Supported SDKs

Choose the SDK based on your platform:

### Native SDKs

- iOS → [View Documentation](#)
- Android → [View Documentation](#)

---

### Cross-Platform SDKs

- Flutter (iOS) → [View Documentation](#)
- Flutter (Android) → [View Documentation](#)
- React Native (iOS) → [View Documentation](#)
- React Native (Android) → [View Documentation](#)

---

## 🧪 Verify Integration

After integration:

- Install and open your app
- Ensure the device is registered
- Send a test push notification

💡 Tip: If you receive the test notification, your integration is successful.

---

## ⚠️ Common Issues

❌ Notifications not received  
→ Check FCM / APNs configuration

❌ Device not registered  
→ Ensure SDK is initialized with correct Channel ID

❌ iOS notifications not working  
→ Verify APNs key, permissions, and certificates

---

## 🔗 Related Features

- Push Notifications → Send campaigns
- Event Analytics → Track user activity
- Cohorts → Target users effectively

---

Once SDK integration is complete, you’re ready to start engaging your users 🚀
