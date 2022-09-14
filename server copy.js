/*
    Video: https://www.youtube.com/watch?v=9zEhGUIUwxY
    Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps
*/

require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    // auth: {
    //     user: process.env.EMAIL || 'cofitelstore@gmail.com', // TODO: your gmail account 
    //     pass: process.env.PASSWORD || '2000D0l@rSt0r&#', // TODO: your gmail password
    // }
    auth: {
        user: process.env.EMAIL || 'maninthiddne@gmail.com', // TODO: your gmail account 
        pass: process.env.PASSWORD || 'chancelier', // TODO: your gmail password
    }
});

// Step 2
let mailOptions = {
    from: 'maninthiddne@gmail.com', // TODO: email sender
    to: 'cofitelstore@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!',
    attachments: [
        { filename: 'images/profile.JPG', path: './images/profile.JPG' } // TODO: replace it with your own image
    ]
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});