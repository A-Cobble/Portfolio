import nodemailer from "nodemailer"

// const password = process.env.PASSWORD

export default function handler(req, res) {
    if(req.method === "POST"){
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: 'acobble42@gmail.com',
                pass: process.env.PASSWORD,
            },
            secure: true,
        })
        const mailData = {
            from: 'acobble42@gmail.com',
            to: 'alex.cobble42@gmail.com',
            subject: `Portfolio Website: ${req.body.subject}`,
            text: req.body.message + " | Sent from: " + req.body.email,
            html:   `<div>
                        <p>
                            Sent from: ${req.body.email}
                        <br/>
                            Subject: ${req.body.subject}
                        <br/>
                            Message: ${req.body.message}
                        </p>
                    </div>`
        }

        transporter.sendMail(mailData, (err, info) => {
            err? console.log(err) : console.log(info)
        })
        // console.log(req.body)
        res.status(200).send("Email sent.")
    }
  }
  