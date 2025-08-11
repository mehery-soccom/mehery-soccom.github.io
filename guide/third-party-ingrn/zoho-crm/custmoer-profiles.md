---
layout: default
title: Integration with MeherY Customer Profiles
parent: ZOHO CRM
grand_parent: Third Party Integration
nav_order: 5
---

# Integrating ZOHO CRM Contacts with MeherY Customer Profiles

## Overview

This integration enables **Zoho CRM** to send contact data directly to **MeherY Customer Profiles** using **Zoho Workflow Automation**.  
It allows you to automatically create or update customer profiles in MeherY whenever a contact is added or modified in Zoho CRM — no manual syncing required.

---

## Prerequisites

- **Zoho CRM account** with admin access.  
- **MeherY account** with access to the Customer Profiles API.  
- **API Key** for authenticating requests to MeherY.  
- **Zoho CRM plan** that supports Workflow Automation.  

---

## Use Cases

- **Automatic Contact Creation**  
  Whenever a new lead or contact is created/updated in Zoho CRM, it’s automatically pushed to MeherY.

- **Instant Updates**  
  Changes to customer details in Zoho CRM are instantly reflected in MeherY.

- **Unified Customer View**  
  Agents in MeherY see up-to-date CRM contact information while engaging with customers.

---

## Integration Steps

### 1. Create a Workflow Rule in Zoho CRM

1. Go to **Setup → Automation → Workflow Rules** in Zoho CRM.  
2. Click **Create Rule**.  
3. Select:  
   - **Module**: `Contacts` (or `Leads`, depending on your use case).  
4. Under **WHEN**, select:  
   - **Record Action → Create** or **Create or Edit** based on your requirement.  
   - Enable **Repeat this workflow whenever a contact is edited** if updates should sync automatically.  
5. Click **Next**.  
   - Choose **All Contacts** or define specific conditions as needed.

---

### 2. Add a Webhook Action

1. Inside the workflow, click **Add Action → Webhook**.  
2. Configure the webhook:  
   - **Name**: `Push to MeherY`  
   - **URL to Notify**:  
     ```
     https://<your-mehery-domain>/xms/data/api/v1/profile/update?tnt=<your-tenant-code>
     ```  
     Example:  
     ```
     https://demo.mehery.com/xms/data/api/v1/profile/update?tnt=demo
     ```  
   - **Authorization Type**: `General`  
   - **Headers**:  
     ```
     x-api-key: <your-api-key>
     ```  
   - **Method**: `POST`  
   - **Type**: `Form-Data`  
   - **Body**: Map Zoho CRM fields to MeherY fields. Refer to the mapping rules below:

      > **Important:** Failing to correctly configure **any** of the critical steps below may result in sync failures or incomplete data synchronization between Zoho CRM and MeherY:  
      > 1. The field to be mapped must be present in MeherY customer master fields.  
      > 2. The parameter name must match the **code** of the field in the MeherY customer master fields; otherwise, values will not update correctly.  
      > 3. For first name, use `firstName` and for last name, use `lastName`.  
      > 4. For **unique emails and phone numbers**, use parameter names like `phone1`, `phone2`, `email1`, `email2`.  
      > 5. For **non-unique or repeated** phones/emails, use `altPhone1`, `altEmail1`. These appear under Alternate Phone/Email in MeherY.  
      > 6. Date parameters must be formatted as `MM-DD-YY`.


---

## Notes

- Test the integration with a **dummy contact** first to confirm mappings.  
- If changes aren’t reflected, verify the workflow trigger conditions and API key.  

**Always verify your webhook URL, headers, and body mappings carefully.** Minor misconfigurations can cause silent failures or partial updates.

---

## Support

If you encounter any issues or need assistance with the integration, please reach out to the MeherY support team.

---
