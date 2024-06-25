import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '/@/components/ui/card'

export default function Logado() {
    return(
        <div className="flex min-h-screen items-center bg-slate-50 justify-center">
            <Card className="w-[440px] h-[600px] flex flex-col gap-[200px]">
                <CardHeader className="flex items-center justify-center">
                    <CardTitle className="m-12 text4x1">Olá Pedro</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    <CardDescription>Está logado</CardDescription>
                </CardContent>
            </Card>
        </div>
    )
}