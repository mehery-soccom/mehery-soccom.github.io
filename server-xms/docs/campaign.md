---
layout: default
title: Create Campaign
nav_order: 5
has_children: false
parent : API Integration
---
# Create Campaign 
Message API calls are sent to the **/api/v1/create/campaign**  See the [Full Documentation](/server-xms/public2/index.html?shell#create-campaign): for information 

#### Sample Request : 
##### POST : /api/v1/create/campaign
```javascript
 {
	"campaignTitle": "Campaign Title",
	"templateCode": "Your Template Code",
	"contactType":"WHATSAPP",
	"campaignMode":"BOT",
	"channelId": "string"
}

"results": [
    {
      "campaignId": "8LS6muN65UF",
      "campaignTitle": "Test",
      "templateCode": "1_march_2025_1",
      "campaignMode": "DEFAULT",
      "channelId": "wacfb:919619432858",
      "contactType": "WHATSAPP"
    }
  ],
```
##### GET : /api/v1/view/campaign
```javascript
{
	"campaignTitle":"Campaign%20Title"
}
"results": [
    {
      "campaignId": "8LhpyAmsziI",
      "campaignTitle": "abcdefgh",
      "templateCode": "template_metrics",
      "campaignMode": "DEFAULT",
      "channelId": null,
      "contactType": WHATSAPP
    },
    {
      "campaignId": "8Lhu9O2CBLH",
      "campaignTitle": "abcdefgh",
      "templateCode": "template_metrics",
      "campaignMode": "DEFAULT",
      "channelId": null,
      "contactType": WHATSAPP
    },
    {
      "campaignId": "8Lhu9VWPRp9",
      "campaignTitle": "abcdefgh",
      "templateCode": "template_metrics",
      "campaignMode": "DEFAULT",
      "channelId": null,
      "contactType": WHATSAPP
    },
	 {
      "campaignId": "8LS6muN65UF",
      "campaignTitle": "Test",
      "templateCode": "1_march_2025_1",
      "campaignMode": "DEFAULT",
      "channelId": null,
      "contactType": WHATSAPP
    }

```