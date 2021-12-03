const emailer = require("./mailer");

mailer.sendMail(
  {
    from: "arthaud14@free.fr",
    to: "arthaud.primevert@gmail.com",
    subject: "Quest to Send a Email with MailJet ",
    text: "Mail with MailJEt",
    html: "<p>Mail whith MailJEt</p>",
  },
  (err, info) => {
    if (err) console.error(err);
    else console.log(info);
  }
);
