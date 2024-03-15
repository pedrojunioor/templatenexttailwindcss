import Card from "@/components/cards/CardSimple";

export default function Cards() {
    return (
        <div className="flex flex-col gap-4 px-8 py-4  w-full">
            <header className="px-4">
                <h1 className="font-bold text-3xl" >Cards</h1>
            </header>
            <main className="flex flex-col gap-4 px-4">
              
                <h1 className="text-2xl font-bold">{`Tamanhos: 'default' | 'lg' | 'md' | 'sm'`}</h1>
                <div className="flex flex-wrap gap-2">
                    <Card
                        title="Meu Card"
                        description="Descrição para o meu card"
                        size="default"
                        variant="default"

                    >
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed incidunt quae animi, nam atque voluptatem iste saepe corrupti ullam nulla iusto expedita. Sed ab veniam illo laborum, et fugit explicabo.</p>
                    </Card>
                    <Card
                        title="Meu Card"
                        description="Descrição para o meu card"
                        size="lg"
                        variant="default"

                    >
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed incidunt quae animi, nam atque voluptatem iste saepe corrupti ullam nulla iusto expedita. Sed ab veniam illo laborum, et fugit explicabo.</p>
                    </Card>
                    <Card
                        title="Meu Card"
                        description="Descrição para o meu card"
                        size="md"
                        variant="default"

                    >
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed incidunt quae animi, nam atque voluptatem iste saepe corrupti ullam nulla iusto expedita. Sed ab veniam illo laborum, et fugit explicabo.</p>
                    </Card>
                    <Card
                        title="Meu Card"
                        description="Descrição para o meu card"
                        size="sm"
                        variant="default"

                    >
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed incidunt quae animi, nam atque voluptatem iste saepe corrupti ullam nulla iusto expedita. Sed ab veniam illo laborum, et fugit explicabo.</p>
                    </Card>

                </div>
                <h1 className="text-2xl font-bold">{`Sem titulo de descrição`}</h1>
                <Card
                    // title="Meu Card"
                    // description="Descrição para o meu card"
                    size="default"
                    variant="default"

                >
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed incidunt quae animi, nam atque voluptatem iste saepe corrupti ullam nulla iusto expedita. Sed ab veniam illo laborum, et fugit explicabo.</p>
                </Card>
                <h1 className="text-2xl font-bold">{`Variações: 'default' | 'secondary' | 'black' | 'white' | 'green' | 'red'`}</h1>
                <div className="flex flex-wrap gap-2">
                    <Card
                        title="Meu Card"
                        description="Descrição para o meu card"
                        size="default"
                        variant="default"

                    >
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed incidunt quae animi, nam atque voluptatem iste saepe corrupti ullam nulla iusto expedita. Sed ab veniam illo laborum, et fugit explicabo.</p>
                    </Card>
                    <Card
                        title="Meu Card"
                        description="Descrição para o meu card"
                        size="default"
                        variant="secondary"

                    >
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed incidunt quae animi, nam atque voluptatem iste saepe corrupti ullam nulla iusto expedita. Sed ab veniam illo laborum, et fugit explicabo.</p>
                    </Card>
                    <Card
                        title="Meu Card"
                        description="Descrição para o meu card"
                        size="default"
                        variant="black"

                    >
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed incidunt quae animi, nam atque voluptatem iste saepe corrupti ullam nulla iusto expedita. Sed ab veniam illo laborum, et fugit explicabo.</p>
                    </Card>
                    <Card
                        title="Meu Card"
                        description="Descrição para o meu card"
                        size="default"
                        variant="white"

                    >
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed incidunt quae animi, nam atque voluptatem iste saepe corrupti ullam nulla iusto expedita. Sed ab veniam illo laborum, et fugit explicabo.</p>
                    </Card>
                    <Card
                        title="Meu Card"
                        description="Descrição para o meu card"
                        size="default"
                        variant="green"

                    >
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed incidunt quae animi, nam atque voluptatem iste saepe corrupti ullam nulla iusto expedita. Sed ab veniam illo laborum, et fugit explicabo.</p>
                    </Card>
                    <Card
                        title="Meu Card"
                        description="Descrição para o meu card"
                        size="default"
                        variant="red"

                    >
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed incidunt quae animi, nam atque voluptatem iste saepe corrupti ullam nulla iusto expedita. Sed ab veniam illo laborum, et fugit explicabo.</p>
                    </Card>
                </div>


            </main >
        </div >
    )
}