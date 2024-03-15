import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"

export default function Buttons() {
    return (
        <div className="flex flex-col gap-4 px-8 py-4">
            <header className="px-4">
                <h1 className="font-bold text-3xl" >Buttons</h1>
            </header>
            <main className="flex flex-col gap-4 px-4">
                <h1 className="font-bold">Tamanhos e Variações</h1>
             
                <div className="flex gap-4">
                    <div className="flex items-center justify-center w-20">
                        <h1>default</h1>
                    </div>
                    <Button size='lg' variant='default' >Botão</Button>
                    <Button size='default' variant='default' >Botão</Button>
                    <Button size='sm' variant='default' >Botão</Button>
                    <Button size='icon' variant='default' >B</Button>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center justify-center w-20">
                        <h1>secondary</h1>
                    </div>
                    <Button size='lg' variant='secondary' >Botão</Button>
                    <Button size='default' variant='secondary' >Botão</Button>
                    <Button size='sm' variant='secondary' >Botão</Button>
                    <Button size='icon' variant='secondary' >B</Button>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center justify-center w-20">
                        <h1>destructive</h1>
                    </div>
                    <Button size='lg' variant='destructive' >Botão</Button>
                    <Button size='default' variant='destructive' >Botão</Button>
                    <Button size='sm' variant='destructive' >Botão</Button>
                    <Button size='icon' variant='destructive' >B</Button>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center justify-center w-20">
                        <h1>outline</h1>
                    </div>
                    <Button size='lg' variant='outline' >Botão</Button>
                    <Button size='default' variant='outline' >Botão</Button>
                    <Button size='sm' variant='outline' >Botão</Button>
                    <Button size='icon' variant='outline' >B</Button>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center justify-center w-20">
                        <h1>ghost</h1>
                    </div>
                    <Button size='lg' variant='ghost' >Botão</Button>
                    <Button size='default' variant='ghost' >Botão</Button>
                    <Button size='sm' variant='ghost' >Botão</Button>
                    <Button size='icon' variant='ghost' >B</Button>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center justify-center w-20">
                        <h1>link</h1>
                    </div>
                    <Button size='lg' variant='link' >Botão</Button>
                    <Button size='default' variant='link' >Botão</Button>
                    <Button size='sm' variant='link' >Botão</Button>
                    <Button size='icon' variant='link' >B</Button>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold">Com Loading</h1>
                    <div className="flex gap-4">
                        <Button loading size='lg' variant='default' >Botão</Button>
                        <Button loading size='default' variant='default' >Botão</Button>
                        <Button loading size='sm' variant='default' >Botão</Button>
                        <Button loading size='icon' variant='default' ></Button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold">Com Icone</h1>
                    <div className="flex gap-4">
                        <Button Icon={EnvelopeOpenIcon} size='lg' variant='default' >Botão</Button>
                        <Button Icon={EnvelopeOpenIcon} size='default' variant='default' >Botão</Button>
                        <Button Icon={EnvelopeOpenIcon} size='sm' variant='default' >Botão</Button>
                        <Button Icon={EnvelopeOpenIcon} size='icon' variant='default' ></Button>
                    </div>
                </div>
            </main>
        </div>
    )
}