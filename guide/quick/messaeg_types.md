---
layout: default
title: Message Types
parent: Guide
nav_order: 2
has_children: true
---
# Message Types


|  MeherY                   |  WhatsApp                 |  Facebook                 | 
|---                        |---                        |---                        |
| ACCOUNT_UPDATE            | ACCOUNT_UPDATE            |   ACCOUNT_UPDATE	        |
| ALERT_UPDATE              | ALERT_UPDATE              |   ACCOUNT_UPDATE	        |
| ISSUE_RESOLUTION          | ISSUE_RESOLUTION          |   ACCOUNT_UPDATE	        |
| PAYMENT_UPDATE            | PAYMENT_UPDATE            |   POST_PURCHASE_UPDATE	|
| PERSONAL_FINANCE_UPDATE   | PERSONAL_FINANCE_UPDATE   |   POST_PURCHASE_UPDATE	| 
| SHIPPING_UPDATE           | SHIPPING_UPDATE           |   POST_PURCHASE_UPDATE	| 
| TRANSPORTATION_UPDATE     | TRANSPORTATION_UPDATE     |   POST_PURCHASE_UPDATE	|
| TICKET_UPDATE             | TICKET_UPDATE             |   POST_PURCHASE_UPDATE	|
| RESERVATION_UPDATE        | RESERVATION_UPDATE        |   CONFIRMED_EVENT_UPDATE	|
| APPOINTMENT_UPDATE        | APPOINTMENT_UPDATE        |   CONFIRMED_EVENT_UPDATE	|
| HUMAN_AGENT               | _--free-text--_           |   HUMAN_AGENT	            |
| AUTO_REPLY                | AUTO_REPLY                |   --free-text--	        |
| CUSTOMER_FEEDBACK         | _--free-text--_           |   _--free-text--_	        |


## WhatsApp Message Types
### ACCOUNT_UPDATE 
#### notify the message recipient of a change to their account settings.
* Profile has changed
* Preferences are updated
* Settings have changed
* Membership has expired
* Password has changed

### PAYMENT_UPDATE 
#### notify the message recipient of a payment update for an existing transaction.
* Send a receipt
* Send an out-of-stock notification
* Notify an auction has ended
* Status on a payment transaction has changed

### PERSONAL_FINANCE_UPDATE 
#### confirm a message recipient’s financial activity.
* Bill-pay reminders
* Scheduled payment reminder
* Payment receipt notification
* Funds transfer confirmation or update
* Other transactional activities in financial services

###  SHIPPING_UPDATE
#### notify the message recipient of a change in shipping status for a product that has already been purchased.
* Product is shipped
* Status changes to in-transit
* Product is delivered
* Shipment is delayed

###  RESERVATION_UPDATE
####  notify the message recipient of updates to an existing reservation.
* Itinerary changes
* Location changes
* Cancellation is confirmed
* Hotel booking is cancelled
* Car rental pick-up time changes
* Room upgrade is confirmed

### APPOINTMENT_UPDATE
#### notify the message recipient of a change to an existing appointment.
* Appointment time changes
* Appointment location changes
* Appointment is cancelled

### TRANSPORTATION_UPDATE
#### notify the message recipient of updates to an existing transportation reservation.
* Flight status changes
* Ride is cancelled
* Trip is started
* Ferry has arrived

### TICKET_UPDATE
#### send the message recipient updates or reminders for an event for which a person already has a ticket.
* Concert start time changes
* Event location changes
* Show is cancelled
* A refund opportunity is made available

### ISSUE_RESOLUTION
#### notify the message recipient of an update to a customer service issue that was initiated in a Messenger conversation, following a transaction.
* Issue is resolved
* Issue status is updated
* Issue requires a request for additional information
* Notify the message recipient of something informational like Businesshours/hours of availability


## Facebook Message Types 
#### [Visit full documentation](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags#supported_tags)

### CONFIRMED_EVENT_UPDATE
#### not available for Instagram messaging.
#### Description
- Send the user reminders or updates for an event they have registered for (e.g., RSVP'ed, purchased tickets). This tag may be used for upcoming events and events in progress.

#### Allowed
- Reminder of upcoming classes, appointments, or events that the user has scheduled
- Confirmation of user's reservation or attendance to an accepted event or appointment
- Notification of user's transportation or trip scheduled, such as arrival, cancellation, baggage delay, or other status changes

#### Disallowed (non-exhaustive)
- Promotional content, including but not limited to deals, offers, coupons, and discounts
- Content related to an event the user has not signed up for (e.g., reminders to purchase event tickets, cross-sell of other events, tour schedules, etc)
- Messages related to past events
- Prompts to any survey, poll, or reviews unrelated to a preceding interaction in Messenger

### POST_PURCHASE_UPDATE
#### not available for Instagram messaging.
#### Description
- Notify the user of an update on a recent purchase.

#### Allowed
- Confirmation of transaction, such as invoices or receipts
- Notifications of shipment status, such as product in-transit, shipped, delivered, or delayed
- Changes related to an order that the user placed, such credit card has declined, backorder items, or other order updates that require user action

#### Disallowed (non-exhaustive)
- Promotional content, including but not limited to deals, promotions, coupons, and discounts
- Messages that cross-sell or upsell products or services
- Prompts to any survey, poll, or reviews unrelated to a preceding interaction in Messenger


### ACCOUNT_UPDATE
#### not available for Instagram messaging.
#### Description
- Notify the user of a non-recurring change to their application or account.

#### Allowed
- A change in application status (e.g., credit card, job)
- Notification of suspicious activity, such as fraud alerts

#### Disallowed (non-exhaustive)
- Promotional content, including but not limited to deals, promotions, coupons, and discounts
- Recurring content (e.g., statement is ready, bill is due, new job listings)
- Prompts to any survey, poll, or reviews unrelated to a preceding interaction in Messenger


### HUMAN_AGENT
#### Description
- Allows human agents to respond to user inquiries. Messages can be sent within 7 days after a user message.

#### Allowed
- Human agent support for issues that cannot be resolved within the standard messaging window (e.g., business is closed for the weekend, issue requires >24 hours to resolve)

#### Disallowed (non-exhaustive)
- Automated messages
- Content unrelated to user inquiry

> [NOTE](){: .label .label-yellow } Apps should apply for the Human Agent permission via the Developer App dashboard. Navigate to App dashboard -> App review -> Permissions & Features -> Human Agent. Those apps that were previously approved for beta access to the Human Agent permission do not need to re-apply for access.

> [NOTE](){: .label .label-yellow } Human Agent permission is not available in standard access/dev mode. You will need to complete the app review process before you can leverage the human agent tag. During app review submission, please provide clear instructions and demo on how you intend to leverage the human agent tag in your experiences.

### CUSTOMER_FEEDBACK
#### not available for Instagram messaging.
#### Description
- This tag allows you to send the Customer Feedback Template within 7 days after the user's last message.

#### Allowed
- Post purchase support feedback surveys
- Post event feedback surveys
- Product reviews

#### Disallowed (non-exhaustive)
- The tag can only be used with the Customer Feedback Template. Use in any other form is prohibited and will fail.