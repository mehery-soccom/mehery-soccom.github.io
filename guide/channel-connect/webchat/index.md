---
layout: default
title: WebChat Integration
parent: Channel Integration
nav_order: 10
#has_children: true
---
# WebChat Integration

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
    "domain" : "<domain>",
    "channelId" : "<channelId>",
    "channelKey" : "<channelKey>",
    "config" : {
      "header.bg.color" : "#000",
      "header.text.color" : "#ffffff",
      "header.icon.url" : "https://cdn.jsdelivr.net/gh/mehery-soccom/mehery-web-dist@834bfa2c3b8060cac2ebcd7778758d6021be2dca/dist/logo/logo-tiny-o.png",
      "header.title.text" : "Support",

      "launcher.bg.color" : "#000",
      
      "messageList.bg.color" : "#ffffff",
      
      "sentMessage.bg.color" : "#4e8cff",
      "sentMessage.text.color" : "#ffffff",
      
      "receivedMessage.bg.color" : "#eaeaea",
      "receivedMessage.text.color" : "#222222",
      
      "userInput.bg.color" : "#f4f7f9",
      "userInput.text.color" : "#565867"
    }
  }

```


