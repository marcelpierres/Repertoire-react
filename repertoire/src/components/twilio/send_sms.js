// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
//

const accountSid = "AC194c7ffc1cef3dba9c70f6ca65e128e1";
const authToken = "50d19067049c72e24662accece95ffb3";
const client = require("twilio")(accountSid, authToken);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

/*async function Text() {
  client.messages
    .create({
      body: "Test",
      from: "+16475606794",
      to: "+16479676790"
    })
    .then(message => console.log(message.sid));
}*/

app.post("/api/messages", (req, res) => {
  res.header("Content-Type", "application/json");
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

//module.exports.Text = Text;
