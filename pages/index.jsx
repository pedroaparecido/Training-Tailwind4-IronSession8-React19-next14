import { Card, CardHeader, CardTitle, CardContent } from '/@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'

export default function HomePage() {
    const [session, setSession] = useState()
    const { register, handleSubmit } = useForm()
    const router = useRouter()

    const handleAuth = async (data) => {
        try {
            const response = await axios.post('/api/signup', data)
            console.log(response)
            if (response.status === 201) {
                setSession(response.status)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div className="flex min-h-screen items-center bg-slate-50 justify-center">
            <Card className="w-[440px] h-[600px] flex flex-col gap-[200px]">
                <CardHeader className="flex items-center justify-center">
                    <CardTitle className="m-12 text4x1">Digite seus dados para registro!</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    <form className="flex flex-col gap-[10px]" onSubmit={handleSubmit(handleAuth)}>
                        {
                            session === 201 ?
                            <h1>Logado!</h1> :
                            <Input type="email" placeholder='Seu email' className="p-[10px] border-gray-50 outline-none bg-slate-50" name="email" {...register('email')}/>
                            //fazer a lógica pro texto virar um input
                        }
                        <Button type='submit' className="p-[10px] bg-slate-50 text-gray-400 font-bold">Submit</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}