/*
    Video: https://www.youtube.com/watch?v=9zEhGUIUwxY
    Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps
*/

require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;

// Step 1
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL || 'cofitelstore@gmail.com', // TODO: your gmail account 
//         pass: process.env.PASSWORD || '2000D0l@rSt0r&#', // TODO: your gmail password
//     }
//     // auth: {
//     //     user: process.env.EMAIL || 'maninthiddne@gmail.com', // TODO: your gmail account 
//     //     pass: process.env.PASSWORD || 'chancelier', // TODO: your gmail password
//     // }
// });

var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8c518de0f9de79",
      pass: "72cb248701742b"
    }
  });

  // import XLSX from 'xlsx'; // Use this for React
const XLSX = require('xlsx');

// Create a new blank XLSX Document
let workbook = XLSX.utils.book_new();

// The data that will be added to the sheet
let dataForSheet = [
	['Column 1', 'Column 2','Column 3','Column 4','Column 5','Column 6'],
	['Data 1', 'Data 2','Data 3','Data 4','Data 5','Data 6'],
	['Data 7', 'Data 8','Data 9','Data 10'],
	['Data 11', 'Data 12','','','Data 13','Data 14','Data 15'],
];

// Convert the Array data to a sheet
let sheetData = XLSX.utils.aoa_to_sheet(dataForSheet);

// Add the sheet to the workbook
XLSX.utils.book_append_sheet(workbook, sheetData, 'Sheet 1');

// Save the XLSX File.
XLSX.writeFile(workbook, 'FILE_NAME.xlsx');

// Step 2
let mailOptions = {
    from: 'cofitelstore@gmail.com', // TODO: email sender
    to: 'dollarstoreagence@gmail.com', // TODO: email receiver
    subject: ' !!! Nodemailer - Test',
    text: '!!!! Wooohooo it works!!',
    attachments: [
        { filename: 'FILE_NAME.xlsx', path: './FILE_NAME.xlsx' } // TODO: replace it with your own image
    ]
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!' + data.response);
});