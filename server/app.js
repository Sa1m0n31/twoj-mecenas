const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const app = express();

/* Serve static React page */
app.use(express.static(path.join(__dirname, '../client/build')));

/* Send form */
app.post("/send", async (req, res) => {
      /* Nodemailer etc. */
});

/* Run the app */
app.listen(5000, () => {
    console.log("Server listening on port 5000");
});