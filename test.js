const mailjs = require('./index');
require('dotenv').config();

// https://webformatter.com/html -> format in one line
const html = "<h1>Test</h1><br><p>This is a test</p>"

const SendMail = new mailjs
    .mail('turzepispa@tozya.com', 'gmail', { user: process.env.USER, pass: process.env.PASS })
    .send('Coucou', null, html);