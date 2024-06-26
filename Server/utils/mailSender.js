const nodemailer = require("nodemailer");
require("dotenv").config();
const mailSender = async (email, title, body) =>{
    try {
        const transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth: {
              // TODO: replace `user` and `pass` values from <https://forwardemail.net>
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS,
            }
          });

          
            // send mail with defined transport object
            const info = await transporter.sendMail({
              from: "StudyNotion || by Kushagra Rai", // sender address
              to: `${email}`, // list of receivers
              subject: `${title}`, 
              html: `${body}`, // html body
            });

            console.log(info)
            return info;
    } catch (error) {
        console.error(error)
    }
}

module.exports = mailSender;