/*
    Video: https://www.youtube.com/watch?v=9zEhGUIUwxY
    Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps
*/

// require('dotenv').config();

// const nodemailer = require('nodemailer');
// const log = console.log;





var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cofitelstore@gmail.com',
    pass: '2000D0l@rSt0r&#'
  }
});

// Step 2
let mailOptions = {
    from: 'cofitelstore@gmail.com', // TODO: email sender
    to: 'maninthiddne@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!',
    // attachments: [
    //     { filename: 'images/profile.JPG', path: './images/profile.JPG' } // TODO: replace it with your own image
    // ]
};


// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});