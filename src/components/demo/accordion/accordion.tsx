import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>Primeiro</AccordionTrigger>
                <AccordionContent>
                    Conteudo do primeiro
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Segundo</AccordionTrigger>
                <AccordionContent>
                    Conteudo do Segundo
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Terceiro</AccordionTrigger>
                <AccordionContent>
                    Conteudo do terciero
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
