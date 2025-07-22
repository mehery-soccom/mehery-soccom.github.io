---
layout: default  
title: GMail  
parent: Email
grand_parent: Channel Integration
nav_order: 2
---

# Gmail Integration

## Prerequisites
- A verified Google Account.  
- If using a Google Workspace (organizational) account, ensure that the MeherY app (MeherYSoccom) is marked as **Trusted** and the reauthentication policy is set properly to avoid frequent sign-in prompts. Failure to do so will result in 401 errors after 12 hours of logging in, causing the service to go down and require repeated reauthentication.

### How to Mark the MeherY App as Trusted and Configure Reauthentication Policy in Google Workspace

#### Mark MeherY as a Trusted App
1. Sign in to your Google Admin console at [admin.google.com](https://admin.google.com) using an administrator account.  
2. From the Admin console Home page, go to **Security** > **Access and Data Control** > **API Controls**.  
3. Click **Manage Third-Party App Access** to see the list of configured apps.  
4. Locate **MeherYSoccom** in the list of apps.  
5. Change the access level of MeherYSoccom to **Trusted**.  
6. Save your changes.

#### Configure the Reauthentication Policy
7. From the Admin console Home page, go to **Security** > **Access and Data Control** > **Google Cloud session control**.  
8. Under **Reauthentication policy**, select **Require reauthentication** and choose the **Reauthentication frequency** from the drop-down list (minimum 1 hour, maximum 24 hours).  
9. Check the **Exempt trusted apps** box to exempt trusted apps from reauthentication.  
10. Save your changes.

For detailed information, refer to [Google's documentation on reauthentication policy](https://support.google.com/a/answer/9368756).

## Steps to Connect Gmail with MeherY
1. Go to the Mehery Admin Panel
2. Navigate to the **Channels** section on the left panel.  
3. Click **Add Channel** and select **Email**.  
4. In the modal that appears, select **Gmail**.  
5. Choose **Auto Configure Email**.  
6. Click **Sign in with Gmail**.  
7. Sign in with your Google account credentials and complete the authentication process.   
8. Once authentication succeeds, you will be redirected back to the **MeherY Channels** page.  
9. Your connected Gmail address should now appear in the list.

## Functionality

Once integrated, the Gmail channel enables two-way communication through MeherY using this email address.

---
