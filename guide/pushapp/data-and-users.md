---
layout: default
title: Data and Users
parent: PushApp
nav_order: 4
---

# Users & Data

## 🧾 Overview

PushApp helps you understand your users by collecting and organizing their data in one place.

This includes:

- User profiles (who your users are)
- Events (what your users do)
- Session activity timeline (how users interact with your app)

👉 This data powers everything in PushApp — cohorts, campaigns, and analytics.

---

## 👤 Customer Profiles

Each user in PushApp has a **Customer Profile**.

A profile gives you a complete view of a user, including:

- configured profile fields
- Device information
- Activity timeline (sessions)
- Events performed

---

## 🔄 Guest vs Identified Profiles

PushApp automatically handles users in two stages:

### 1. Guest Profile (Anonymous User)

When a user opens your app for the first time and is **not logged in**, PushApp creates a **Guest Profile**.

This profile includes:

- Device information
- App activity (sessions, events)

👉 At this stage, the user is tracked anonymously.

---

### 2. Identified Profile (Known User)

Once your app **links a user ID to the device** (e.g. after login or signup), the guest profile is converted into an **Identified Profile**.

This means:

- The user is now associated with a unique user ID
- Previous activity (from guest stage) is retained
- Future activity is tracked under the same profile

---

## 🔗 Why This Matters

This flow ensures:

- No loss of user activity before login
- Seamless tracking from anonymous → known user
- Better personalization and targeting

💡 Example:

A user browses products without logging in → later signs up  
👉 Their earlier activity is still available for targeting (e.g. “viewed product but didn’t purchase”)

---

## 💡 Best Practices

- Link user ID as early as possible (after login/signup)
- Ensure consistent user IDs across sessions
- Avoid creating multiple profiles for the same user

---

## 🔌 How Data is Collected

PushApp collects user data through two main methods:

---

### 1. SDK Integration (Automatic)

Once SDK is integrated:

- Devices are registered automatically
- Basic events (like app open, sessions) are tracked
- User activity starts getting recorded

👉 Recommended for most use cases

---

### 2. Server APIs (External Integration)

You can also create and update user data using APIs.

👉 [Full API Documentation](/server-xms/public2/index.html?shell#profile-creation)

---

### What you can do via APIs

- Create or update customer profiles
- Send custom user attributes
- Track events from backend systems

---

## 🔄 Keeping Data in Sync

For best results:

- Use SDK for client-side tracking
- Use APIs for backend events and updates

👉 Combining both ensures complete and accurate user data.

---

## ⚠️ Common Mistakes

❌ Not sending important events → limits targeting  
❌ Incomplete user profiles → poor personalization

---

## 🔗 Related Features

- Cohorts → Segment users based on data
- Push Notifications → Engage users
- In-App Engagements → Guide users in real time
- Event Analytics → Understand user behavior

---

User data is the foundation of everything in PushApp.  
The better your data, the more effective your campaigns 🎯
