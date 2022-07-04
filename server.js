const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
// require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;

// middleware
// to load the file on the port
app.use(express.static('public'));

// to get the json data coming from the front-end
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        // port: 5000,
        secure: true,
        service: 'gmail',
        auth: {
            type: "OAUTH2",
            user: process.env.GMAIL_USERNAME,
            password: process.env.GMAIL_PASSWORD,
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: "victestweb@gmail.com",
        subject: `Message from ${req.body.name} through ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent:' + info.response);
            res.send('success');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});