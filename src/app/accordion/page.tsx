import { AccordionDemo } from "@/components/demo/accordion/accordion"

export default function AccordionPage() {
    return (
        <div className="flex flex-col gap-4 px-8 py-4">
            <header className="px-4">
                <h1 className="font-bold text-3xl" >Accordion</h1>
            </header>
            <main className="flex flex-col gap-4 px-4">
             <AccordionDemo/>
            </main>
        </div>
    )
}