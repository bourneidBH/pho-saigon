const router = require('express').Router();
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const menuRoutes = require('./menu');
const creds = require('../../config/config');

// Email routes
const transport = {
  service: 'gmail',
  // auth: {
  //   xoauth2: xoauth2.createXOAuth2Generator({
  //     user: creds.USER,
  //     clientId: creds.CLIENT_ID,
  //     clientSecret: creds.CLIENT_SECRET,
  //     refreshToken: ''
  //   })
  // }
  // host: 'mail.twc.com',
  // port: 993,
  // secure: true,
  // user: creds.USER,
  // pass: creds.PASS,
  auth: {
    type: "OAuth2",
    user: creds.USER,
    clientId: creds.CLIENT_ID,
    clientSecret: creds.CLIENT_SECRET,
  }
}

const transporter = nodemailer.createTransport(transport);

transporter.verify(error => {
  if (error) {
    console.log('Email transporter error: ', error)
  } else {
    console.log('The server is ready to take messages.')
  };
});

router.post('/sendorder', (req, res, next) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const pickupTime = req.body.pickupTime;
  const orderDetails = req.body.orderDetails;
  const specialRequests = req.body.specialRequests;
  const orderSubtotal = req.body.orderSubtotal;
  const tax = req.body.tax;
  const total = req.body.total;
  const content = `Name: ${name} \n Phone: ${phone} 
  \n Email: ${email} \n Order pick-up time: ${pickupTime} \n Order details: ${orderDetails} 
  \n Special requests: ${specialRequests} \n Order subtotal: ${orderSubtotal} \n Tax: ${tax} \n Total ${total}`

  const mail = {
    from: name + '&lt;' + email + '&gt;',
    to: creds.USER,
    subject: 'New order from PhoSaigon-mke.com',
    text: content,
    replyTo: email
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      });
     } else {
        res.json({
          msg: 'success'
        });
      };
    });
});

// Menu routes
router.use('/menu', menuRoutes);

module.exports = router;