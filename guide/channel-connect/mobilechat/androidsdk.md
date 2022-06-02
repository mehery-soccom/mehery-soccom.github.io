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
MChatConfig config = new MChatConfig(headerTitle,headerColor,headerLogo,headerTitleColor);
```

## License

MIT

