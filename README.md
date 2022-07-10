## mailjs

# Description

```js
Allows you to send emails to people in a simple way, and by being able to integrate html code.
```

# Send email

```js
const mailjs = require('nodemailjs');

const SendMail = new mailjs
    .mail('email of person', 'gmail', { user: 'your email', pass: 'your password' })
    .send('Title', 'Content');
```

# Send email with html content

```js
const mailjs = require('nodemailjs');

// https://webformatter.com/html -> format in one line
const html = "<h1>Test</h1><br><p>This is a test</p>";

const SendMail = new mailjs
    .mail('email of person', 'gmail', { user: 'your email', pass: 'your password' })
    .send('Title', null, html);
```