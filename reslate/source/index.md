---
title: SERVER-XMS v1.0 - 2022-01-07 13:05
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="server-xms">SERVER-XMS v1.0 - 2022-01-07 13:05</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Use API key for authentication. An API key is a token that a client provides when making API calls. 
 
API key can be set in the headers with param *x-api-key*
 To get your *x-api-key* contact TechSupport

Base URLs:

* <a href="//demo.mehery.io/xms">//demo.mehery.io/xms</a>

License: <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache License Version 2.0</a>

# Authentication

* API Key (API_Key)
    - Parameter Name: **x-api-key**, in: header. 

<h1 id="server-xms-config-apis">Config APIs</h1>

API's for configuration

## Set Webhook URL

<a id="opIdsetWebhookUrlUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /demo.mehery.io/xms/api/v1/config/webhook \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'x-api-key: thisduMmykEy4maTD0NTUsEit'

```

```http
POST /demo.mehery.io/xms/api/v1/config/webhook HTTP/1.1

Content-Type: application/json
Accept: */*
x-api-key: thisduMmykEy4maTD0NTUsEit

```

```javascript
const inputBody = '{
  "url": "https://www.example.com/webhook"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'x-api-key':'thisduMmykEy4maTD0NTUsEit'
};

fetch('/demo.mehery.io/xms/api/v1/config/webhook',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'x-api-key' => 'thisduMmykEy4maTD0NTUsEit'
}

result = RestClient.post '/demo.mehery.io/xms/api/v1/config/webhook',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*',
  'x-api-key': 'thisduMmykEy4maTD0NTUsEit'
}

r = requests.post('/demo.mehery.io/xms/api/v1/config/webhook', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => '*/*',
    'x-api-key' => 'thisduMmykEy4maTD0NTUsEit',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/demo.mehery.io/xms/api/v1/config/webhook', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/demo.mehery.io/xms/api/v1/config/webhook");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"*/*"},
        "x-api-key": []string{"thisduMmykEy4maTD0NTUsEit"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/demo.mehery.io/xms/api/v1/config/webhook", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/v1/config/webhook`

The webhook URL is a URL where the WhatsApp Business API sends the notifications to, triggered by specific events

> Body parameter

```json
{
  "url": "https://www.example.com/webhook"
}
```

<h3 id="set-webhook-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-api-key|header|string|false|API Key|
|body|body|[WebhookUrlRequest](#schemawebhookurlrequest)|true|req|

> Example responses

> 200 Response

<h3 id="set-webhook-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ApiResponse_PMConfigurationObject_object_](#schemaapiresponse_pmconfigurationobject_object_)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="server-xms-digital-analytics">Digital Analytics</h1>

Analytics APIS

## dataEvent

<a id="opIddataEventUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /demo.mehery.io/xms/api/v1/event/push \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'x-api-key: thisduMmykEy4maTD0NTUsEit'

```

```http
POST /demo.mehery.io/xms/api/v1/event/push HTTP/1.1

Content-Type: application/json
Accept: */*
x-api-key: thisduMmykEy4maTD0NTUsEit

```

```javascript
const inputBody = '{
  "eventName": "CUSTOMER_CREATED",
  "id": 1234567,
  "links": [
    {
      "linkName": "string",
      "linkType": "string",
      "linkValue": "string"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'x-api-key':'thisduMmykEy4maTD0NTUsEit'
};

fetch('/demo.mehery.io/xms/api/v1/event/push',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'x-api-key' => 'thisduMmykEy4maTD0NTUsEit'
}

result = RestClient.post '/demo.mehery.io/xms/api/v1/event/push',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*',
  'x-api-key': 'thisduMmykEy4maTD0NTUsEit'
}

r = requests.post('/demo.mehery.io/xms/api/v1/event/push', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => '*/*',
    'x-api-key' => 'thisduMmykEy4maTD0NTUsEit',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/demo.mehery.io/xms/api/v1/event/push', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/demo.mehery.io/xms/api/v1/event/push");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"*/*"},
        "x-api-key": []string{"thisduMmykEy4maTD0NTUsEit"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/demo.mehery.io/xms/api/v1/event/push", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/v1/event/push`

> Body parameter

```json
{
  "eventName": "CUSTOMER_CREATED",
  "id": 1234567,
  "links": [
    {
      "linkName": "string",
      "linkType": "string",
      "linkValue": "string"
    }
  ]
}
```

<h3 id="dataevent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-api-key|header|string|false|API Key|
|body|body|[DigitalEventDto](#schemadigitaleventdto)|true|digitalEventDto|

> Example responses

> 200 Response

<h3 id="dataevent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ApiResponse_DigitalEventDto_object_](#schemaapiresponse_digitaleventdto_object_)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="server-xms-inbound-callbacks">InBound Callbacks</h1>

API's to be implemented by Clients, to recieve inbound messages

## onActionCallback

<a id="opIdonActionCallbackUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /demo.mehery.io/xms/api/v1/action/event \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'x-verify-token: s1agenttoken$$$'

```

```http
POST /demo.mehery.io/xms/api/v1/action/event HTTP/1.1

Content-Type: application/json
Accept: */*
x-verify-token: s1agenttoken$$$

```

```javascript
const inputBody = '{
  "actionCode": "SEND_INVOICE"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'x-verify-token':'s1agenttoken$$$'
};

fetch('/demo.mehery.io/xms/api/v1/action/event',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'x-verify-token' => 's1agenttoken$$$'
}

result = RestClient.post '/demo.mehery.io/xms/api/v1/action/event',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*',
  'x-verify-token': 's1agenttoken$$$'
}

r = requests.post('/demo.mehery.io/xms/api/v1/action/event', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => '*/*',
    'x-verify-token' => 's1agenttoken$$$',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/demo.mehery.io/xms/api/v1/action/event', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/demo.mehery.io/xms/api/v1/action/event");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"*/*"},
        "x-verify-token": []string{"s1agenttoken$$$"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/demo.mehery.io/xms/api/v1/action/event", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/v1/action/event`

> Body parameter

```json
{
  "actionCode": "SEND_INVOICE"
}
```

<h3 id="onactioncallback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-verify-token|header|string|false|Callback Verification Token|
|body|body|[InBoundAction](#schemainboundaction)|true|actionInfo|

> Example responses

> 200 Response

<h3 id="onactioncallback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[InBoundAction](#schemainboundaction)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## onProfileCallback

<a id="opIdonProfileCallbackUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /demo.mehery.io/xms/api/v1/contact/info \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'x-verify-token: s1agenttoken$$$'

```

```http
POST /demo.mehery.io/xms/api/v1/contact/info HTTP/1.1

Content-Type: application/json
Accept: */*
x-verify-token: s1agenttoken$$$

```

```javascript
const inputBody = '{
  "contactId": 1234567,
  "contactType": "WHATSAPP",
  "csid": "91YOURNUMBER",
  "lane": 919999998888,
  "profile": {
    "email": "abc@xyz.com",
    "mobile": 919988776655,
    "name": "John Doe"
  },
  "profileId": "C34567"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'x-verify-token':'s1agenttoken$$$'
};

fetch('/demo.mehery.io/xms/api/v1/contact/info',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'x-verify-token' => 's1agenttoken$$$'
}

result = RestClient.post '/demo.mehery.io/xms/api/v1/contact/info',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*',
  'x-verify-token': 's1agenttoken$$$'
}

r = requests.post('/demo.mehery.io/xms/api/v1/contact/info', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => '*/*',
    'x-verify-token' => 's1agenttoken$$$',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/demo.mehery.io/xms/api/v1/contact/info', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/demo.mehery.io/xms/api/v1/contact/info");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"*/*"},
        "x-verify-token": []string{"s1agenttoken$$$"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/demo.mehery.io/xms/api/v1/contact/info", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/v1/contact/info`

> Body parameter

```json
{
  "contactId": 1234567,
  "contactType": "WHATSAPP",
  "csid": "91YOURNUMBER",
  "lane": 919999998888,
  "profile": {
    "email": "abc@xyz.com",
    "mobile": 919988776655,
    "name": "John Doe"
  },
  "profileId": "C34567"
}
```

<h3 id="onprofilecallback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-verify-token|header|string|false|Callback Verification Token|
|body|body|[InBoundContact](#schemainboundcontact)|true|contactInfoRequest|

> Example responses

> 200 Response

<h3 id="onprofilecallback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ContactInfoUpdate](#schemacontactinfoupdate)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## onMessageCallback

<a id="opIdonMessageCallbackUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /demo.mehery.io/xms/api/v1/message/receive \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'x-verify-token: s1agenttoken$$$'

```

```http
POST /demo.mehery.io/xms/api/v1/message/receive HTTP/1.1

Content-Type: application/json
Accept: */*
x-verify-token: s1agenttoken$$$

```

```javascript
const inputBody = '{
  "actions": [
    {
      "actionCode": "SEND_INVOICE"
    }
  ],
  "contacts": [
    {
      "contactId": 1234567,
      "contactType": "WHATSAPP",
      "csid": "91YOURNUMBER",
      "lane": 919999998888,
      "profile": {
        "email": "abc@xyz.com",
        "mobile": 919988776655,
        "name": "John Doe"
      },
      "profileId": "C34567"
    }
  ],
  "messages": [
    {
      "audio": {
        "caption": "document-caption",
        "filename": "document-filename",
        "id": 2121212,
        "link": "http(s)://link-to-media-file-url",
        "mime_type": "video/mp4",
        "sha256": "m3232kaoe4belrr",
        "type": "image"
      },
      "contactId": "WA919988776655",
      "document": {
        "caption": "document-caption",
        "filename": "document-filename",
        "id": 2121212,
        "link": "http(s)://link-to-media-file-url",
        "mime_type": "video/mp4",
        "sha256": "m3232kaoe4belrr",
        "type": "image"
      },
      "from": 919988776655,
      "id": 1234567,
      "image": {
        "caption": "document-caption",
        "filename": "document-filename",
        "id": 2121212,
        "link": "http(s)://link-to-media-file-url",
        "mime_type": "video/mp4",
        "sha256": "m3232kaoe4belrr",
        "type": "image"
      },
      "location": {
        "address": "1 Hacker Way, Menlo Park, CA, 94025",
        "latitude": 12.90909,
        "longitude": 6.90808,
        "name": "Main Building"
      },
      "messageIdExt": 1234567,
      "originalMessage": {},
      "session": {
        "assignedToAgent": "SUPPORT",
        "assignedToDept": "SUPPORT",
        "sessionId": "xsds34434"
      },
      "tags": {
        "categories": [
          "string"
        ],
        "cities": [
          "string"
        ],
        "countries": [
          "string"
        ],
        "langs": [
          "string"
        ],
        "locations": [
          "string"
        ],
        "organizations": [
          "string"
        ],
        "persons": [
          "string"
        ],
        "sentimentScore": 0,
        "sentiments": [
          "string"
        ]
      },
      "text": {
        "body": "your-text-message-content",
        "type": "image"
      },
      "timestamp": 156753339076,
      "type": "text",
      "video": {
        "caption": "document-caption",
        "filename": "document-filename",
        "id": 2121212,
        "link": "http(s)://link-to-media-file-url",
        "mime_type": "video/mp4",
        "sha256": "m3232kaoe4belrr",
        "type": "image"
      },
      "voice": {
        "caption": "document-caption",
        "filename": "document-filename",
        "id": 2121212,
        "link": "http(s)://link-to-media-file-url",
        "mime_type": "video/mp4",
        "sha256": "m3232kaoe4belrr",
        "type": "image"
      }
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'x-verify-token':'s1agenttoken$$$'
};

fetch('/demo.mehery.io/xms/api/v1/message/receive',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'x-verify-token' => 's1agenttoken$$$'
}

result = RestClient.post '/demo.mehery.io/xms/api/v1/message/receive',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*',
  'x-verify-token': 's1agenttoken$$$'
}

r = requests.post('/demo.mehery.io/xms/api/v1/message/receive', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => '*/*',
    'x-verify-token' => 's1agenttoken$$$',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/demo.mehery.io/xms/api/v1/message/receive', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/demo.mehery.io/xms/api/v1/message/receive");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"*/*"},
        "x-verify-token": []string{"s1agenttoken$$$"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/demo.mehery.io/xms/api/v1/message/receive", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/v1/message/receive`

> Body parameter

```json
{
  "actions": [
    {
      "actionCode": "SEND_INVOICE"
    }
  ],
  "contacts": [
    {
      "contactId": 1234567,
      "contactType": "WHATSAPP",
      "csid": "91YOURNUMBER",
      "lane": 919999998888,
      "profile": {
        "email": "abc@xyz.com",
        "mobile": 919988776655,
        "name": "John Doe"
      },
      "profileId": "C34567"
    }
  ],
  "messages": [
    {
      "audio": {
        "caption": "document-caption",
        "filename": "document-filename",
        "id": 2121212,
        "link": "http(s)://link-to-media-file-url",
        "mime_type": "video/mp4",
        "sha256": "m3232kaoe4belrr",
        "type": "image"
      },
      "contactId": "WA919988776655",
      "document": {
        "caption": "document-caption",
        "filename": "document-filename",
        "id": 2121212,
        "link": "http(s)://link-to-media-file-url",
        "mime_type": "video/mp4",
        "sha256": "m3232kaoe4belrr",
        "type": "image"
      },
      "from": 919988776655,
      "id": 1234567,
      "image": {
        "caption": "document-caption",
        "filename": "document-filename",
        "id": 2121212,
        "link": "http(s)://link-to-media-file-url",
        "mime_type": "video/mp4",
        "sha256": "m3232kaoe4belrr",
        "type": "image"
      },
      "location": {
        "address": "1 Hacker Way, Menlo Park, CA, 94025",
        "latitude": 12.90909,
        "longitude": 6.90808,
        "name": "Main Building"
      },
      "messageIdExt": 1234567,
      "originalMessage": {},
      "session": {
        "assignedToAgent": "SUPPORT",
        "assignedToDept": "SUPPORT",
        "sessionId": "xsds34434"
      },
      "tags": {
        "categories": [
          "string"
        ],
        "cities": [
          "string"
        ],
        "countries": [
          "string"
        ],
        "langs": [
          "string"
        ],
        "locations": [
          "string"
        ],
        "organizations": [
          "string"
        ],
        "persons": [
          "string"
        ],
        "sentimentScore": 0,
        "sentiments": [
          "string"
        ]
      },
      "text": {
        "body": "your-text-message-content",
        "type": "image"
      },
      "timestamp": 156753339076,
      "type": "text",
      "video": {
        "caption": "document-caption",
        "filename": "document-filename",
        "id": 2121212,
        "link": "http(s)://link-to-media-file-url",
        "mime_type": "video/mp4",
        "sha256": "m3232kaoe4belrr",
        "type": "image"
      },
      "voice": {
        "caption": "document-caption",
        "filename": "document-filename",
        "id": 2121212,
        "link": "http(s)://link-to-media-file-url",
        "mime_type": "video/mp4",
        "sha256": "m3232kaoe4belrr",
        "type": "image"
      }
    }
  ]
}
```

<h3 id="onmessagecallback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-verify-token|header|string|false|Callback Verification Token|
|body|body|[InBoundWrapper](#schemainboundwrapper)|true|inboxMessage|

> Example responses

> 200 Response

<h3 id="onmessagecallback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[InBoundMsg](#schemainboundmsg)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="server-xms-outbound-messages">OutBound Messages</h1>

API's to send OutBound Messages

## Send Message

<a id="opIdsendMessageUsingPOST_1"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /demo.mehery.io/xms/api/v1/message/send \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'x-api-key: thisduMmykEy4maTD0NTUsEit'

```

```http
POST /demo.mehery.io/xms/api/v1/message/send HTTP/1.1

Content-Type: application/json
Accept: */*
x-api-key: thisduMmykEy4maTD0NTUsEit

```

```javascript
const inputBody = '{
  "audio": {
    "caption": "your-video-caption",
    "filename": "your-video-caption",
    "link": "http(s)://the-url"
  },
  "channelId": "91SERVICENUMBER",
  "document": {
    "caption": "your-video-caption",
    "filename": "your-video-caption",
    "link": "http(s)://the-url"
  },
  "image": {
    "caption": "your-video-caption",
    "filename": "your-video-caption",
    "link": "http(s)://the-url"
  },
  "mask": false,
  "template": {
    "data": {
      "amount": 10,
      "currency": "INR"
    },
    "id": "60d236c6142e53561cb7716c"
  },
  "text": {
    "body": "your-text-message-content",
    "type": "image"
  },
  "to": {
    "email": "string",
    "name": "string",
    "phone": "string"
  },
  "type": "text",
  "video": {
    "caption": "your-video-caption",
    "filename": "your-video-caption",
    "link": "http(s)://the-url"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'x-api-key':'thisduMmykEy4maTD0NTUsEit'
};

fetch('/demo.mehery.io/xms/api/v1/message/send',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'x-api-key' => 'thisduMmykEy4maTD0NTUsEit'
}

result = RestClient.post '/demo.mehery.io/xms/api/v1/message/send',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*',
  'x-api-key': 'thisduMmykEy4maTD0NTUsEit'
}

r = requests.post('/demo.mehery.io/xms/api/v1/message/send', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => '*/*',
    'x-api-key' => 'thisduMmykEy4maTD0NTUsEit',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/demo.mehery.io/xms/api/v1/message/send', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/demo.mehery.io/xms/api/v1/message/send");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"*/*"},
        "x-api-key": []string{"thisduMmykEy4maTD0NTUsEit"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/demo.mehery.io/xms/api/v1/message/send", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/v1/message/send`

This API can be used to Send Message

> Body parameter

```json
{
  "audio": {
    "caption": "your-video-caption",
    "filename": "your-video-caption",
    "link": "http(s)://the-url"
  },
  "channelId": "91SERVICENUMBER",
  "document": {
    "caption": "your-video-caption",
    "filename": "your-video-caption",
    "link": "http(s)://the-url"
  },
  "image": {
    "caption": "your-video-caption",
    "filename": "your-video-caption",
    "link": "http(s)://the-url"
  },
  "mask": false,
  "template": {
    "data": {
      "amount": 10,
      "currency": "INR"
    },
    "id": "60d236c6142e53561cb7716c"
  },
  "text": {
    "body": "your-text-message-content",
    "type": "image"
  },
  "to": {
    "email": "string",
    "name": "string",
    "phone": "string"
  },
  "type": "text",
  "video": {
    "caption": "your-video-caption",
    "filename": "your-video-caption",
    "link": "http(s)://the-url"
  }
}
```

<h3 id="send-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-api-key|header|string|false|API Key|
|body|body|[OutBoundMsg](#schemaoutboundmsg)|true|message|

> Example responses

> 200 Response

<h3 id="send-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ApiResponse_OutBoundReciept_object_](#schemaapiresponse_outboundreciept_object_)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="server-xms-session-apis">Session APIs</h1>

API's for Session Management

## Read all messages for a session

<a id="opIdsetWebhookUrlUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /demo.mehery.io/xms/api/v1/session/messages?sessionId=string \
  -H 'Accept: */*' \
  -H 'x-api-key: thisduMmykEy4maTD0NTUsEit'

```

```http
GET /demo.mehery.io/xms/api/v1/session/messages?sessionId=string HTTP/1.1

Accept: */*
x-api-key: thisduMmykEy4maTD0NTUsEit

```

```javascript

const headers = {
  'Accept':'*/*',
  'x-api-key':'thisduMmykEy4maTD0NTUsEit'
};

fetch('/demo.mehery.io/xms/api/v1/session/messages?sessionId=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => '*/*',
  'x-api-key' => 'thisduMmykEy4maTD0NTUsEit'
}

result = RestClient.get '/demo.mehery.io/xms/api/v1/session/messages',
  params: {
  'sessionId' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': '*/*',
  'x-api-key': 'thisduMmykEy4maTD0NTUsEit'
}

r = requests.get('/demo.mehery.io/xms/api/v1/session/messages', params={
  'sessionId': 'string'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => '*/*',
    'x-api-key' => 'thisduMmykEy4maTD0NTUsEit',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/demo.mehery.io/xms/api/v1/session/messages', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/demo.mehery.io/xms/api/v1/session/messages?sessionId=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"*/*"},
        "x-api-key": []string{"thisduMmykEy4maTD0NTUsEit"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/demo.mehery.io/xms/api/v1/session/messages", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/v1/session/messages`

<h3 id="read-all-messages-for-a-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sessionId|query|string|true|sessionId|
|x-api-key|header|string|false|API Key|

> Example responses

> 200 Response

<h3 id="read-all-messages-for-a-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ApiResponse_ChatMessageDTO_object_](#schemaapiresponse_chatmessagedto_object_)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ApiFieldError">ApiFieldError</h2>
<!-- backwards compatibility -->
<a id="schemaapifielderror"></a>
<a id="schema_ApiFieldError"></a>
<a id="tocSapifielderror"></a>
<a id="tocsapifielderror"></a>

```json
{
  "body": {},
  "code": "string",
  "codeKey": "string",
  "codes": [
    "string"
  ],
  "description": "string",
  "descriptionKey": "string",
  "field": "string",
  "obzect": "string"
}

```

ApiFieldError

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|object|true|none|none|
|code|string|true|none|none|
|codeKey|string|true|none|none|
|codes|[string]|true|none|none|
|description|string|true|none|none|
|descriptionKey|string|true|none|none|
|field|string|true|none|none|
|obzect|string|true|none|none|

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "mediaCaption": "Transaction Receipt",
  "mediaId": 12,
  "mediaMimeType": "image/png",
  "mediaName": "TransactionReceipt.pdf",
  "mediaSrc": "https://client.service.com/docs/media/12.png",
  "mediaType": "IMAGE",
  "mediaURL": "https://client.service.com/docs/media/12.png"
}

```

Attachment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mediaCaption|string|true|none|Media Caption|
|mediaId|string|true|none|Media ID generated by Service|
|mediaMimeType|string|true|none|Mime Type|
|mediaName|string|true|none|File Name|
|mediaSrc|string|true|none|Media URL generated by Channel|
|mediaType|string|true|none|Media Type|
|mediaURL|string|true|none|Media URL generated by Service|

#### Enumerated Values

|Property|Value|
|---|---|
|mediaType|IMAGE|
|mediaType|DOCUMENT|
|mediaType|TEXT|
|mediaType|PDF|
|mediaType|VIDEO|

<h2 id="tocS_BasicExternalTemplate">BasicExternalTemplate</h2>
<!-- backwards compatibility -->
<a id="schemabasicexternaltemplate"></a>
<a id="schema_BasicExternalTemplate"></a>
<a id="tocSbasicexternaltemplate"></a>
<a id="tocsbasicexternaltemplate"></a>

```json
{
  "template": {},
  "varMap": {}
}

```

BasicExternalTemplate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template|object|true|none|none|
|varMap|object|true|none|none|

<h2 id="tocS_ChatMessageDTO">ChatMessageDTO</h2>
<!-- backwards compatibility -->
<a id="schemachatmessagedto"></a>
<a id="schema_ChatMessageDTO"></a>
<a id="tocSchatmessagedto"></a>
<a id="tocschatmessagedto"></a>

```json
{
  "action": "string",
  "attachments": [
    {
      "mediaCaption": "Transaction Receipt",
      "mediaId": 12,
      "mediaMimeType": "image/png",
      "mediaName": "TransactionReceipt.pdf",
      "mediaSrc": "https://client.service.com/docs/media/12.png",
      "mediaType": "IMAGE",
      "mediaURL": "https://client.service.com/docs/media/12.png"
    }
  ],
  "bulkSessionId": "string",
  "contact": {
    "channelType": "string",
    "contactId": "string",
    "contactType": "string",
    "csid": "string",
    "email": "string",
    "lane": "string",
    "name": "string",
    "phone": "string"
  },
  "logs": [
    "string"
  ],
  "messageId": "string",
  "messageIdExt": "string",
  "messageIdRef": "string",
  "meta": {},
  "name": "string",
  "replyId": "string",
  "replyIdExt": "string",
  "sender": "string",
  "sessionId": "string",
  "stamps": {
    "property1": 0,
    "property2": 0
  },
  "status": "string",
  "tags": {
    "categories": [
      "string"
    ],
    "cities": [
      "string"
    ],
    "countries": [
      "string"
    ],
    "langs": [
      "string"
    ],
    "locations": [
      "string"
    ],
    "organizations": [
      "string"
    ],
    "persons": [
      "string"
    ],
    "sentimentScore": 0,
    "sentiments": [
      "string"
    ]
  },
  "template": "string",
  "templateId": "string",
  "text": "string",
  "timestamp": 0,
  "type": "string"
}

```

ChatMessageDTO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|none|
|attachments|[[Attachment](#schemaattachment)]|true|none|none|
|bulkSessionId|string|true|none|none|
|contact|[Contactable](#schemacontactable)|true|none|none|
|logs|[string]|true|none|none|
|messageId|string|true|none|none|
|messageIdExt|string|true|none|none|
|messageIdRef|string|true|none|none|
|meta|object|true|none|none|
|name|string|true|none|none|
|replyId|string|true|none|none|
|replyIdExt|string|true|none|none|
|sender|string|true|none|none|
|sessionId|string|true|none|none|
|stamps|object|true|none|none|
|» **additionalProperties**|integer(int64)|false|none|none|
|status|string|true|none|none|
|tags|[TagDocument](#schematagdocument)|true|none|none|
|template|string|true|none|none|
|templateId|string|true|none|none|
|text|string|true|none|none|
|timestamp|integer(int64)|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_CommonMsgLocation">CommonMsgLocation</h2>
<!-- backwards compatibility -->
<a id="schemacommonmsglocation"></a>
<a id="schema_CommonMsgLocation"></a>
<a id="tocScommonmsglocation"></a>
<a id="tocscommonmsglocation"></a>

```json
{
  "address": "1 Hacker Way, Menlo Park, CA, 94025",
  "latitude": 12.90909,
  "longitude": 6.90808,
  "name": "Main Building"
}

```

CommonMsgLocation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|Address Text|
|latitude|string|true|none|latitude|
|longitude|string|true|none|longitude|
|name|string|true|none|location-name|

<h2 id="tocS_CommonMsgText">CommonMsgText</h2>
<!-- backwards compatibility -->
<a id="schemacommonmsgtext"></a>
<a id="schema_CommonMsgText"></a>
<a id="tocScommonmsgtext"></a>
<a id="tocscommonmsgtext"></a>

```json
{
  "body": "your-text-message-content",
  "type": "image"
}

```

CommonMsgText

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|true|none|Message Text|
|type|string|true|none|Message Type|

<h2 id="tocS_CommonTemplate">CommonTemplate</h2>
<!-- backwards compatibility -->
<a id="schemacommontemplate"></a>
<a id="schema_CommonTemplate"></a>
<a id="tocScommontemplate"></a>
<a id="tocscommontemplate"></a>

```json
{
  "data": {
    "amount": 10,
    "currency": "INR"
  },
  "id": "60d236c6142e53561cb7716c"
}

```

CommonTemplate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|Data will be used to resolve placeholders in template, in case of missing value blank will be attempted, <br> Kindly note Template may be rejected in case it does not match the approved format|
|id|string|false|none|Unique Template Id|

<h2 id="tocS_ContactInfoUpdate">ContactInfoUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacontactinfoupdate"></a>
<a id="schema_ContactInfoUpdate"></a>
<a id="tocScontactinfoupdate"></a>
<a id="tocscontactinfoupdate"></a>

```json
{
  "email": "abc@xyz.com",
  "labels": [
    {
      "format": "MM/DD/YY",
      "key": "CUSTOMER_TYPE",
      "name": "Customer Type",
      "type": "TEXT",
      "value": "Platinum"
    }
  ],
  "mobile": 919988776655,
  "name": "John Doe",
  "profileId": "C34567"
}

```

ContactInfoUpdate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|EmailId if to be changed|
|labels|[[CustomerLabel](#schemacustomerlabel)]|false|none|Additional Labels|
|mobile|string|false|none|Mobile Number if to be changed|
|name|string|false|none|Name if to be Channel|
|profileId|string|false|none|Unique Id assigned to Contact by Core Business Application|

<h2 id="tocS_ContactMeta">ContactMeta</h2>
<!-- backwards compatibility -->
<a id="schemacontactmeta"></a>
<a id="schema_ContactMeta"></a>
<a id="tocScontactmeta"></a>
<a id="tocscontactmeta"></a>

```json
{
  "channelType": "string",
  "contactId": "string",
  "contactType": "string",
  "country": "string",
  "csid": "string",
  "email": "string",
  "filter": [
    {
      "property1": {},
      "property2": {}
    }
  ],
  "keymap": [
    {
      "property1": "string",
      "property2": "string"
    }
  ],
  "lane": "string",
  "lang": "AB",
  "name": "string",
  "phone": "string",
  "prefix": "string",
  "tenant": "string",
  "userid": "string"
}

```

ContactMeta

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelType|string|true|none|none|
|contactId|string|true|none|none|
|contactType|string|true|none|none|
|country|string|true|none|none|
|csid|string|true|none|none|
|email|string|true|none|none|
|filter|[[Map_string_object_](#schemamap_string_object_)]|true|none|none|
|keymap|[[Map_string_string_](#schemamap_string_string_)]|true|none|none|
|lane|string|true|none|none|
|lang|string|true|none|none|
|name|string|true|none|none|
|phone|string|true|none|none|
|prefix|string|true|none|none|
|tenant|string|true|none|none|
|userid|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|lang|AB|
|lang|AE|
|lang|AF|
|lang|AK|
|lang|AM|
|lang|AN|
|lang|AR|
|lang|AS|
|lang|AV|
|lang|AY|
|lang|AZ|
|lang|BA|
|lang|BE|
|lang|BG|
|lang|BH|
|lang|BI|
|lang|BM|
|lang|BN|
|lang|BO|
|lang|BR|
|lang|BS|
|lang|CA|
|lang|CE|
|lang|CH|
|lang|CO|
|lang|CR|
|lang|CS|
|lang|CU|
|lang|CV|
|lang|CY|
|lang|DA|
|lang|DE|
|lang|DV|
|lang|DZ|
|lang|EE|
|lang|EL|
|lang|EN|
|lang|EO|
|lang|ES|
|lang|ET|
|lang|EU|
|lang|FA|
|lang|FF|
|lang|FI|
|lang|FJ|
|lang|FO|
|lang|FR|
|lang|FY|
|lang|GA|
|lang|GD|
|lang|GL|
|lang|GN|
|lang|GU|
|lang|GV|
|lang|HA|
|lang|HI|
|lang|HO|
|lang|HR|
|lang|HT|
|lang|HU|
|lang|HY|
|lang|HZ|
|lang|IA|
|lang|IN|
|lang|IE|
|lang|IG|
|lang|II|
|lang|IK|
|lang|IO|
|lang|IS|
|lang|IT|
|lang|IU|
|lang|IW|
|lang|JA|
|lang|JI|
|lang|JV|
|lang|KA|
|lang|KG|
|lang|KI|
|lang|KJ|
|lang|KK|
|lang|KL|
|lang|KM|
|lang|KN|
|lang|KO|
|lang|KR|
|lang|KS|
|lang|KU|
|lang|KV|
|lang|KW|
|lang|KY|
|lang|LA|
|lang|LB|
|lang|LG|
|lang|LI|
|lang|LN|
|lang|LO|
|lang|LT|
|lang|LU|
|lang|LV|
|lang|MG|
|lang|MH|
|lang|MI|
|lang|MK|
|lang|ML|
|lang|MN|
|lang|MO|
|lang|MR|
|lang|MS|
|lang|MT|
|lang|MY|
|lang|NA|
|lang|NB|
|lang|ND|
|lang|NE|
|lang|NG|
|lang|NL|
|lang|NN|
|lang|NO|
|lang|NR|
|lang|NV|
|lang|NY|
|lang|OC|
|lang|OJ|
|lang|OM|
|lang|OR|
|lang|OS|
|lang|PA|
|lang|PI|
|lang|PL|
|lang|PS|
|lang|PT|
|lang|QU|
|lang|RM|
|lang|RN|
|lang|RO|
|lang|RU|
|lang|RW|
|lang|SA|
|lang|SC|
|lang|SD|
|lang|SE|
|lang|SG|
|lang|SI|
|lang|SK|
|lang|SL|
|lang|SM|
|lang|SN|
|lang|SO|
|lang|SQ|
|lang|SR|
|lang|SS|
|lang|ST|
|lang|SU|
|lang|SV|
|lang|SW|
|lang|TA|
|lang|TE|
|lang|TG|
|lang|TH|
|lang|TI|
|lang|TK|
|lang|TL|
|lang|PH|
|lang|TN|
|lang|TO|
|lang|TR|
|lang|TS|
|lang|TT|
|lang|TW|
|lang|TY|
|lang|UG|
|lang|UK|
|lang|UR|
|lang|UZ|
|lang|VE|
|lang|VI|
|lang|VO|
|lang|WA|
|lang|WO|
|lang|XH|
|lang|YO|
|lang|ZA|
|lang|ZH|
|lang|ZU|

<h2 id="tocS_Contactable">Contactable</h2>
<!-- backwards compatibility -->
<a id="schemacontactable"></a>
<a id="schema_Contactable"></a>
<a id="tocScontactable"></a>
<a id="tocscontactable"></a>

```json
{
  "channelType": "string",
  "contactId": "string",
  "contactType": "string",
  "csid": "string",
  "email": "string",
  "lane": "string",
  "name": "string",
  "phone": "string"
}

```

Contactable

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelType|string|true|none|none|
|contactId|string|true|none|none|
|contactType|string|true|none|none|
|csid|string|true|none|none|
|email|string|true|none|none|
|lane|string|true|none|none|
|name|string|true|none|none|
|phone|string|true|none|none|

<h2 id="tocS_CustomerLabel">CustomerLabel</h2>
<!-- backwards compatibility -->
<a id="schemacustomerlabel"></a>
<a id="schema_CustomerLabel"></a>
<a id="tocScustomerlabel"></a>
<a id="tocscustomerlabel"></a>

```json
{
  "format": "MM/DD/YY",
  "key": "CUSTOMER_TYPE",
  "name": "Customer Type",
  "type": "TEXT",
  "value": "Platinum"
}

```

CustomerLabel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|Data Format|
|key|string|true|none|Unique LabelType|
|name|string|false|none|Display LabelType, Labels with same name will be grouped together, if not provided key will be used instead|
|type|string|false|none|Type of Label|
|value|object|true|none|Value of Label Value|

#### Enumerated Values

|Property|Value|
|---|---|
|format|MM/DD/YY|
|type|TEXT|
|type|DATE|
|type|NUMBER|
|type|LIST|

<h2 id="tocS_DigitalEventDto">DigitalEventDto</h2>
<!-- backwards compatibility -->
<a id="schemadigitaleventdto"></a>
<a id="schema_DigitalEventDto"></a>
<a id="tocSdigitaleventdto"></a>
<a id="tocsdigitaleventdto"></a>

```json
{
  "eventName": "CUSTOMER_CREATED",
  "id": 1234567,
  "links": [
    {
      "linkName": "string",
      "linkType": "string",
      "linkValue": "string"
    }
  ]
}

```

DigitalEventDto

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventName|string|true|none|Event Name and action|
|id|string|true|none|Unique  Id assigined by event|
|links|[[DigitalObjectLink](#schemadigitalobjectlink)]|true|none|none|

<h2 id="tocS_DigitalObjectDto">DigitalObjectDto</h2>
<!-- backwards compatibility -->
<a id="schemadigitalobjectdto"></a>
<a id="schema_DigitalObjectDto"></a>
<a id="tocSdigitalobjectdto"></a>
<a id="tocsdigitalobjectdto"></a>

```json
{
  "data": {},
  "id": "string",
  "links": [
    {
      "linkName": "string",
      "linkType": "string",
      "linkValue": "string"
    }
  ],
  "type": "string"
}

```

DigitalObjectDto

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|id|string|true|none|none|
|links|[[DigitalObjectLink](#schemadigitalobjectlink)]|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_DigitalObjectLink">DigitalObjectLink</h2>
<!-- backwards compatibility -->
<a id="schemadigitalobjectlink"></a>
<a id="schema_DigitalObjectLink"></a>
<a id="tocSdigitalobjectlink"></a>
<a id="tocsdigitalobjectlink"></a>

```json
{
  "linkName": "string",
  "linkType": "string",
  "linkValue": "string"
}

```

DigitalObjectLink

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linkName|string|true|none|none|
|linkType|string|true|none|none|
|linkValue|string|true|none|none|

<h2 id="tocS_InBoundAction">InBoundAction</h2>
<!-- backwards compatibility -->
<a id="schemainboundaction"></a>
<a id="schema_InBoundAction"></a>
<a id="tocSinboundaction"></a>
<a id="tocsinboundaction"></a>

```json
{
  "actionCode": "SEND_INVOICE"
}

```

InBoundAction

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionCode|string|true|none|Action Triggered by Agent/Service|

<h2 id="tocS_InBoundContact">InBoundContact</h2>
<!-- backwards compatibility -->
<a id="schemainboundcontact"></a>
<a id="schema_InBoundContact"></a>
<a id="tocSinboundcontact"></a>
<a id="tocsinboundcontact"></a>

```json
{
  "contactId": 1234567,
  "contactType": "WHATSAPP",
  "csid": "91YOURNUMBER",
  "lane": 919999998888,
  "profile": {
    "email": "abc@xyz.com",
    "mobile": 919988776655,
    "name": "John Doe"
  },
  "profileId": "C34567"
}

```

InBoundContact

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactId|string|true|none|Unique Id assigined to user by Service|
|contactType|string|true|none|Contact Type|
|csid|string|false|none|Channel Specific ID|
|lane|string|true|none|Contact Used by User while sending messageeg your business number or email address|
|profile|[InBoundContactProfile](#schemainboundcontactprofile)|true|none|none|
|profileId|string|false|none|Unique Id assigned to Contact by Core Business Application|

#### Enumerated Values

|Property|Value|
|---|---|
|contactType|SMS|
|contactType|EMAIL|
|contactType|WHATSAPP|
|contactType|PUSH|
|contactType|FACEBOOK|
|contactType|TELEGRAM|
|contactType|WEBSITE|
|contactType|TWITTER|
|contactType|INSTAGRAM|
|contactType|DUMMY|
|contactType|EMPTY|

<h2 id="tocS_InBoundContactProfile">InBoundContactProfile</h2>
<!-- backwards compatibility -->
<a id="schemainboundcontactprofile"></a>
<a id="schema_InBoundContactProfile"></a>
<a id="tocSinboundcontactprofile"></a>
<a id="tocsinboundcontactprofile"></a>

```json
{
  "email": "abc@xyz.com",
  "mobile": 919988776655,
  "name": "John Doe"
}

```

InBoundContactProfile

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Email Id collected from Channel|
|mobile|string|false|none|Mobile Number collected from Channel|
|name|string|false|none|Name collected from Channel|

<h2 id="tocS_InBoundMsg">InBoundMsg</h2>
<!-- backwards compatibility -->
<a id="schemainboundmsg"></a>
<a id="schema_InBoundMsg"></a>
<a id="tocSinboundmsg"></a>
<a id="tocsinboundmsg"></a>

```json
{
  "audio": {
    "caption": "document-caption",
    "filename": "document-filename",
    "id": 2121212,
    "link": "http(s)://link-to-media-file-url",
    "mime_type": "video/mp4",
    "sha256": "m3232kaoe4belrr",
    "type": "image"
  },
  "contactId": "WA919988776655",
  "document": {
    "caption": "document-caption",
    "filename": "document-filename",
    "id": 2121212,
    "link": "http(s)://link-to-media-file-url",
    "mime_type": "video/mp4",
    "sha256": "m3232kaoe4belrr",
    "type": "image"
  },
  "from": 919988776655,
  "id": 1234567,
  "image": {
    "caption": "document-caption",
    "filename": "document-filename",
    "id": 2121212,
    "link": "http(s)://link-to-media-file-url",
    "mime_type": "video/mp4",
    "sha256": "m3232kaoe4belrr",
    "type": "image"
  },
  "location": {
    "address": "1 Hacker Way, Menlo Park, CA, 94025",
    "latitude": 12.90909,
    "longitude": 6.90808,
    "name": "Main Building"
  },
  "messageIdExt": 1234567,
  "originalMessage": {},
  "session": {
    "assignedToAgent": "SUPPORT",
    "assignedToDept": "SUPPORT",
    "sessionId": "xsds34434"
  },
  "tags": {
    "categories": [
      "string"
    ],
    "cities": [
      "string"
    ],
    "countries": [
      "string"
    ],
    "langs": [
      "string"
    ],
    "locations": [
      "string"
    ],
    "organizations": [
      "string"
    ],
    "persons": [
      "string"
    ],
    "sentimentScore": 0,
    "sentiments": [
      "string"
    ]
  },
  "text": {
    "body": "your-text-message-content",
    "type": "image"
  },
  "timestamp": 156753339076,
  "type": "text",
  "video": {
    "caption": "document-caption",
    "filename": "document-filename",
    "id": 2121212,
    "link": "http(s)://link-to-media-file-url",
    "mime_type": "video/mp4",
    "sha256": "m3232kaoe4belrr",
    "type": "image"
  },
  "voice": {
    "caption": "document-caption",
    "filename": "document-filename",
    "id": 2121212,
    "link": "http(s)://link-to-media-file-url",
    "mime_type": "video/mp4",
    "sha256": "m3232kaoe4belrr",
    "type": "image"
  }
}

```

InBoundMsg

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio|[InBoundMsgMedia](#schemainboundmsgmedia)|true|none|none|
|contactId|string|true|none|Unique Contact Id of user|
|document|[InBoundMsgMedia](#schemainboundmsgmedia)|true|none|none|
|from|string|true|none|Contact of user|
|id|string|true|none|Unique Message Id assigined by Service|
|image|[InBoundMsgMedia](#schemainboundmsgmedia)|true|none|none|
|location|[CommonMsgLocation](#schemacommonmsglocation)|true|none|none|
|messageIdExt|string|true|none|Unique Message Id assigined by Channel if any|
|originalMessage|object|true|none|Original Message sent by Channel :  only if modified/error by service|
|session|[MsgSession](#schemamsgsession)|true|none|none|
|tags|[TagDocument](#schematagdocument)|true|none|none|
|text|[CommonMsgText](#schemacommonmsgtext)|true|none|none|
|timestamp|integer(int64)|true|none|message-timestamp|
|type|string|true|none|message-type|
|video|[InBoundMsgMedia](#schemainboundmsgmedia)|true|none|none|
|voice|[InBoundMsgMedia](#schemainboundmsgmedia)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|audio|
|type|document|
|type|image|
|type|location|
|type|system|
|type|text|
|type|video|
|type|voice|

<h2 id="tocS_InBoundMsgMedia">InBoundMsgMedia</h2>
<!-- backwards compatibility -->
<a id="schemainboundmsgmedia"></a>
<a id="schema_InBoundMsgMedia"></a>
<a id="tocSinboundmsgmedia"></a>
<a id="tocsinboundmsgmedia"></a>

```json
{
  "caption": "document-caption",
  "filename": "document-filename",
  "id": 2121212,
  "link": "http(s)://link-to-media-file-url",
  "mime_type": "video/mp4",
  "sha256": "m3232kaoe4belrr",
  "type": "image"
}

```

InBoundMsgMedia

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|The provided caption for the media.|
|filename|string|false|none|Filename on the sender's device.|
|id|string|true|none|ID of the media|
|link|string|true|none|link-to-audio-file|
|mime_type|string|true|none|Mime type of the media.|
|sha256|string|true|none|checksum|
|type|string|true|none|Message Type|

<h2 id="tocS_InBoundWrapper">InBoundWrapper</h2>
<!-- backwards compatibility -->
<a id="schemainboundwrapper"></a>
<a id="schema_InBoundWrapper"></a>
<a id="tocSinboundwrapper"></a>
<a id="tocsinboundwrapper"></a>

```json
{
  "actions": [
    {
      "actionCode": "SEND_INVOICE"
    }
  ],
  "contacts": [
    {
      "contactId": 1234567,
      "contactType": "WHATSAPP",
      "csid": "91YOURNUMBER",
      "lane": 919999998888,
      "profile": {
        "email": "abc@xyz.com",
        "mobile": 919988776655,
        "name": "John Doe"
      },
      "profileId": "C34567"
    }
  ],
  "messages": [
    {
      "audio": {
        "caption": "document-caption",
        "filename": "document-filename",
        "id": 2121212,
        "link": "http(s)://link-to-media-file-url",
        "mime_type": "video/mp4",
        "sha256": "m3232kaoe4belrr",
        "type": "image"
      },
      "contactId": "WA919988776655",
      "document": {
        "caption": "document-caption",
        "filename": "document-filename",
        "id": 2121212,
        "link": "http(s)://link-to-media-file-url",
        "mime_type": "video/mp4",
        "sha256": "m3232kaoe4belrr",
        "type": "image"
      },
      "from": 919988776655,
      "id": 1234567,
      "image": {
        "caption": "document-caption",
        "filename": "document-filename",
        "id": 2121212,
        "link": "http(s)://link-to-media-file-url",
        "mime_type": "video/mp4",
        "sha256": "m3232kaoe4belrr",
        "type": "image"
      },
      "location": {
        "address": "1 Hacker Way, Menlo Park, CA, 94025",
        "latitude": 12.90909,
        "longitude": 6.90808,
        "name": "Main Building"
      },
      "messageIdExt": 1234567,
      "originalMessage": {},
      "session": {
        "assignedToAgent": "SUPPORT",
        "assignedToDept": "SUPPORT",
        "sessionId": "xsds34434"
      },
      "tags": {
        "categories": [
          "string"
        ],
        "cities": [
          "string"
        ],
        "countries": [
          "string"
        ],
        "langs": [
          "string"
        ],
        "locations": [
          "string"
        ],
        "organizations": [
          "string"
        ],
        "persons": [
          "string"
        ],
        "sentimentScore": 0,
        "sentiments": [
          "string"
        ]
      },
      "text": {
        "body": "your-text-message-content",
        "type": "image"
      },
      "timestamp": 156753339076,
      "type": "text",
      "video": {
        "caption": "document-caption",
        "filename": "document-filename",
        "id": 2121212,
        "link": "http(s)://link-to-media-file-url",
        "mime_type": "video/mp4",
        "sha256": "m3232kaoe4belrr",
        "type": "image"
      },
      "voice": {
        "caption": "document-caption",
        "filename": "document-filename",
        "id": 2121212,
        "link": "http(s)://link-to-media-file-url",
        "mime_type": "video/mp4",
        "sha256": "m3232kaoe4belrr",
        "type": "image"
      }
    }
  ]
}

```

InBoundWrapper

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[InBoundAction](#schemainboundaction)]|true|none|none|
|contacts|[[InBoundContact](#schemainboundcontact)]|true|none|none|
|messages|[[InBoundMsg](#schemainboundmsg)]|true|none|none|

<h2 id="tocS_MessageSession">MessageSession</h2>
<!-- backwards compatibility -->
<a id="schemamessagesession"></a>
<a id="schema_MessageSession"></a>
<a id="tocSmessagesession"></a>
<a id="tocsmessagesession"></a>

```json
{
  "agent": "string",
  "dept": "string",
  "mode": "string",
  "resolved": true
}

```

MessageSession

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agent|string|true|none|none|
|dept|string|true|none|none|
|mode|string|true|none|none|
|resolved|boolean|true|none|none|

<h2 id="tocS_MsgSession">MsgSession</h2>
<!-- backwards compatibility -->
<a id="schemamsgsession"></a>
<a id="schema_MsgSession"></a>
<a id="tocSmsgsession"></a>
<a id="tocsmsgsession"></a>

```json
{
  "assignedToAgent": "SUPPORT",
  "assignedToDept": "SUPPORT",
  "sessionId": "xsds34434"
}

```

MsgSession

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignedToAgent|string|true|none|Message Assignment If Any|
|assignedToDept|string|true|none|Message Assignment If Any|
|sessionId|string|true|none|SessionId|

<h2 id="tocS_OutBoundContact">OutBoundContact</h2>
<!-- backwards compatibility -->
<a id="schemaoutboundcontact"></a>
<a id="schema_OutBoundContact"></a>
<a id="tocSoutboundcontact"></a>
<a id="tocsoutboundcontact"></a>

```json
{
  "email": "string",
  "name": "string",
  "phone": "string"
}

```

OutBoundContact

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email Address for email message.|
|name|string|true|none|Name of to be used will, override the name in message|
|phone|string|true|none|Phone in caseo of SMS/WHATSAPP|

<h2 id="tocS_OutBoundMsg">OutBoundMsg</h2>
<!-- backwards compatibility -->
<a id="schemaoutboundmsg"></a>
<a id="schema_OutBoundMsg"></a>
<a id="tocSoutboundmsg"></a>
<a id="tocsoutboundmsg"></a>

```json
{
  "audio": {
    "caption": "your-video-caption",
    "filename": "your-video-caption",
    "link": "http(s)://the-url"
  },
  "channelId": "91SERVICENUMBER",
  "document": {
    "caption": "your-video-caption",
    "filename": "your-video-caption",
    "link": "http(s)://the-url"
  },
  "image": {
    "caption": "your-video-caption",
    "filename": "your-video-caption",
    "link": "http(s)://the-url"
  },
  "mask": false,
  "template": {
    "data": {
      "amount": 10,
      "currency": "INR"
    },
    "id": "60d236c6142e53561cb7716c"
  },
  "text": {
    "body": "your-text-message-content",
    "type": "image"
  },
  "to": {
    "email": "string",
    "name": "string",
    "phone": "string"
  },
  "type": "text",
  "video": {
    "caption": "your-video-caption",
    "filename": "your-video-caption",
    "link": "http(s)://the-url"
  }
}

```

OutBoundMsg

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio|[OutBoundMsgMedia](#schemaoutboundmsgmedia)|false|none|none|
|channelId|string|true|none|The ID that identifies the channel over which the message should be sent.|
|document|[OutBoundMsgMedia](#schemaoutboundmsgmedia)|false|none|none|
|image|[OutBoundMsgMedia](#schemaoutboundmsgmedia)|false|none|none|
|mask|boolean|true|none|Mask the outgoing message data|
|template|[CommonTemplate](#schemacommontemplate)|false|none|none|
|text|[CommonMsgText](#schemacommonmsgtext)|false|none|none|
|to|[OutBoundContact](#schemaoutboundcontact)|true|none|none|
|type|string|true|none|message-type|
|video|[OutBoundMsgMedia](#schemaoutboundmsgmedia)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|audio|
|type|document|
|type|image|
|type|location|
|type|system|
|type|text|
|type|video|
|type|voice|
|type|contacts|
|type|template|
|type|optin|
|type|optout|

<h2 id="tocS_OutBoundMsgMedia">OutBoundMsgMedia</h2>
<!-- backwards compatibility -->
<a id="schemaoutboundmsgmedia"></a>
<a id="schema_OutBoundMsgMedia"></a>
<a id="tocSoutboundmsgmedia"></a>
<a id="tocsoutboundmsgmedia"></a>

```json
{
  "caption": "your-video-caption",
  "filename": "your-video-caption",
  "link": "http(s)://the-url"
}

```

OutBoundMsgMedia

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|your-media-caption|
|filename|string|false|none|your-document-filename|
|link|string|false|none|Public URL of Media file|

<h2 id="tocS_OutBoundReciept">OutBoundReciept</h2>
<!-- backwards compatibility -->
<a id="schemaoutboundreciept"></a>
<a id="schema_OutBoundReciept"></a>
<a id="tocSoutboundreciept"></a>
<a id="tocsoutboundreciept"></a>

```json
{
  "id": "gBEGkYiEB1VXAglK1ZEqA1YKPrU"
}

```

OutBoundReciept

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

<h2 id="tocS_OutboxMessage">OutboxMessage</h2>
<!-- backwards compatibility -->
<a id="schemaoutboxmessage"></a>
<a id="schema_OutboxMessage"></a>
<a id="tocSoutboxmessage"></a>
<a id="tocsoutboxmessage"></a>

```json
{
  "action": "string",
  "attachments": [
    {
      "mediaCaption": "Transaction Receipt",
      "mediaId": 12,
      "mediaMimeType": "image/png",
      "mediaName": "TransactionReceipt.pdf",
      "mediaSrc": "https://client.service.com/docs/media/12.png",
      "mediaType": "IMAGE",
      "mediaURL": "https://client.service.com/docs/media/12.png"
    }
  ],
  "attempt": 0,
  "collapseId": "string",
  "contact": {
    "channelType": "string",
    "contactId": "string",
    "contactType": "string",
    "csid": "string",
    "email": "string",
    "lane": "string",
    "name": "string",
    "phone": "string"
  },
  "contacts": [
    {
      "channelType": "string",
      "contactId": "string",
      "contactType": "string",
      "country": "string",
      "csid": "string",
      "email": "string",
      "filter": [
        {
          "property1": {},
          "property2": {}
        }
      ],
      "keymap": [
        {
          "property1": "string",
          "property2": "string"
        }
      ],
      "lane": "string",
      "lang": "AB",
      "name": "string",
      "phone": "string",
      "prefix": "string",
      "tenant": "string",
      "userid": "string"
    }
  ],
  "csid": "string",
  "files": [
    {
      "body": "string",
      "content": "string",
      "contentType": "string",
      "converter": "AMXFS",
      "extension": "string",
      "fileFormat": "PDF",
      "fileType": "IMAGE",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "model": {},
      "name": "string",
      "options": {},
      "password": "string",
      "path": "string",
      "template": {
        "data": {
          "amount": 10,
          "currency": "INR"
        },
        "id": "60d236c6142e53561cb7716c"
      },
      "title": "string",
      "url": "string"
    }
  ],
  "footer": "string",
  "formatSubType": "string",
  "formatType": "string",
  "hsm": {
    "data": {
      "amount": 10,
      "currency": "INR"
    },
    "id": "60d236c6142e53561cb7716c"
  },
  "id": "string",
  "lines": [
    "string"
  ],
  "logs": [
    "string"
  ],
  "message": "string",
  "messageId": "string",
  "messageIdExt": "string",
  "messageIdRef": "string",
  "messageType": "SOA",
  "meta": {},
  "model": {},
  "options": {},
  "priority": 0,
  "queue": 0,
  "session": {
    "agent": "string",
    "dept": "string",
    "mode": "string",
    "resolved": true
  },
  "sessionId": "string",
  "stamps": {
    "property1": 0,
    "property2": 0
  },
  "status": "SCHLD",
  "subject": "string",
  "templateExt": {
    "template": {},
    "varMap": {}
  },
  "timestamp": 0,
  "to": [
    "string"
  ],
  "type": "string"
}

```

OutboxMessage

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|none|
|attachments|[[Attachment](#schemaattachment)]|true|none|none|
|attempt|integer(int32)|true|none|none|
|collapseId|string|true|none|none|
|contact|[Contactable](#schemacontactable)|true|none|none|
|contacts|[[ContactMeta](#schemacontactmeta)]|true|none|none|
|csid|string|true|none|none|
|files|[[PostManFile](#schemapostmanfile)]|true|none|none|
|footer|string|true|none|none|
|formatSubType|string|true|none|none|
|formatType|string|true|none|none|
|hsm|[CommonTemplate](#schemacommontemplate)|true|none|none|
|id|string|true|none|none|
|lines|[string]|true|none|none|
|logs|[string]|true|none|none|
|message|string|true|none|none|
|messageId|string|true|none|none|
|messageIdExt|string|true|none|none|
|messageIdRef|string|true|none|none|
|messageType|string|true|none|none|
|meta|object|true|none|none|
|model|object|true|none|none|
|options|object|true|none|none|
|priority|integer(int32)|true|none|none|
|queue|number|true|none|none|
|session|[MessageSession](#schemamessagesession)|true|none|none|
|sessionId|string|true|none|none|
|stamps|object|true|none|none|
|» **additionalProperties**|integer(int64)|false|none|none|
|status|string|true|none|none|
|subject|string|true|none|none|
|templateExt|[BasicExternalTemplate](#schemabasicexternaltemplate)|true|none|none|
|timestamp|integer(int64)|true|none|none|
|to|[string]|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|messageType|SOA|
|messageType|IT|
|status|SCHLD|
|status|CRTD|
|status|INIT|
|status|SENT|
|status|SENT_ERR|
|status|SENTX|
|status|SENTX_ERR|
|status|DLVRD|
|status|READ|
|status|NSENT|
|status|BLCKD|
|status|FAILD|
|status|DELTD|
|status|CCWIN|

<h2 id="tocS_PMConfigurationObject">PMConfigurationObject</h2>
<!-- backwards compatibility -->
<a id="schemapmconfigurationobject"></a>
<a id="schema_PMConfigurationObject"></a>
<a id="tocSpmconfigurationobject"></a>
<a id="tocspmconfigurationobject"></a>

```json
{
  "description": "string",
  "key": "string",
  "shared": true,
  "value": {}
}

```

PMConfigurationObject

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|key|string|true|none|none|
|shared|boolean|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_PostManFile">PostManFile</h2>
<!-- backwards compatibility -->
<a id="schemapostmanfile"></a>
<a id="schema_PostManFile"></a>
<a id="tocSpostmanfile"></a>
<a id="tocspostmanfile"></a>

```json
{
  "body": "string",
  "content": "string",
  "contentType": "string",
  "converter": "AMXFS",
  "extension": "string",
  "fileFormat": "PDF",
  "fileType": "IMAGE",
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "model": {},
  "name": "string",
  "options": {},
  "password": "string",
  "path": "string",
  "template": {
    "data": {
      "amount": 10,
      "currency": "INR"
    },
    "id": "60d236c6142e53561cb7716c"
  },
  "title": "string",
  "url": "string"
}

```

PostManFile

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string(byte)|true|none|none|
|content|string|true|none|none|
|contentType|string|true|none|none|
|converter|string|true|none|none|
|extension|string|true|none|none|
|fileFormat|string|true|none|none|
|fileType|string|true|none|none|
|headers|object|true|none|none|
|» **additionalProperties**|string|false|none|none|
|model|object|true|none|none|
|name|string|true|none|none|
|options|object|true|none|none|
|password|string|true|none|none|
|path|string|true|none|none|
|template|[CommonTemplate](#schemacommontemplate)|true|none|none|
|title|string|true|none|none|
|url|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|converter|AMXFS|
|converter|FS|
|converter|FOP|
|converter|ITEXT5|
|converter|ITEXT7|
|converter|JASPER|
|fileFormat|PDF|
|fileFormat|CSV|
|fileFormat|PNG|
|fileFormat|JPEG|
|fileFormat|JPG|
|fileFormat|BMP|
|fileFormat|GIF|
|fileFormat|TIFF|
|fileFormat|TIF|
|fileFormat|WEBP|
|fileFormat|MP3|
|fileFormat|aac|
|fileFormat|AMR|
|fileFormat|OGG|
|fileFormat|OGG_PLUS|
|fileFormat|AUDIO_MP4|
|fileFormat|AUDIO_MPEG|
|fileFormat|MP4|
|fileFormat|VIDEO_3GPP|
|fileFormat|JSON|
|fileFormat|HTML|
|fileFormat|TEXT|
|fileFormat|UNKNOWN|
|fileType|IMAGE|
|fileType|VIDEO|
|fileType|AUDIO|
|fileType|TEXT|
|fileType|DOCUMENT|

<h2 id="tocS_TagDocument">TagDocument</h2>
<!-- backwards compatibility -->
<a id="schematagdocument"></a>
<a id="schema_TagDocument"></a>
<a id="tocStagdocument"></a>
<a id="tocstagdocument"></a>

```json
{
  "categories": [
    "string"
  ],
  "cities": [
    "string"
  ],
  "countries": [
    "string"
  ],
  "langs": [
    "string"
  ],
  "locations": [
    "string"
  ],
  "organizations": [
    "string"
  ],
  "persons": [
    "string"
  ],
  "sentimentScore": 0,
  "sentiments": [
    "string"
  ]
}

```

TagDocument

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[string]|true|none|none|
|cities|[string]|true|none|none|
|countries|[string]|true|none|none|
|langs|[string]|true|none|none|
|locations|[string]|true|none|none|
|organizations|[string]|true|none|none|
|persons|[string]|true|none|none|
|sentimentScore|integer(int32)|true|none|none|
|sentiments|[string]|true|none|none|

<h2 id="tocS_WebhookUrlRequest">WebhookUrlRequest</h2>
<!-- backwards compatibility -->
<a id="schemawebhookurlrequest"></a>
<a id="schema_WebhookUrlRequest"></a>
<a id="tocSwebhookurlrequest"></a>
<a id="tocswebhookurlrequest"></a>

```json
{
  "url": "https://www.example.com/webhook"
}

```

WebhookUrlRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|The webhook URL can either be: - the URL from your own application- or the partner|

<h2 id="tocS_ApiResponse_Attachment_object_">ApiResponse_Attachment_object_</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse_attachment_object_"></a>
<a id="schema_ApiResponse_Attachment_object_"></a>
<a id="tocSapiresponse_attachment_object_"></a>
<a id="tocsapiresponse_attachment_object_"></a>

```json
{
  "data": {
    "mediaCaption": "Transaction Receipt",
    "mediaId": 12,
    "mediaMimeType": "image/png",
    "mediaName": "TransactionReceipt.pdf",
    "mediaSrc": "https://client.service.com/docs/media/12.png",
    "mediaType": "IMAGE",
    "mediaURL": "https://client.service.com/docs/media/12.png"
  },
  "details": [
    {}
  ],
  "error": "string",
  "errors": [
    {
      "body": {},
      "code": "string",
      "codeKey": "string",
      "codes": [
        "string"
      ],
      "description": "string",
      "descriptionKey": "string",
      "field": "string",
      "obzect": "string"
    }
  ],
  "exception": "string",
  "extra": {},
  "logs": [
    "string"
  ],
  "message": "This is success message in plain english",
  "messageKey": "MESSAGE_SUCCESS:MOBILE:12",
  "meta": {},
  "params": {},
  "path": "/postman/email/send",
  "redirectUrl": "/go/to/some/other/url.html",
  "results": [
    {
      "mediaCaption": "Transaction Receipt",
      "mediaId": 12,
      "mediaMimeType": "image/png",
      "mediaName": "TransactionReceipt.pdf",
      "mediaSrc": "https://client.service.com/docs/media/12.png",
      "mediaType": "IMAGE",
      "mediaURL": "https://client.service.com/docs/media/12.png"
    }
  ],
  "status": 200,
  "statusKey": "SUCCESS",
  "timestamp": 1541276788518,
  "traceid": "string",
  "warningKey": "string",
  "warnings": [
    {
      "body": {},
      "code": "string",
      "codeKey": "string",
      "codes": [
        "string"
      ],
      "description": "string",
      "descriptionKey": "string",
      "field": "string",
      "obzect": "string"
    }
  ]
}

```

ApiResponse«Attachment,object»

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Attachment](#schemaattachment)|true|none|none|
|details|[object]|true|none|none|
|error|string|true|none|none|
|errors|[[ApiFieldError](#schemaapifielderror)]|true|none|none|
|exception|string|true|none|none|
|extra|object|true|none|none|
|logs|[string]|true|none|none|
|message|string|true|none|none|
|messageKey|string|true|none|none|
|meta|object|true|none|none|
|params|object|true|none|none|
|path|string|true|none|none|
|redirectUrl|string|true|none|none|
|results|[[Attachment](#schemaattachment)]|true|none|none|
|status|string|true|none|none|
|statusKey|string|true|none|none|
|timestamp|integer(int64)|true|none|none|
|traceid|string|true|none|none|
|warningKey|string|true|none|none|
|warnings|[[ApiFieldError](#schemaapifielderror)]|true|none|none|

<h2 id="tocS_ApiResponse_ChatMessageDTO_object_">ApiResponse_ChatMessageDTO_object_</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse_chatmessagedto_object_"></a>
<a id="schema_ApiResponse_ChatMessageDTO_object_"></a>
<a id="tocSapiresponse_chatmessagedto_object_"></a>
<a id="tocsapiresponse_chatmessagedto_object_"></a>

```json
{
  "data": {
    "action": "string",
    "attachments": [
      {
        "mediaCaption": "Transaction Receipt",
        "mediaId": 12,
        "mediaMimeType": "image/png",
        "mediaName": "TransactionReceipt.pdf",
        "mediaSrc": "https://client.service.com/docs/media/12.png",
        "mediaType": "IMAGE",
        "mediaURL": "https://client.service.com/docs/media/12.png"
      }
    ],
    "bulkSessionId": "string",
    "contact": {
      "channelType": "string",
      "contactId": "string",
      "contactType": "string",
      "csid": "string",
      "email": "string",
      "lane": "string",
      "name": "string",
      "phone": "string"
    },
    "logs": [
      "string"
    ],
    "messageId": "string",
    "messageIdExt": "string",
    "messageIdRef": "string",
    "meta": {},
    "name": "string",
    "replyId": "string",
    "replyIdExt": "string",
    "sender": "string",
    "sessionId": "string",
    "stamps": {
      "property1": 0,
      "property2": 0
    },
    "status": "string",
    "tags": {
      "categories": [
        "string"
      ],
      "cities": [
        "string"
      ],
      "countries": [
        "string"
      ],
      "langs": [
        "string"
      ],
      "locations": [
        "string"
      ],
      "organizations": [
        "string"
      ],
      "persons": [
        "string"
      ],
      "sentimentScore": 0,
      "sentiments": [
        "string"
      ]
    },
    "template": "string",
    "templateId": "string",
    "text": "string",
    "timestamp": 0,
    "type": "string"
  },
  "details": [
    {}
  ],
  "error": "string",
  "errors": [
    {
      "body": {},
      "code": "string",
      "codeKey": "string",
      "codes": [
        "string"
      ],
      "description": "string",
      "descriptionKey": "string",
      "field": "string",
      "obzect": "string"
    }
  ],
  "exception": "string",
  "extra": {},
  "logs": [
    "string"
  ],
  "message": "This is success message in plain english",
  "messageKey": "MESSAGE_SUCCESS:MOBILE:12",
  "meta": {},
  "params": {},
  "path": "/postman/email/send",
  "redirectUrl": "/go/to/some/other/url.html",
  "results": [
    {
      "action": "string",
      "attachments": [
        {
          "mediaCaption": "Transaction Receipt",
          "mediaId": 12,
          "mediaMimeType": "image/png",
          "mediaName": "TransactionReceipt.pdf",
          "mediaSrc": "https://client.service.com/docs/media/12.png",
          "mediaType": "IMAGE",
          "mediaURL": "https://client.service.com/docs/media/12.png"
        }
      ],
      "bulkSessionId": "string",
      "contact": {
        "channelType": "string",
        "contactId": "string",
        "contactType": "string",
        "csid": "string",
        "email": "string",
        "lane": "string",
        "name": "string",
        "phone": "string"
      },
      "logs": [
        "string"
      ],
      "messageId": "string",
      "messageIdExt": "string",
      "messageIdRef": "string",
      "meta": {},
      "name": "string",
      "replyId": "string",
      "replyIdExt": "string",
      "sender": "string",
      "sessionId": "string",
      "stamps": {
        "property1": 0,
        "property2": 0
      },
      "status": "string",
      "tags": {
        "categories": [
          "string"
        ],
        "cities": [
          "string"
        ],
        "countries": [
          "string"
        ],
        "langs": [
          "string"
        ],
        "locations": [
          "string"
        ],
        "organizations": [
          "string"
        ],
        "persons": [
          "string"
        ],
        "sentimentScore": 0,
        "sentiments": [
          "string"
        ]
      },
      "template": "string",
      "templateId": "string",
      "text": "string",
      "timestamp": 0,
      "type": "string"
    }
  ],
  "status": 200,
  "statusKey": "SUCCESS",
  "timestamp": 1541276788518,
  "traceid": "string",
  "warningKey": "string",
  "warnings": [
    {
      "body": {},
      "code": "string",
      "codeKey": "string",
      "codes": [
        "string"
      ],
      "description": "string",
      "descriptionKey": "string",
      "field": "string",
      "obzect": "string"
    }
  ]
}

```

ApiResponse«ChatMessageDTO,object»

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ChatMessageDTO](#schemachatmessagedto)|true|none|none|
|details|[object]|true|none|none|
|error|string|true|none|none|
|errors|[[ApiFieldError](#schemaapifielderror)]|true|none|none|
|exception|string|true|none|none|
|extra|object|true|none|none|
|logs|[string]|true|none|none|
|message|string|true|none|none|
|messageKey|string|true|none|none|
|meta|object|true|none|none|
|params|object|true|none|none|
|path|string|true|none|none|
|redirectUrl|string|true|none|none|
|results|[[ChatMessageDTO](#schemachatmessagedto)]|true|none|none|
|status|string|true|none|none|
|statusKey|string|true|none|none|
|timestamp|integer(int64)|true|none|none|
|traceid|string|true|none|none|
|warningKey|string|true|none|none|
|warnings|[[ApiFieldError](#schemaapifielderror)]|true|none|none|

<h2 id="tocS_ApiResponse_DigitalEventDto_object_">ApiResponse_DigitalEventDto_object_</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse_digitaleventdto_object_"></a>
<a id="schema_ApiResponse_DigitalEventDto_object_"></a>
<a id="tocSapiresponse_digitaleventdto_object_"></a>
<a id="tocsapiresponse_digitaleventdto_object_"></a>

```json
{
  "data": {
    "eventName": "CUSTOMER_CREATED",
    "id": 1234567,
    "links": [
      {
        "linkName": "string",
        "linkType": "string",
        "linkValue": "string"
      }
    ]
  },
  "details": [
    {}
  ],
  "error": "string",
  "errors": [
    {
      "body": {},
      "code": "string",
      "codeKey": "string",
      "codes": [
        "string"
      ],
      "description": "string",
      "descriptionKey": "string",
      "field": "string",
      "obzect": "string"
    }
  ],
  "exception": "string",
  "extra": {},
  "logs": [
    "string"
  ],
  "message": "This is success message in plain english",
  "messageKey": "MESSAGE_SUCCESS:MOBILE:12",
  "meta": {},
  "params": {},
  "path": "/postman/email/send",
  "redirectUrl": "/go/to/some/other/url.html",
  "results": [
    {
      "eventName": "CUSTOMER_CREATED",
      "id": 1234567,
      "links": [
        {
          "linkName": "string",
          "linkType": "string",
          "linkValue": "string"
        }
      ]
    }
  ],
  "status": 200,
  "statusKey": "SUCCESS",
  "timestamp": 1541276788518,
  "traceid": "string",
  "warningKey": "string",
  "warnings": [
    {
      "body": {},
      "code": "string",
      "codeKey": "string",
      "codes": [
        "string"
      ],
      "description": "string",
      "descriptionKey": "string",
      "field": "string",
      "obzect": "string"
    }
  ]
}

```

ApiResponse«DigitalEventDto,object»

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DigitalEventDto](#schemadigitaleventdto)|true|none|none|
|details|[object]|true|none|none|
|error|string|true|none|none|
|errors|[[ApiFieldError](#schemaapifielderror)]|true|none|none|
|exception|string|true|none|none|
|extra|object|true|none|none|
|logs|[string]|true|none|none|
|message|string|true|none|none|
|messageKey|string|true|none|none|
|meta|object|true|none|none|
|params|object|true|none|none|
|path|string|true|none|none|
|redirectUrl|string|true|none|none|
|results|[[DigitalEventDto](#schemadigitaleventdto)]|true|none|none|
|status|string|true|none|none|
|statusKey|string|true|none|none|
|timestamp|integer(int64)|true|none|none|
|traceid|string|true|none|none|
|warningKey|string|true|none|none|
|warnings|[[ApiFieldError](#schemaapifielderror)]|true|none|none|

<h2 id="tocS_ApiResponse_DigitalObjectDto_object_">ApiResponse_DigitalObjectDto_object_</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse_digitalobjectdto_object_"></a>
<a id="schema_ApiResponse_DigitalObjectDto_object_"></a>
<a id="tocSapiresponse_digitalobjectdto_object_"></a>
<a id="tocsapiresponse_digitalobjectdto_object_"></a>

```json
{
  "data": {
    "data": {},
    "id": "string",
    "links": [
      {
        "linkName": "string",
        "linkType": "string",
        "linkValue": "string"
      }
    ],
    "type": "string"
  },
  "details": [
    {}
  ],
  "error": "string",
  "errors": [
    {
      "body": {},
      "code": "string",
      "codeKey": "string",
      "codes": [
        "string"
      ],
      "description": "string",
      "descriptionKey": "string",
      "field": "string",
      "obzect": "string"
    }
  ],
  "exception": "string",
  "extra": {},
  "logs": [
    "string"
  ],
  "message": "This is success message in plain english",
  "messageKey": "MESSAGE_SUCCESS:MOBILE:12",
  "meta": {},
  "params": {},
  "path": "/postman/email/send",
  "redirectUrl": "/go/to/some/other/url.html",
  "results": [
    {
      "data": {},
      "id": "string",
      "links": [
        {
          "linkName": "string",
          "linkType": "string",
          "linkValue": "string"
        }
      ],
      "type": "string"
    }
  ],
  "status": 200,
  "statusKey": "SUCCESS",
  "timestamp": 1541276788518,
  "traceid": "string",
  "warningKey": "string",
  "warnings": [
    {
      "body": {},
      "code": "string",
      "codeKey": "string",
      "codes": [
        "string"
      ],
      "description": "string",
      "descriptionKey": "string",
      "field": "string",
      "obzect": "string"
    }
  ]
}

```

ApiResponse«DigitalObjectDto,object»

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DigitalObjectDto](#schemadigitalobjectdto)|true|none|none|
|details|[object]|true|none|none|
|error|string|true|none|none|
|errors|[[ApiFieldError](#schemaapifielderror)]|true|none|none|
|exception|string|true|none|none|
|extra|object|true|none|none|
|logs|[string]|true|none|none|
|message|string|true|none|none|
|messageKey|string|true|none|none|
|meta|object|true|none|none|
|params|object|true|none|none|
|path|string|true|none|none|
|redirectUrl|string|true|none|none|
|results|[[DigitalObjectDto](#schemadigitalobjectdto)]|true|none|none|
|status|string|true|none|none|
|statusKey|string|true|none|none|
|timestamp|integer(int64)|true|none|none|
|traceid|string|true|none|none|
|warningKey|string|true|none|none|
|warnings|[[ApiFieldError](#schemaapifielderror)]|true|none|none|

<h2 id="tocS_ApiResponse_OutBoundReciept_object_">ApiResponse_OutBoundReciept_object_</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse_outboundreciept_object_"></a>
<a id="schema_ApiResponse_OutBoundReciept_object_"></a>
<a id="tocSapiresponse_outboundreciept_object_"></a>
<a id="tocsapiresponse_outboundreciept_object_"></a>

```json
{
  "data": {
    "id": "gBEGkYiEB1VXAglK1ZEqA1YKPrU"
  },
  "details": [
    {}
  ],
  "error": "string",
  "errors": [
    {
      "body": {},
      "code": "string",
      "codeKey": "string",
      "codes": [
        "string"
      ],
      "description": "string",
      "descriptionKey": "string",
      "field": "string",
      "obzect": "string"
    }
  ],
  "exception": "string",
  "extra": {},
  "logs": [
    "string"
  ],
  "message": "This is success message in plain english",
  "messageKey": "MESSAGE_SUCCESS:MOBILE:12",
  "meta": {},
  "params": {},
  "path": "/postman/email/send",
  "redirectUrl": "/go/to/some/other/url.html",
  "results": [
    {
      "id": "gBEGkYiEB1VXAglK1ZEqA1YKPrU"
    }
  ],
  "status": 200,
  "statusKey": "SUCCESS",
  "timestamp": 1541276788518,
  "traceid": "string",
  "warningKey": "string",
  "warnings": [
    {
      "body": {},
      "code": "string",
      "codeKey": "string",
      "codes": [
        "string"
      ],
      "description": "string",
      "descriptionKey": "string",
      "field": "string",
      "obzect": "string"
    }
  ]
}

```

ApiResponse«OutBoundReciept,object»

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[OutBoundReciept](#schemaoutboundreciept)|true|none|none|
|details|[object]|true|none|none|
|error|string|true|none|none|
|errors|[[ApiFieldError](#schemaapifielderror)]|true|none|none|
|exception|string|true|none|none|
|extra|object|true|none|none|
|logs|[string]|true|none|none|
|message|string|true|none|none|
|messageKey|string|true|none|none|
|meta|object|true|none|none|
|params|object|true|none|none|
|path|string|true|none|none|
|redirectUrl|string|true|none|none|
|results|[[OutBoundReciept](#schemaoutboundreciept)]|true|none|none|
|status|string|true|none|none|
|statusKey|string|true|none|none|
|timestamp|integer(int64)|true|none|none|
|traceid|string|true|none|none|
|warningKey|string|true|none|none|
|warnings|[[ApiFieldError](#schemaapifielderror)]|true|none|none|

<h2 id="tocS_ApiResponse_OutboxMessage_object_">ApiResponse_OutboxMessage_object_</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse_outboxmessage_object_"></a>
<a id="schema_ApiResponse_OutboxMessage_object_"></a>
<a id="tocSapiresponse_outboxmessage_object_"></a>
<a id="tocsapiresponse_outboxmessage_object_"></a>

```json
{
  "data": {
    "action": "string",
    "attachments": [
      {
        "mediaCaption": "Transaction Receipt",
        "mediaId": 12,
        "mediaMimeType": "image/png",
        "mediaName": "TransactionReceipt.pdf",
        "mediaSrc": "https://client.service.com/docs/media/12.png",
        "mediaType": "IMAGE",
        "mediaURL": "https://client.service.com/docs/media/12.png"
      }
    ],
    "attempt": 0,
    "collapseId": "string",
    "contact": {
      "channelType": "string",
      "contactId": "string",
      "contactType": "string",
      "csid": "string",
      "email": "string",
      "lane": "string",
      "name": "string",
      "phone": "string"
    },
    "contacts": [
      {
        "channelType": "string",
        "contactId": "string",
        "contactType": "string",
        "country": "string",
        "csid": "string",
        "email": "string",
        "filter": [
          {
            "property1": {},
            "property2": {}
          }
        ],
        "keymap": [
          {
            "property1": "string",
            "property2": "string"
          }
        ],
        "lane": "string",
        "lang": "AB",
        "name": "string",
        "phone": "string",
        "prefix": "string",
        "tenant": "string",
        "userid": "string"
      }
    ],
    "csid": "string",
    "files": [
      {
        "body": "string",
        "content": "string",
        "contentType": "string",
        "converter": "AMXFS",
        "extension": "string",
        "fileFormat": "PDF",
        "fileType": "IMAGE",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "model": {},
        "name": "string",
        "options": {},
        "password": "string",
        "path": "string",
        "template": {
          "data": {
            "amount": 10,
            "currency": "INR"
          },
          "id": "60d236c6142e53561cb7716c"
        },
        "title": "string",
        "url": "string"
      }
    ],
    "footer": "string",
    "formatSubType": "string",
    "formatType": "string",
    "hsm": {
      "data": {
        "amount": 10,
        "currency": "INR"
      },
      "id": "60d236c6142e53561cb7716c"
    },
    "id": "string",
    "lines": [
      "string"
    ],
    "logs": [
      "string"
    ],
    "message": "string",
    "messageId": "string",
    "messageIdExt": "string",
    "messageIdRef": "string",
    "messageType": "SOA",
    "meta": {},
    "model": {},
    "options": {},
    "priority": 0,
    "queue": 0,
    "session": {
      "agent": "string",
      "dept": "string",
      "mode": "string",
      "resolved": true
    },
    "sessionId": "string",
    "stamps": {
      "property1": 0,
      "property2": 0
    },
    "status": "SCHLD",
    "subject": "string",
    "templateExt": {
      "template": {},
      "varMap": {}
    },
    "timestamp": 0,
    "to": [
      "string"
    ],
    "type": "string"
  },
  "details": [
    {}
  ],
  "error": "string",
  "errors": [
    {
      "body": {},
      "code": "string",
      "codeKey": "string",
      "codes": [
        "string"
      ],
      "description": "string",
      "descriptionKey": "string",
      "field": "string",
      "obzect": "string"
    }
  ],
  "exception": "string",
  "extra": {},
  "logs": [
    "string"
  ],
  "message": "This is success message in plain english",
  "messageKey": "MESSAGE_SUCCESS:MOBILE:12",
  "meta": {},
  "params": {},
  "path": "/postman/email/send",
  "redirectUrl": "/go/to/some/other/url.html",
  "results": [
    {
      "action": "string",
      "attachments": [
        {
          "mediaCaption": "Transaction Receipt",
          "mediaId": 12,
          "mediaMimeType": "image/png",
          "mediaName": "TransactionReceipt.pdf",
          "mediaSrc": "https://client.service.com/docs/media/12.png",
          "mediaType": "IMAGE",
          "mediaURL": "https://client.service.com/docs/media/12.png"
        }
      ],
      "attempt": 0,
      "collapseId": "string",
      "contact": {
        "channelType": "string",
        "contactId": "string",
        "contactType": "string",
        "csid": "string",
        "email": "string",
        "lane": "string",
        "name": "string",
        "phone": "string"
      },
      "contacts": [
        {
          "channelType": "string",
          "contactId": "string",
          "contactType": "string",
          "country": "string",
          "csid": "string",
          "email": "string",
          "filter": [
            {
              "property1": {},
              "property2": {}
            }
          ],
          "keymap": [
            {
              "property1": "string",
              "property2": "string"
            }
          ],
          "lane": "string",
          "lang": "AB",
          "name": "string",
          "phone": "string",
          "prefix": "string",
          "tenant": "string",
          "userid": "string"
        }
      ],
      "csid": "string",
      "files": [
        {
          "body": "string",
          "content": "string",
          "contentType": "string",
          "converter": "AMXFS",
          "extension": "string",
          "fileFormat": "PDF",
          "fileType": "IMAGE",
          "headers": {
            "property1": "string",
            "property2": "string"
          },
          "model": {},
          "name": "string",
          "options": {},
          "password": "string",
          "path": "string",
          "template": {
            "data": {
              "amount": 10,
              "currency": "INR"
            },
            "id": "60d236c6142e53561cb7716c"
          },
          "title": "string",
          "url": "string"
        }
      ],
      "footer": "string",
      "formatSubType": "string",
      "formatType": "string",
      "hsm": {
        "data": {
          "amount": 10,
          "currency": "INR"
        },
        "id": "60d236c6142e53561cb7716c"
      },
      "id": "string",
      "lines": [
        "string"
      ],
      "logs": [
        "string"
      ],
      "message": "string",
      "messageId": "string",
      "messageIdExt": "string",
      "messageIdRef": "string",
      "messageType": "SOA",
      "meta": {},
      "model": {},
      "options": {},
      "priority": 0,
      "queue": 0,
      "session": {
        "agent": "string",
        "dept": "string",
        "mode": "string",
        "resolved": true
      },
      "sessionId": "string",
      "stamps": {
        "property1": 0,
        "property2": 0
      },
      "status": "SCHLD",
      "subject": "string",
      "templateExt": {
        "template": {},
        "varMap": {}
      },
      "timestamp": 0,
      "to": [
        "string"
      ],
      "type": "string"
    }
  ],
  "status": 200,
  "statusKey": "SUCCESS",
  "timestamp": 1541276788518,
  "traceid": "string",
  "warningKey": "string",
  "warnings": [
    {
      "body": {},
      "code": "string",
      "codeKey": "string",
      "codes": [
        "string"
      ],
      "description": "string",
      "descriptionKey": "string",
      "field": "string",
      "obzect": "string"
    }
  ]
}

```

ApiResponse«OutboxMessage,object»

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[OutboxMessage](#schemaoutboxmessage)|true|none|none|
|details|[object]|true|none|none|
|error|string|true|none|none|
|errors|[[ApiFieldError](#schemaapifielderror)]|true|none|none|
|exception|string|true|none|none|
|extra|object|true|none|none|
|logs|[string]|true|none|none|
|message|string|true|none|none|
|messageKey|string|true|none|none|
|meta|object|true|none|none|
|params|object|true|none|none|
|path|string|true|none|none|
|redirectUrl|string|true|none|none|
|results|[[OutboxMessage](#schemaoutboxmessage)]|true|none|none|
|status|string|true|none|none|
|statusKey|string|true|none|none|
|timestamp|integer(int64)|true|none|none|
|traceid|string|true|none|none|
|warningKey|string|true|none|none|
|warnings|[[ApiFieldError](#schemaapifielderror)]|true|none|none|

<h2 id="tocS_ApiResponse_PMConfigurationObject_object_">ApiResponse_PMConfigurationObject_object_</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse_pmconfigurationobject_object_"></a>
<a id="schema_ApiResponse_PMConfigurationObject_object_"></a>
<a id="tocSapiresponse_pmconfigurationobject_object_"></a>
<a id="tocsapiresponse_pmconfigurationobject_object_"></a>

```json
{
  "data": {
    "description": "string",
    "key": "string",
    "shared": true,
    "value": {}
  },
  "details": [
    {}
  ],
  "error": "string",
  "errors": [
    {
      "body": {},
      "code": "string",
      "codeKey": "string",
      "codes": [
        "string"
      ],
      "description": "string",
      "descriptionKey": "string",
      "field": "string",
      "obzect": "string"
    }
  ],
  "exception": "string",
  "extra": {},
  "logs": [
    "string"
  ],
  "message": "This is success message in plain english",
  "messageKey": "MESSAGE_SUCCESS:MOBILE:12",
  "meta": {},
  "params": {},
  "path": "/postman/email/send",
  "redirectUrl": "/go/to/some/other/url.html",
  "results": [
    {
      "description": "string",
      "key": "string",
      "shared": true,
      "value": {}
    }
  ],
  "status": 200,
  "statusKey": "SUCCESS",
  "timestamp": 1541276788518,
  "traceid": "string",
  "warningKey": "string",
  "warnings": [
    {
      "body": {},
      "code": "string",
      "codeKey": "string",
      "codes": [
        "string"
      ],
      "description": "string",
      "descriptionKey": "string",
      "field": "string",
      "obzect": "string"
    }
  ]
}

```

ApiResponse«PMConfigurationObject,object»

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[PMConfigurationObject](#schemapmconfigurationobject)|true|none|none|
|details|[object]|true|none|none|
|error|string|true|none|none|
|errors|[[ApiFieldError](#schemaapifielderror)]|true|none|none|
|exception|string|true|none|none|
|extra|object|true|none|none|
|logs|[string]|true|none|none|
|message|string|true|none|none|
|messageKey|string|true|none|none|
|meta|object|true|none|none|
|params|object|true|none|none|
|path|string|true|none|none|
|redirectUrl|string|true|none|none|
|results|[[PMConfigurationObject](#schemapmconfigurationobject)]|true|none|none|
|status|string|true|none|none|
|statusKey|string|true|none|none|
|timestamp|integer(int64)|true|none|none|
|traceid|string|true|none|none|
|warningKey|string|true|none|none|
|warnings|[[ApiFieldError](#schemaapifielderror)]|true|none|none|

<h2 id="tocS_Map_string_object_">Map_string_object_</h2>
<!-- backwards compatibility -->
<a id="schemamap_string_object_"></a>
<a id="schema_Map_string_object_"></a>
<a id="tocSmap_string_object_"></a>
<a id="tocsmap_string_object_"></a>

```json
{
  "property1": {},
  "property2": {}
}

```

Map«string,object»

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_Map_string_string_">Map_string_string_</h2>
<!-- backwards compatibility -->
<a id="schemamap_string_string_"></a>
<a id="schema_Map_string_string_"></a>
<a id="tocSmap_string_string_"></a>
<a id="tocsmap_string_string_"></a>

```json
{
  "property1": "string",
  "property2": "string"
}

```

Map«string,string»

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

