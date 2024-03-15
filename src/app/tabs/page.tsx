import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function TabsPage() {

    return (
        <div className="w-full h-full flex flex-col">
            <header className="py-4">
                <h1 className="text-2xl font-bold">Tabs</h1>
            </header>
            <main className="w-full">
                <Tabs defaultValue="tab1" className="w-full">
                    <TabsList>
                        <TabsTrigger className="min-w-44" value="tab1">Tab1</TabsTrigger>
                        <TabsTrigger className="min-w-44"   value="tab2">Tab2</TabsTrigger>
                    </TabsList>
                    <TabsContent className="bg-secondary h-[80vh]" value="tab1">
                        <div className="w-full h-full flex justify-center items-center">
                            Conteudo da Tab1
                        </div>
                    </TabsContent>
                    <TabsContent className="bg-primary-foreground h-[80vh]" value="tab2">
                        <div className="w-full h-full flex justify-center items-center">
                            Conteudo da Tab2
                        </div>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}