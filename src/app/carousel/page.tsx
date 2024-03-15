import { CarrouselSimple } from "@/components/carousel/carousel-simple";
import { CarouselSpacing } from "@/components/carousel/carousel-spacing";
import { CarouselVertical } from "@/components/carousel/carousel-vertical";


export default function Carousel() {
    return (
        <div className="flex flex-col gap-4 px-8 pt-4 pb-40  w-full">
            <header className="px-4">
                <h1 className="font-bold text-3xl" >Carrousel</h1>
            </header>
            <main className="flex flex-col items-start gap-16 px-4">
                <h1 className="text-2xl font-bold">Carrousel Simples</h1>
                <div className="flex w-full  items-center justify-center">
                    <CarrouselSimple />

                </div>
                <h1 className="text-2xl font-bold">Carrousel Espaçado</h1>
                <div className="flex w-full  items-center justify-center">
                    <CarouselSpacing />

                </div>
                <h1 className="text-2xl font-bold">Carrousel Vertical</h1>
                <div className="flex w-full  items-center justify-center">
                    <CarouselVertical />

                </div>
            </main >
        </div >
    )
}