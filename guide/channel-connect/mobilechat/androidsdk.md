---
layout: default
title: Android SDK
parent: Mobile Integration
grand_parent: Channel Integration
nav_order: 4
---

# mChat - Android
## _Chat SDK for Mehery_

mChat - Android is a an android SDK for enabling to add Mehery Chat in you application.

## Features

- Get the key and domain on Mehery and start a hassle free journey to add customer support chat to your application
- Customize the look and feel of the chat window , each and every element is customizable to your needs and app theme


## Setup

To start with the integration we would first need to setup our webchat. For this login to admin panel for Mehery. Go to channel and add a new WebChat channel.

![image description](https://raw.githubusercontent.com/mehery-soccom/mChat-Android/master/images/Readme1.PNG)

On clicking Webchat you would need to fill in some details.

![image description](https://raw.githubusercontent.com/mehery-soccom/mChat-Android/master/images/Readme2.PNG)

Once thats done please copy the content of script, you will require it.

![image description](https://raw.githubusercontent.com/mehery-soccom/mChat-Android/master/images/Readme3.PNG)


## Installing

You can install the sdk by adding following dependancy

```gradle
allprojects {
        repositories {
            ...
            maven { url 'https://jitpack.io' }
        }
    }
```

```gradle
dependencies {
      implementation 'com.github.mehery-soccom:mChat-Android:v1.0.1'
}
```

## Usage

To invoke the chat . Please follow the following code.
```sh
MChat mChat = new MChat(MainActivity.this);
MChatConfig config = new MChatConfig(headerTitle);
mChat.start(domain,channelKey,channelId,config);
```

For further customization :

eg. config.setBackgroundColor(backgroundColor);

Attribute | Value | Description | Default Value
--- | --- | --- | ---
|headerColor|int|This is for chaning color of the header|0xfff|
|headerTitleColor|int|This is for changing color of the title of the header|0xFF000000|
|chatBackgroundColor|int|This is for changing background color of tha chat message listing|0xFF000000|
|sentMessageBubbleColor|int|This is to change the bacground color of chat bubble for sent messages|0xFF000000|
|sentMessageTextColor|int|This is to change the text color of the sent messages|0xFF000000|
|receivedMessageBubbleColor|int|This is to change the bacground color of chat bubble for received messages|0xFF000000|
|receivedMessageTextColor|int|This is to change the text color of the received messages|0xFF000000|
|userInputBackgroundColor|int|This is to change the background color of the user input box at bottom|0xFF000000|
|userInputTextColor|int|This is to change the text color of the user input box at bottom|0xFF000000|

## License

MIT

