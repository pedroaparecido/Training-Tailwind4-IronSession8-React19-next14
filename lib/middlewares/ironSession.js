import { unsealData } from "iron-session"
import { cookies } from "next/headers"

export default async function IronSession() {
    const cookieStore = cookies()

    const encryptedSession = cookieStore.get('admin')?.value

    const session = unsealData(encryptedSession, {
        password: `${process.env.passSession}`
    })

    return session
}