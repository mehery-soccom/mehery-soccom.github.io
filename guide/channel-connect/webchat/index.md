---
layout: default
title: WebChat Integration
parent: Channel Integration
nav_order: 10
#has_children: true
---
# WebChat Integration

## Creat WebChat plugin
To use webchat you will need to add WebChat keys. To get Webchat keys, go to admin panel and add WebChat channel, enter details and after channel creation you will recieve _channelId_ & _channelKey_. Use both keys to install webchat in your website in next steps.

## Installation
### HTML Script Tag

```html
<!-- Add this snippt as last tag in body -->
<script src="https://cdn.jsdelivr.net/gh/cherrybase/cherrybase.github.io@gh-pages/plugins/customer.js?theme=bubble">
  {
    "domain" : "<domain>",
    "channelId" : "<channelId>",
    "channelKey" : "<channelKey>",
    "config" : {   
    }
  }
</script>
```

### JavaScript Module

```javascript
  //Add this snippet in you javascript
  let webchatScript = document.createElement('script');
      webchatScript.setAttribute('src', 
        'https://cdn.jsdelivr.net/gh/cherrybase/cherrybase.github.io@gh-pages/plugins/customer.js?theme=bubble');
      webchatScript.innerHTML = JSON.stringify({
          "domain" : "<domain>",
          "channelId" : "<channelId>",
          "channelKey" : "<channelKey>",
          "config" : {
           }
        });
      document.body.appendChild(webchatScript);
```

## Config Options
```javascript
  {
    "domain" : "abcorp.mehery.com",
    "channelId" : "web:mywebsite.com",
    "channelKey" : "R45j45omwpaoifbtqlp",
    "config" : {
      "chatWindow.theme.color": "#b98e33",

      "header.text.color" : "#ffffff",
      // Use a square image to avoid distortion
      "header.icon.url" : "https://cdn.jsdelivr.net/gh/mehery-soccom/mehery-web-dist@834bfa2c3b8060cac2ebcd7778758d6021be2dca/dist/logo/logo-tiny-o.png",
      "header.title.text" : "Support",

      "launcher.bg.color" : "#b98e33",
      // Use a square image to avoid distortion
      "launcher.icon.url" : "https://cdn.jsdelivr.net/gh/mehery-soccom/mehery-web-dist@834bfa2c3b8060cac2ebcd7778758d6021be2dca/dist/logo/logo-tiny-o.png",
      "launcher.autoOpen.active": "true",

      "messageList.bg.color" : "#ffffff",

      "sentMessage.text.color" : "#ffffff",

      "receivedMessage.bg.color" : "#eaeaea",
      "receivedMessage.text.color" : "#222222",

      "userInput.bg.color" : "#f4f7f9",
      "userInput.text.color" : "#565867",
      "userInput.button.color" : "#ffffff"
    }
  }

```


