import { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASSWORD } from "../../environment.js";
import { createTransport } from "nodemailer";
import handlebars from "handlebars";
import { readFileSync } from "fs";

const transport = createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD,
  },
});

export const sendEmail = async (recipientEmail ,recipientFullname, regiterUrl) => {
  const source = readFileSync('./services/mail/emailTemplate.hbs', "utf-8");
  const template = handlebars.compile(source);
  return await transport.sendMail({
    from: MAIL_USER,
    to: recipientEmail,
    subject: "Welcome to Cinema App",
    html: template({fullname: recipientFullname, regiterUrl})
  });
};
