import { useEffect, useState } from "react"
import {
    Card,
    CardContent,
    CardHeader
} from "@/components/ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

// Tipagem para mistérios
interface Mystery {
    title: string
    contemplation: string
}

// Mistérios por tipo
const allMysteries: Record<string, { title: string; mysteries: Mystery[] }> = {
    Gozosos: {
        title: "Mistérios Gozosos",
        mysteries: [
            { title: "1. A Anunciação", contemplation: "Contemplamos o Anjo Gabriel anunciando a Maria que ela seria mãe de Jesus." },
            { title: "2. A Visitação", contemplation: "Maria visita sua prima Isabel, levando Jesus em seu ventre." },
            { title: "3. O Nascimento de Jesus", contemplation: "Em Belém, nasce o Salvador do mundo." },
            { title: "4. A Apresentação", contemplation: "Maria e José apresentam Jesus no Templo." },
            { title: "5. O Encontro no Templo", contemplation: "Maria e José encontram Jesus entre os doutores." }
        ]
    },
    Dolorosos: {
        title: "Mistérios Dolorosos",
        mysteries: [
            { title: "1. Agonia no Horto", contemplation: "Contemplamos Jesus em agonia no Horto das Oliveiras." },
            { title: "2. Flagelação", contemplation: "Jesus é cruelmente flagelado pelos soldados." },
            { title: "3. Coroação de Espinhos", contemplation: "Jesus é coroado com espinhos." },
            { title: "4. Carregamento da Cruz", contemplation: "Jesus carrega a cruz até o Calvário." },
            { title: "5. Crucificação", contemplation: "Jesus é pregado na cruz e morre por nós." }
        ]
    },
    Gloriosos: {
        title: "Mistérios Gloriosos",
        mysteries: [
            { title: "1. Ressurreição", contemplation: "Jesus ressuscita ao terceiro dia." },
            { title: "2. Ascensão", contemplation: "Jesus sobe ao Céu diante dos Apóstolos." },
            { title: "3. Pentecostes", contemplation: "O Espírito Santo desce sobre os Apóstolos." },
            { title: "4. Assunção", contemplation: "Maria é levada ao Céu, de corpo e alma." },
            { title: "5. Coroação de Maria", contemplation: "Maria é coroada Rainha do Céu e da Terra." }
        ]
    },
    Luz: {
        title: "Mistérios da Luz",
        mysteries: [
            { title: "1. Batismo no Jordão", contemplation: "Jesus é batizado por João Batista." },
            { title: "2. Bodas de Caná", contemplation: "Jesus transforma água em vinho." },
            { title: "3. Proclamação do Reino", contemplation: "Jesus anuncia o Reino de Deus e convida à conversão." },
            { title: "4. Transfiguração", contemplation: "Jesus se transfigura no monte Tabor." },
            { title: "5. Eucaristia", contemplation: "Jesus institui a Eucaristia na Última Ceia." }
        ]
    }
}

const dayToMysteryMap: Record<string, keyof typeof allMysteries> = {
    "segunda-feira": "Gozosos",
    "terça-feira": "Dolorosos",
    "quarta-feira": "Gloriosos",
    "quinta-feira": "Luz",
    "sexta-feira": "Dolorosos",
    "sábado": "Gozosos",
    "domingo": "Gloriosos"
}

export default function PrayRosaryPage() {
    const [day, setDay] = useState<string>("")
    const [currentMystery, setCurrentMystery] = useState<keyof typeof allMysteries>("Gozosos")

    useEffect(() => {
        const weekday = new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(new Date()).toLowerCase()
        const mapped = dayToMysteryMap[weekday as keyof typeof dayToMysteryMap] || "Gozosos"
        setDay(weekday)
        setCurrentMystery(mapped)
    }, [])

    return (
        <div className="max-w-4xl mx-auto p-4 space-y-6">
            <Card>
                <CardHeader>
                    <h1 className="text-2xl font-bold text-center">Santo Terço - {allMysteries[currentMystery].title}</h1>
                    <p className="text-sm text-muted-foreground text-center capitalize">Hoje é {day}</p>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue={currentMystery} onValueChange={(val) => setCurrentMystery(val as keyof typeof allMysteries)}>
                        <TabsList className="grid grid-cols-4">
                            <TabsTrigger value="Gozosos">Gozosos</TabsTrigger>
                            <TabsTrigger value="Dolorosos">Dolorosos</TabsTrigger>
                            <TabsTrigger value="Gloriosos">Gloriosos</TabsTrigger>
                            <TabsTrigger value="Luz">Luz</TabsTrigger>
                        </TabsList>
                        {Object.entries(allMysteries).map(([key, group]) => (
                            <TabsContent value={key} key={key}>
                                <Accordion type="single" collapsible>
                                    {group.mysteries.map((m, idx) => (
                                        <AccordionItem value={m.title} key={idx}>
                                            <AccordionTrigger>{m.title}</AccordionTrigger>
                                            <AccordionContent>{m.contemplation}</AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </TabsContent>
                        ))}
                    </Tabs>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <h2 className="text-xl font-semibold">Ordem do Terço</h2>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                    <p><strong>1. Sinal da Cruz ✝️</strong><br />
                        Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</p>

                    <p><strong>2. Creio em Deus Pai</strong><br />
                        Creio em Deus Pai todo-poderoso, Criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos; foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus; está sentado à direita de Deus Pai todo-poderoso, de onde há de vir a julgar os vivos e os mortos. <br />
                        Creio no Espírito Santo; na Santa Igreja Católica; na comunhão dos santos; na remissão dos pecados; na ressurreição da carne; na vida eterna. Amém.</p>

                    <p><strong>3. Pai Nosso</strong><br />
                        Pai nosso, que estais no céu, santificado seja o Vosso nome; venha a nós o Vosso reino; seja feita a Vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.</p>

                    <p><strong>4. Ave Maria</strong><br />
                        Ave Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. <br />
                        Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém.</p>

                    <p><strong>5. Glória ao Pai</strong><br />
                        Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.</p>

                    <Separator />

                    <p><strong>Para cada mistério:</strong></p>
                    <ul className="list-disc list-inside">
                        <li>Enunciar o mistério</li>
                        <li>1 Pai Nosso</li>
                        <li>10 Ave Marias</li>
                        <li>1 Glória ao Pai</li>
                        <li>Jaculatória: “Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno...”</li>
                    </ul>

                    <Separator />

                    <p><strong>Final:</strong> Salve Rainha</p>
                    <p>
                        Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! <br />
                        A vós bradamos os degredados filhos de Eva. <br />
                        A vós suspiramos, gemendo e chorando neste vale de lágrimas. <br />
                        Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei. <br />
                        E depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. <br />
                        Ó clemente, ó piedosa, ó doce sempre Virgem Maria. <br />
                        Rogai por nós, santa Mãe de Deus. <br />
                        Para que sejamos dignos das promessas de Cristo. Amém.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <h2 className="text-xl font-semibold">Jaculatórias</h2>
                </CardHeader>
                <CardContent className="space-y-1 text-sm">
                    <p>“Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu e socorrei principalmente aquelas que mais precisarem”</p>
                    <p>“Mãe de Deus, derramai sobre a humanidade inteira as graças eficazes de vossa chama de amor, agora e na hora de nossa morte. Amém.”</p>
                </CardContent>
            </Card>
        </div>
    )
}
