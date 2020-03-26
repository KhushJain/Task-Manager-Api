const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'khushjain20011@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}


const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'khushjain20011@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}


// sgMail.send({
//     to: 'khushjain20011@gmail.com',
//     from: 'khushjain20011@gmail.com',
//     subject: 'This is my first creation from sendgrid',
//     text: 'I hope this one actually get to you'

// })


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}