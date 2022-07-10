const nodemailer = require('nodemailer');
const colors = require('colors');

module.exports.mail = class {
    constructor(to, service, { user, pass } = {}) {
        this.to = to;
        this.service = service;
        this.user = user;
        this.pass = pass;
    }

    async send(subject, text, html) {
        if(text && html) return console.warn(colors.red(colors.bold('Error - ') + "You can use either text or html, but you can't use both together"));

        const t_p = nodemailer.createTransport({
            service: this.service,
            auth: {
                user: this.user,
                pass: this.pass,
            }
        });

        const m_o = {
            from: this.user,
            to: this.to,
            subject: subject,
            text: text,
            html: html
        }

        await t_p.sendMail(m_o, function(err, info) {
            if(err) console.log(err);

            const infos = {
                response: info.response,
                messageId: info.messageId,
                envelope: info.envelope
            }

            console.log(infos);
        });
    }
}