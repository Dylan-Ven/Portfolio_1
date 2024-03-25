const pass = import.meta.env.PASS;
    const user = import.meta.env.USER;
    const Mail = document.getElementById('Mail').value;
    const Subject = document.getElementById('Subject').value;
    const Textarea = document.getElementById('Text').value;

    const nodemailer = require('nodemailer');
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: pass
        }
    });

    const mailOptions = {
        from: Mail,
        to: "ven.dylanvander@gmail.com",
        subject: Subject,
        text: Textarea
    };

    function send(){
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
    document.getElementById('send').addEventListener('click', send);
    