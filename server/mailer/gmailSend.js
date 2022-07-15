process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const send = require('gmail-send')({
    user: 'ascellatest@gmail.com',
    pass: 'zaqwer54321',
    to: 'ascellanova@gmail.com',

    //  from: 'noreply@gmail.com', // from: by default equals to user
    // bcc: 'some-user@mail.com',            // almost any option of `nodemailer` will be passed to it
    subject: 'test subject',
    text: 'gmail-send example 1', // Plain text
    // files: [ filepath ],
})

send(
    {
        text: 'gmail-send example 1',
    },
    (error, result, fullResult) => {
        if (error) console.error(error)
        console.log(result)
    }
)

// const asyncAwaitSend = async () => {
//     try {
//         const res = await send() // Using default parameters
//         console.log('res.result:', res.result)
//         // uncomment to see full response from Nodemailer:
//         // console.log('* [promise-example-2] res.full:', res.full);
//     } catch (e) {
//         console.error('ERROR:', e)
//     }
// }
// asyncAwaitSend()
