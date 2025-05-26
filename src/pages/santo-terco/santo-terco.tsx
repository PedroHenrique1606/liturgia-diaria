import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"
import {
    Card,
    CardContent,
    CardHeader
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react"

interface Mystery {
    title: string
    contemplation: string
    verse: string
}

const allMysteries: Record<string, { title: string; mysteries: Mystery[] }> = {
    Gozosos: {
        title: "Mistérios Gozosos",
        mysteries: [
            {
                title: "1. A Anunciação",
                contemplation: "Contemplamos o Anjo Gabriel anunciando a Maria que ela seria mãe de Jesus.",
                verse: `6. No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galileia, chamada Nazaré,  27. a uma virgem desposada com um homem que se chamava José, da casa de Davi; e o nome da virgem era Maria. 28. Entrando, o anjo disse-lhe: “Ave, cheia de graça, o Senhor é contigo”. 29. Perturbou-se ela com essas palavras e pôs-se a pensar no que significaria semelhante saudação. 30. O anjo disse-lhe: “Não temas, Maria, pois encontraste graça diante de Deus. 31. Eis que conceberás e darás à luz um filho, e lhe porás o nome de Jesus. 32. Ele será grande e será chamado Filho do Altíssimo, e o Senhor Deus lhe dará o trono de seu pai Davi; 33. e reinará eternamente na casa de Jacó, e o seu reino não terá fim”. 34. Maria perguntou ao anjo: “Como se fará isso, pois não conheço homem?” 35. Respondeu-lhe o anjo: “O Espírito Santo descerá sobre ti, e a força do Altíssimo te envolverá com a sua sombra. Por isso, o ente santo que nascer de ti será chamado Filho de Deus. 36. Também Isabel, tua parenta, até ela concebeu um filho na sua velhice; e já está no sexto mês aquela que é tida por estéril, 37. porque a Deus nenhuma coisa é impossível”. 38. Então disse Maria: “Eis aqui a serva do Senhor. Faça-se em mim segundo a tua palavra”. E o anjo afastou-se dela. (Lucas 1, 26-38)`,
            },
            {
                title: "2. A Visitação",
                contemplation: "Maria visita sua prima Isabel, levando Jesus em seu ventre.",
                verse: "De onde vem a felicidade de que a Mãe do meu Senhor me visite? (Lucas 1,43)",
            },
            {
                title: "3. O Nascimento de Jesus",
                contemplation: "Em Belém, nasce o Salvador do mundo.",
                verse: "O verbo se fez carne e habitou entre nós. (João 1,14)",
            },
            {
                title: "4. A Apresentação",
                contemplation: "Maria e José apresentam Jesus no Templo.",
                verse: "Eis aqui este menino que está destinado para ser sinal de contradição. (Lucas 2,34)",
            },
            {
                title: "5. O Encontro no Templo",
                contemplation: "Maria e José encontram Jesus entre os doutores da lei.",
                verse: "Por que me procuráveis? Não sabeis que devo ocupar-me com as coisas do meu Pai?(Lucas 2,49)",
            }
        ]
    },
    Dolorosos: {
        title: "Mistérios Dolorosos",
        mysteries: [
            {
                title: "1. Agonia no Horto",
                contemplation: "Contemplamos Jesus em agonia no Horto das Oliveiras.",
                verse: "Jesus saiu e foi, como de costume, para o Monte das Oliveiras, e os discípulos o acompanharam. Quando chegou ao lugar, disse-lhes: 'Orai, para que não entreis em tentação'. Afastou-se deles cerca de um tiro de pedra e, pondo-se de joelhos, orava: 'Pai, se queres, afasta de mim este cálice! Todavia, não se faça a minha vontade, mas a tua'. Apareceu-lhe então um anjo do céu para confortá-lo. Entrou em agonia e orava ainda com mais instância, e seu suor tornou-se como gotas de sangue a escorrer pela terra. Levantando-se da oração, foi até os discípulos e os encontrou dormindo, de tristeza. E disse-lhes: 'Por que dormis? Levantai-vos e orai, para que não entreis em tentação'."
            },
            {
                title: "2. Flagelação",
                contemplation: "Jesus é cruelmente flagelado pelos soldados.",
                verse: "Pilatos então tomou Jesus e mandou flagelá-lo."
            },
            {
                title: "3. Coroação de Espinhos",
                contemplation: "Jesus é coroado com espinhos.",
                verse: "Os soldados levaram Jesus para dentro do pátio, isto é, ao pretório, e convocaram toda a coorte. Vestiram-no com um manto de púrpura, teceram uma coroa de espinhos e a puseram em sua cabeça. E começaram a saudá-lo: 'Salve, rei dos judeus!' Batiam-lhe na cabeça com uma cana, cuspiam nele e, dobrando os joelhos, prostravam-se diante dele. Depois de terem escarnecido dele, tiraram-lhe o manto de púrpura e vestiram-no com suas próprias roupas. Então o levaram para fora a fim de crucificá-lo."
            },
            {
                title: "4. Carregamento da Cruz",
                contemplation: "Jesus carrega a cruz até o Calvário.",
                verse: "Tomaram então Jesus, que carregando a sua cruz, saiu para o lugar chamado Calvário, em hebraico Gólgota."
            },
            {
                title: "5. Crucificação",
                contemplation: "Jesus é pregado na cruz e morre por nós.",
                verse: "Quando chegaram ao lugar chamado Calvário, ali o crucificaram, como também os malfeitores, um à direita e outro à esquerda. Jesus dizia: 'Pai, perdoa-lhes, porque não sabem o que fazem'. Depois, dividindo as suas vestes, lançaram sortes. O povo permanecia ali a contemplá-lo. Os chefes zombavam, dizendo: 'Salvou os outros, salve-se a si mesmo, se é o Cristo de Deus, o Escolhido!' Os soldados também o escarneciam, aproximando-se para lhe oferecer vinagre e dizendo: 'Se és o rei dos judeus, salva-te a ti mesmo!' Havia por cima dele um letreiro: 'Este é o Rei dos Judeus'. Um dos malfeitores crucificados blasfemava contra ele: 'Não és tu o Cristo? Salva-te a ti mesmo e a nós!' Mas o outro, tomando a palavra, repreendeu-o: 'Nem sequer temes a Deus, estando sob o mesmo suplício? Para nós é justo, porque recebemos o castigo que as nossas ações mereciam; mas este não fez mal algum'. E acrescentou: 'Jesus, lembra-te de mim, quando vieres com o teu reino'. Jesus respondeu-lhe: 'Em verdade te digo: hoje estarás comigo no Paraíso'. Era já quase a hora sexta quando as trevas cobriram toda a terra até a hora nona, porque o sol se eclipsara. O véu do templo rasgou-se ao meio. E Jesus, clamando com grande voz, disse: 'Pai, em tuas mãos entrego o meu espírito'. E, dizendo isso, expirou."
            }
        ]
    },
    Gloriosos: {
        title: "Mistérios Gloriosos",
        mysteries: [
            {
                title: "1. Ressurreição",
                contemplation: "Jesus ressuscita ao terceiro dia.",
                verse: "No primeiro dia da semana, de manhã bem cedo, as mulheres levaram ao sepulcro as especiarias aromáticas que haviam preparado. Encontraram removida a pedra do sepulcro, mas, quando entraram, não encontraram o corpo do Senhor Jesus. Ficaram perplexas, sem saber o que fazer. De repente, dois homens com roupas que brilhavam como a luz do sol colocaram-se ao lado delas. Amedrontadas, as mulheres baixaram o rosto para o chão, e os homens lhes disseram: “Por que vocês estão procurando entre os mortos aquele que vive? Ele não está aqui! Ressuscitou! Lembrem-se do que ele lhes disse, quando ainda estava com vocês na Galiléia: ‘É necessário que o Filho do homem seja entregue nas mãos de homens pecadores, seja crucificado e ressuscite no terceiro dia’”. Então se lembraram das palavras de Jesus. Quando voltaram do sepulcro, elas contaram todas estas coisas aos Onze e a todos os outros. As que contaram estas coisas aos apóstolos foram Maria Madalena, Joana e Maria, mãe de Tiago, e as outras que estavam com elas. Mas eles não acreditaram nas mulheres; as palavras delas lhes pareciam loucura. Pedro, todavia, levantou-se e correu ao sepulcro. Abaixando-se, viu as faixas de linho e mais nada; afastou-se, e voltou admirado com o que acontecera.",
            },
            {
                title: "2. Ascensão",
                contemplation: "Jesus sobe ao Céu diante dos Apóstolos.",
                verse: "Então os que estavam reunidos lhe perguntaram: “Senhor, é neste tempo que vais restaurar o reino a Israel?” Ele lhes respondeu: “Não lhes compete saber os tempos ou as datas que o Pai estabeleceu pela sua própria autoridade. Mas receberão poder quando o Espírito Santo descer sobre vocês, e serão minhas testemunhas em Jerusalém, em toda a Judéia e Samaria, e até os confins da terra”. Tendo dito isso, foi elevado às alturas enquanto eles olhavam, e uma nuvem o encobriu da vista deles. E eles ficaram com os olhos fixos no céu enquanto ele subia. De repente surgiram diante deles dois homens vestidos de branco, que lhes disseram: “Galileus, por que vocês estão olhando para o céu? Este mesmo Jesus, que dentre vocês foi elevado aos céus, voltará da mesma forma como o viram subir”.",
            },
            {
                title: "3. Pentecostes",
                contemplation: "O Espírito Santo desce sobre os Apóstolos.",
                verse: "Chegando o dia de Pentecoste, estavam todos reunidos num só lugar. De repente veio do céu um som, como de um vento muito forte, e encheu toda a casa na qual estavam assentados. E viram o que parecia línguas de fogo, que se separaram e pousaram sobre cada um deles. Todos ficaram cheios do Espírito Santo e começaram a falar noutras línguas, conforme o Espírito os capacitava. Havia em Jerusalém judeus, tementes a Deus, vindos de todas as nações do mundo. Ouvindo-se o som, ajuntou-se uma multidão que ficou perplexa, pois cada um os ouvia falar em sua própria língua. Atônitos e maravilhados, eles perguntavam: “Acaso não são galileus todos estes homens que estão falando? Então, como os ouvimos, cada um de nós, em nossa própria língua materna? Partos, medos e elamitas; habitantes da Mesopotâmia, Judéia e Capadócia, do Ponto e da província da Ásia, Frígia e Panfília, Egito e das partes da Líbia próximas a Cirene; visitantes vindos de Roma, tanto judeus como convertidos ao judaísmo; cretenses e árabes. Nós os ouvimos declarar as maravilhas de Deus em nossa própria língua!” Atônitos e perplexos, todos perguntavam uns aos outros: “Que significa isto?” Alguns, todavia, zombavam deles e diziam: “Eles beberam vinho demais”.",
            },
            {
                title: "4. Assunção de Maria",
                contemplation: "Maria é levada ao Céu, de corpo e alma.",
                verse: "Apareceu no céu um sinal extraordinário: uma mulher vestida do sol, com a lua debaixo dos seus pés e uma coroa de doze estrelas sobre a cabeça. (Apocalipse 12:1); tradição da Igreja",
            },
            {
                title: "5. Coroação de Maria",
                contemplation: "Maria é coroada Rainha do Céu e da Terra.",
                verse: "Apareceu no céu um sinal extraordinário: uma mulher vestida do sol, com a lua debaixo dos seus pés e uma coroa de doze estrelas sobre a cabeça.",
            }
        ]
    },
    Luz: {
        title: "Mistérios da Luz",
        mysteries: [
            {
                title: "1. Batismo no Jordão",
                contemplation: "Jesus é batizado por João Batista.",
                verse: "Então Jesus veio da Galiléia ao Jordão para ser batizado por João. João, porém, tentou impedi-lo, dizendo: “Eu preciso ser batizado por ti, e tu vens a mim?” Respondeu Jesus: “Deixe assim por enquanto; convém que assim façamos, para cumprir toda a justiça”. E João concordou. Assim que Jesus foi batizado, saiu da água. Naquele momento o céu se abriu, e ele viu o Espírito de Deus descendo como pomba e pousando sobre ele. Então uma voz dos céus disse: “Este é o meu Filho amado, em quem me agrado”.",
            },
            {
                title: "2. Bodas de Caná",
                contemplation: "Jesus transforma água em vinho.",
                verse: "No terceiro dia houve um casamento em Caná da Galiléia. A mãe de Jesus estava ali; Jesus e seus discípulos também haviam sido convidados para o casamento. Tendo acabado o vinho, a mãe de Jesus lhe disse: “Eles não têm mais vinho”. Respondeu Jesus: “Que temos nós em comum, mulher? A minha hora ainda não chegou”. Sua mãe disse aos serviçais: “Façam tudo o que ele lhes mandar”. Ali perto havia seis potes de pedra, do tipo usado pelos judeus para as purificações cerimoniais; em cada pote cabiam entre oitenta e cento e vinte litros. Disse Jesus aos serviçais: “Encham os potes com água”. E os encheram até a borda. Então lhes disse: “Agora, levem um pouco ao encarregado da festa”. Eles assim fizeram, e o encarregado da festa provou a água que fora transformada em vinho, sem saber de onde este viera, embora o soubessem os serviçais que haviam tirado a água. Então chamou o noivo e disse: “Todos servem primeiro o melhor vinho e, depois que os convidados já beberam bastante, o vinho inferior é servido; mas você guardou o melhor até agora”. Este sinal miraculoso, em Caná da Galiléia, foi o primeiro que Jesus realizou. Revelou assim a sua glória, e os seus discípulos creram nele.",
            },
            {
                title: "3. Proclamação do Reino",
                contemplation: "Jesus anuncia o Reino de Deus e convida à conversão.",
                verse: "Depois que João foi preso, Jesus foi para a Galiléia, proclamando as boas novas de Deus. “O tempo é chegado”, dizia ele. “O Reino de Deus está próximo. Arrependam-se e creiam nas boas novas!”",
            },
            {
                title: "4. Transfiguração",
                contemplation: "Jesus se transfigura no monte Tabor.",
                verse: "Seis dias depois, Jesus tomou consigo Pedro, Tiago e João, irmão de Tiago, e os levou, em particular, a um alto monte. Ali ele foi transfigurado diante deles. Sua face brilhou como o sol, e suas roupas se tornaram brancas como a luz. Naquele mesmo momento apareceram diante deles Moisés e Elias, conversando com Jesus. Então Pedro disse a Jesus: “Senhor, é bom estarmos aqui. Se quiseres, farei três tendas: uma para ti, uma para Moisés e outra para Elias”. Enquanto ele ainda estava falando, uma nuvem resplandecente os envolveu, e dela saiu uma voz, que dizia: “Este é o meu Filho amado em quem me agrado. Ouçam-no!” Ouvindo isso, os discípulos prostraram-se com o rosto em terra e ficaram aterrorizados. Mas Jesus se aproximou, tocou neles e disse: “Levantem-se! Não tenham medo!” E erguendo eles os olhos, não viram mais ninguém a não ser Jesus. Enquanto desciam do monte, Jesus lhes ordenou: “Não contem a ninguém o que vocês viram, até que o Filho do homem tenha sido ressuscitado dos mortos”.",
            },
            {
                title: "5. Instituição da Eucaristia",
                contemplation: "Jesus institui a Eucaristia na Última Ceia.",
                verse: "Quando chegou a hora, Jesus e os seus apóstolos reclinaram-se à mesa. E lhes disse: “Desejei ansiosamente comer esta Páscoa com vocês antes de sofrer. Pois eu lhes digo: Não comerei dela novamente até que se cumpra no Reino de Deus”. Recebendo um cálice, ele deu graças e disse: “Tomem isto e partilhem uns com os outros. Pois eu lhes digo que não beberei outra vez do fruto da videira até que venha o Reino de Deus”. Tomando o pão, deu graças, partiu-o e o deu aos discípulos, dizendo: “Isto é o meu corpo dado em favor de vocês; façam isto em memória de mim”. Da mesma forma, depois da ceia, tomou o cálice, dizendo: “Este cálice é a nova aliança no meu sangue, derramado em favor de vocês.",
            }
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
                    <Tabs value={currentMystery} onValueChange={(val) => setCurrentMystery(val as keyof typeof allMysteries)}>
                        <TabsList className="grid grid-cols-4">
                            <TabsTrigger value="Luz">Luz</TabsTrigger>
                            <TabsTrigger value="Gozosos">Gozosos</TabsTrigger>
                            <TabsTrigger value="Dolorosos">Dolorosos</TabsTrigger>
                            <TabsTrigger value="Gloriosos">Gloriosos</TabsTrigger>
                        </TabsList>
                        {Object.entries(allMysteries).map(([key, group]) => (
                            <TabsContent value={key} key={key}>
                                <Accordion type="single" collapsible>
                                    {group.mysteries.map((m, idx) => (
                                        <AccordionItem value={m.title} key={idx}>
                                            <AccordionTrigger>{m.title}</AccordionTrigger>
                                            <AccordionContent className="space-y-2">
                                                <div>
                                                    <p className="font-semibold">Contemplação:</p>
                                                    <p>{m.contemplation}</p>
                                                </div>
                                                <div>
                                                    <p className="font-semibold">Passagem:</p>
                                                    <p className="italic text-muted-foreground">{m.verse}</p>
                                                </div>
                                            </AccordionContent>
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
