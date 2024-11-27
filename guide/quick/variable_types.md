---
layout: default
title: Variable
parent: Guide
nav_order: 3
has_children: true
---
# Variables

There are three types of variables available messaging.

### Sample Template

```
{% raw %}
Hello {{contact.name}},
Your transaction of amount {{data.amount}} with reference id {{data.ref_id}} has been processed.

In case of any query you can call our customer support number {{global.crm_number}}.

Thanks for using {{global.componay_name}}
{% endraw %}
```

## DATA Variables
_Data Variables_ are dynamic values sent with each message at run time, it is part of send API
```javascript
{
	template : "my_template_name",
	data : {
		amount : 1000,
		ef_id : '451289'
	}
}
```


## CONTACT Variables
_Contact Variables_ are variables collected from customer contact details provided by channel. No need to pass it during send API

## GLOBAL Variables
_Global Variables_ are variables declared in Admin Panel under SETUP &#8594; Variable Setup



