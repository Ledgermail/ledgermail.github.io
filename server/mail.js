const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, //ssl
  auth: {
    user: "info@ledgermail.io",
    pass: "2xTyPgNR8Ebw",
  },
});
module.exports.sendMail = async (body) => {
  return transporter.sendMail({
    from: "ledgermail <info@ledgermail.io>",
    to: ["naganath@pingalasoftware.com"],
    subject: "Enquiery for Ledgermail",
    html:
      " Name: <b>" +
      body.firstName +
      " " +
      body.lastName +
      " </b> <br> Email: <b> " +
      body.email +
      " </b> <br> Phone number: <b> " +
      body.number +
      "</b> <br> Subject: <b> " +
      body.subject +
      " </b> <br>  Message: <b> " +
      body.message +
      " </b> ",
  });
};
