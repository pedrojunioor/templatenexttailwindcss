import DrawerDemo from "@/components/drawer/drawer";
import SheetDemo from "@/components/drawer/sheet";



export default function Buttons() {
    return (
        <div className="flex flex-col gap-4 px-8 py-4">
            <header className="px-4">
                <h1 className="font-bold text-3xl" >Drawer</h1>
            </header>
            <main className="flex flex-col gap-4 px-4">
                <div className="w-full h-full flex justify-center items-center">
                    <SheetDemo
                        titleButton='Abrir a esquerda'
                        title="Titulo"
                        description="Descricao"
                        side='left'
                    >
                        <div>
                            Conteudo da esquerda
                        </div>

                    </SheetDemo>
                </div>

                <div className="w-full h-full flex justify-center items-center">
                    <SheetDemo
                        titleButton='Abrir a direita'
                        title="Titulo"
                        description="Descricao"
                        side='right'
                    >
                        <div>
                            Conteudo da direita
                        </div>

                    </SheetDemo>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <DrawerDemo
                     titleButton='Abrir abaixo'
                     title="Titulo"
                     description="Descricao"
                                   
                    >
                        <div>
                            Conteudo do drawer
                        </div>
                    </DrawerDemo>
                </div>
            </main >
        </div >
    )
}