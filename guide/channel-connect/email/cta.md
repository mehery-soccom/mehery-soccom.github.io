---
layout: default
title: Tracking CTA Buttons in Email Templates
parent: Email
grand_parent: Channel Integration
nav_order: 5
---

# Understanding CTA Button Tracking in MeherY Smart Conversations

Call-To-Action (CTA) buttons are a crucial part of email templates as they guide recipients toward desired actions, such as visiting a website or replying to an email. MeherY Smart Conversations provides options to configure how these buttons behave and how their clicks are tracked.

## Use Case

Tracking CTA button interactions helps you measure engagement and the effectiveness of your email campaigns. Understanding the different types of CTA buttons available and their pros and cons enables you to design better email experiences.

## Types of CTA Button Actions in Template Creation

While creating email templates(https://{your domain name}.mehery.xyz/admin/app/admins/tmpl/pushtemplate/edit/new), when adding buttons, you have three types of options accessible via the **gear icon** under the **Quick Reply** type:

<img width="725" alt="CTA button types" src="/content/static//design/CTA -1.png">
### 1. External Link

- **Description:** Clicking this button redirects the user to an external webpage. Usually, this page confirms that the response has been captured and thanks the user for their action.
- **Pros:**
  - Provides a clean and seamless user experience.
- **Cons:**
  - Increases the number of links in the email, which can affect email deliverability and spam scores.

### 2. In-Address Reply

- **Description:** Clicking this button prompts the user to send a new email reply directly from their email client. Although the user composes a fresh email, the replies appear within the same conversation thread in the agent panel.
- **Pros:**
  - Reduces the number of links within the email, improving deliverability.
- **Cons:**
  - The user has to leave the current email thread.

### 3. Inline Reply (Deprecated)

- **Status:** Deprecated and no longer advised to use.

## Why Choose One CTA Type Over Another?

- **External Link** buttons are preferred when you want straightforward click tracking and a smooth user journey toward a web page or form.
- **In-Address Reply** buttons work well when you want to minimize links to improve deliverability while still capturing user feedback or replies in a centralized conversation.
- **Inline Reply** is no longer recommended due to technical and usability reasons.

## Summary
  
| CTA Type         | User Experience                | Tracking Method         | Pros                                | Cons                                |
|------------------|--------------------------------|-------------------------|-------------------------------------|-------------------------------------|
| External Link    | Redirects to external webpage  | Click tracking via links| Clean UX                            | More links can reduce deliverability|
| In-Address Reply | Opens new email reply          | Reply tracking          | Fewer links improves deliverability | User leaves thread to reply         |
| Inline Reply     | Reply inline (deprecated)      | Deprecated              | N/A                                 | No longer supported                 |

---

By understanding and choosing the right CTA button type for your emails in MeherY, you can optimize engagement, maintain deliverability, and improve overall campaign effectiveness.
