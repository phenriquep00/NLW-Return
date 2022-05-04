import { MailAdapter, SendMailData } from "../adapters/mail-adapter";
import nodemailer from "nodemailer";



const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "288eaf770b6b04",
      pass: "4933908b470254"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@fidget.com>",
            to: "Pedro <contact.pedrolima@gmail.com>",
            subject,
            html: body,
        })
    };
}