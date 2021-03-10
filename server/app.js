const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

const mailgun = require("mailgun-js");
const mailgunApiKey = '67d65166c6ee35e41709115f283ac866-e49cc42c-8d238506';

/* Enable cors */
app.use(cors());

/* Serve static React page */
app.use(express.static(path.join(__dirname, '../client/build')));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

/* Send form */
app.post("/send", async (req, res) => {
    /* Nodemailer etc. */
    const DOMAIN = 'sandboxe3175ca26a6d455f8d97d3016d514bd8.mailgun.org';
    const mg = mailgun({apiKey: mailgunApiKey, domain: DOMAIN});
    const data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: 'sajmon0031@gmail.com',
        subject: 'Hello',
        text: 'Testing some Mailgun awesomness!'
    };
    mg.messages().send(data, function (error, body) {
        console.log(body);
    });
});

/* Run the app */
app.listen(5000, () => {
    console.log("Server listening on port 5000");
});