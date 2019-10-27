import * as functions from 'firebase-functions';
import * as nodemailer from "nodemailer";
import * as smtpTransport from "nodemailer-smtp-transport";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

// // Setup environment
// // firebase functions:config:set gmail.address="***@gmail.com" gmail.password="***"
const address = functions.config().gmail.address
const password = functions.config().gmail.password
const transport = nodemailer.createTransport(smtpTransport({
    service: "gmail",
    auth: {
        user: address,
        pass: password
    }
}));

export const sendMail = functions.https.onCall((data, _) => {
    const email = {
        from: address,
        to: data.destination,
        subject: data.subject,
        text: data.body
    }
    transport.sendMail(email, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
});
