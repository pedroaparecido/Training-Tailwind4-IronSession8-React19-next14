import { createUser, findUser } from '../../modules/user/user.service'
//import handler from '../../lib/middlewares/nextConnect' #Retirado createHandler
import Handler from '../../lib/middlewares/nextConnect'

import { getIronSession, sealData } from 'iron-session'
import { SMTPClient } from 'emailjs'

const client = new SMTPClient({
    user: 'pedroaparecidori@gmail.com',
    password: `${process.env.passClient}`,
    host: 'smtp.gmail.com',
    ssl: true
})
const createHandler = Handler()

createHandler.post(async (req, res) => {
    try {
        const session = getIronSession(req, res, {
            password: `${process.env.passSession}`,
            cookieName: 'admin'
        })
        session.email = req.body.email
        session.password = req.body.password
        const signup = await createUser(req.body)
        session.req = signup._id
        await session.isLoggedIn
        sealData(session, {
            password: `${process.env.passSession}`
        })
        await session.save
        console.log(signup.status)
        res.status(201).send(signup)
        client.send(
            {
                text: 'Confirmação de cadastro!',
                from: 'Confirmação',
                to: `${session.email}`,
                cc: 'noreply@gmail.com',
                subject: 'Confirmação'
            },
            (err, message) => {
                console.log(err || message)
            }
        )
        return signup
    } catch (err) {
        console.log(err)
    }
})

export const config = {
    matcher : [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
        "/api/signup"
    ],
    api: {
      externalResolver: true,
    },
}

export default createHandler.handler()