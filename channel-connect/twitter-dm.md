# How to connect your Twitter DM to MeherY

## Prerequisite
1. Verified twitter handler
2. Access to MeherY Client-Hub.

## Steps
1. [Apply for a Twitter developer account](#apply-for-a-twitter-developer-account)
2. [Create a Twitter application](#create-twitter-application)
3. [Edit the Twitter application’s permissions](#edit-the-twitter-applications-permissions)
4. [Generate your access token and secret access token](#generate-your-access-token-and-secret-access-token)
5. [Enable Twitter Webhook from Account Activity API](#enable-twitter-webhook-from-account-activity-api)
6. [Upload your tokens to MeherY Account](#upload-your-tokens-to-mehery-account)

### Apply for a Twitter developer account.
1. Go to https://developer.twitter.com
2. Log in with an existing account.
3. In the top right corner, there will be a **Create an app** button
- ![How to Make a Twitter Bot-1](https://user-images.githubusercontent.com/5462166/134341192-260135e5-6bf2-49b4-8be4-ba52aa7e21ea.png)
- You won’t be able to create an app right away. Instead, you’ll have to apply for a developer account first. The application process is easy. You’ll just need to provide some basic account information and explain your intended use of the Twitter API.

### Create Twitter application.
Once you confirm your email address, you can start creating your application
1. Create App 
2. Copy *API key*, an *API secret key*, and *Bearer token*

### Edit the Twitter application’s permissions.
1. Click the gear icon. It’ll be labelled “App Settings” if you hover over it.
- ![How to Make a Twitter Bot](https://user-images.githubusercontent.com/5462166/134343794-ccba4c0c-8bfe-4c18-8dd8-1d0bc6db8bdf.png)
2. Edit the App Permissions and select the **Read + Write + Direct Messages** option. Click **Save**

### Generate your access token and secret access token
1. Once you save the app permissions, you’ll be redirected to your project dashboard.
2. Switch from Settings to the Keys and Tokens tab
3. Next to Access token & secret, click Generate. You’ll need these in the next steps
- ![How to Make a Twitter Bot](https://user-images.githubusercontent.com/5462166/134343289-af3529a7-1364-4ec1-b5ac-94bc8a11a5cb.png)

### Enable Twitter Webhook from Account Activity API
- After creating a Twitter app, the next step is applying for *Account Activity API access*. 
  - Those needing enterprise level access to more than 250 account subscriptions and 3+ webhooks will need to submit an application at the [Enterprise Access](https://developer.twitter.com/en/products/twitter-api/enterprise/application). 
  - If you can satisfy your use case with less access than this, you may want to check out [Account Activity API premium](https://developer.twitter.com/en/docs/twitter-api/premium/account-activity-api/overview). 
  - To access Free *Sandbox Account Activity API* simply follow these steps
  - Once your setup is ready follow these steps.
  1. Login and navigate to the [Dev Environments](https://developer.twitter.com/content/developer-twitter/en/account/environments) page. 
  2. Click 'Set up dev environment,' name your environment, and specify a Twitter app ID for the environment.

### Upload your tokens to MeherY Account





