const router = require('express').Router();
// const nodemailer = require('nodemailer');
// const { google } = require('googleapis');
// const OAuth2 = google.auth.OAuth2;
const menuRoutes = require('./menu');
// const creds = require('../../config/config');

// Email routes

// const oauth2Client = new OAuth2(
//   creds.CLIENT_ID, // ClientID
//   creds.CLIENT_SECRET, // Client Secret
//   "https://developers.google.com/oauthplayground" // Redirect URL
// );

// oauth2Client.setCredentials({
//   refresh_token: creds.REFRESH_TOKEN
// });
// const accessToken = oauth2Client.getAccessToken();



// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//     auth: {
//       type: 'OAuth2',
//       user: creds.USER,
//       clientId: creds.CLIENT_ID,
//       clientSecret: creds.CLIENT_SECRET,
//       refreshToken: creds.REFRESH_TOKEN,
//       accessToken: accessToken
//     }
//   });

// use this for testing on localhost. Make sure to change https://myaccount.google.com/lesssecureapps to on
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: creds.USER,
//     pass: creds.PASS
//   },
//   tls: { rejectUnauthorized: false }
// });

// transporter.verify(error => {
//   if (error) {
//     console.log('Email transporter error: ', error)
//   } else {
//     console.log('The server is ready to take messages.')
//   };
// });

// order form email
// router.post('/sendorder', (req, res, next) => {
//   const name = req.body.name;
//   const phone = req.body.phone;
//   const email = req.body.email;
//   const pickupTime = req.body.pickupTime;
//   const orderDetails = req.body.orderDetails;
//   const specialRequests = req.body.specialRequests;
//   const orderSubtotal = req.body.orderSubtotal;
//   const tax = req.body.tax;
//   const total = req.body.total;

//   const content = `<p>Name: ${name}</p> 
//   <p>Phone: ${phone}</p>
//   <p>Email: ${email}</p>
//   <p>Order pick-up time: ${pickupTime}</p>
//   <p>Order Details: ${orderDetails}</p>
//   <p>Special requests: ${specialRequests}</p>
//   <p>${orderSubtotal}</p>
//   <p>${tax}</p>
//   <p>${total}</p>`

//   const mailOptions = {
//     from: name + '&lt;' + email + '&gt;',
//     to: creds.USER,
//     subject: 'New order from PhoSaigon-mke.com',
//     html: content,
//     replyTo: email
//   };

//   transporter.sendMail(mailOptions, (err, data) => {
//     if (err) {
//       res.json({
//         msg: 'fail',
//         error: err
//       });
//      } else {
//         res.json({
//           msg: 'success'
//         });
//       };
//     });
// });

// contact form email
// router.post('/sendmessage', (req, res, next) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const message = req.body.message;

//   const content = `<p>Name: ${name}</p> 
//   <p>Email: ${email}</p>
//   <p>Message: ${message}</p>`

//   const mailContactOptions = {
//     from: name + '&lt;' + email + '&gt;',
//     to: creds.USER,
//     subject: 'New message from PhoSaigon-mke.com',
//     html: content,
//     replyTo: email
//   };

//   transporter.sendMail(mailContactOptions, (err, data) => {
//     if (err) {
//       res.json({
//         msg: 'fail',
//         error: err
//       });
//      } else {
//         res.json({
//           msg: 'success'
//         });
//       };
//     });
// });

// Menu routes
router.use('/menu', menuRoutes);

module.exports = router;