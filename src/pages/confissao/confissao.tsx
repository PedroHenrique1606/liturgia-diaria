import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Instagram } from "lucide-react";

export default function ManualConfissao() {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <Tabs defaultValue="preparacao" className="space-y-4">
                <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="preparacao">Preparação</TabsTrigger>
                    <TabsTrigger value="ato">Ato de Contrição</TabsTrigger>
                    <TabsTrigger value="pos">Pós Confissão</TabsTrigger>
                </TabsList>

                <TabsContent value="preparacao">
                    <Card>
                        <CardContent className="p-6">
                            <div className="space-y-5">
                                <h2 className="text-2xl font-bold tracking-tight">Manual para uma boa confissão</h2>
                                <blockquote className="border-l-2 pl-4 italic text-muted-foreground">
                                    "Àqueles a quem perdoardes os pecados, lhes serão perdoados; àqueles a quem os retiverdes, lhes serão retidos" — João 20,23
                                </blockquote>
                            </div>
                            <ScrollArea className="h-1/2 mt-4 pr-2">
                                <div className="space-y-4">
                                    <ManualItem
                                        title="1. Amar a Deus sobre todas as coisas"
                                        content="Esse mandamento nos chama a colocar Deus como prioridade absoluta em nossa vida. Amar a Deus é confiar n’Ele, obedecer aos Seus mandamentos e buscar uma relação íntima e constante com o Senhor. Fiz minhas orações diárias? Tenho confiança em Deus? Frequentei outras religiões ou doutrinas? Reclamei muito? Pus Deus em primeiro lugar ou não? Rezei e fiquei com o Senhor na intimidade do coração? Troquei oração por futilidades? (streaming, jogos, redes sociais...)"
                                    />
                                    <ManualItem
                                        title="2. Não tomar Seu santo nome em vão"
                                        content="O nome de Deus é sagrado, e deve ser usado com respeito e reverência. Esse mandamento nos orienta a nunca pronunciar o nome de Deus de maneira leviana, em brincadeiras, mentiras ou maldições. Blasfemei? Roguei praga? Jurei falso? Cumpri promessas? Fiquei irado e usei o nome de Deus em vão?"
                                    />
                                    <ManualItem
                                        title="3. Guardar domingos e festas de guarda"
                                        content="O domingo é o dia do Senhor, reservado para o descanso e a adoração. É quando celebramos a Ressurreição de Cristo, participando da Santa Missa e cultivando nossa vida espiritual. Quem falta à Missa dominical sem motivo grave, trabalha desnecessariamente ou trata o domingo apenas como um dia de lazer comete pecado. Fui à missa aos domingos e dias de preceito? Busquei mais dinheiro do que a Deus? Vivi o domingo como dia de alegria com a família ou fui egoísta? Guardei os outros dias santos para Deus ou louvor?"
                                    />
                                    <ManualItem
                                        title="4. Honrar pai e mãe"
                                        content="Este mandamento nos convida ao respeito, amor, obediência e gratidão pelos nossos pais e por todas as autoridades legítimas (como professores, governantes e líderes espirituais). Desobedecer, tratar mal, desprezar ou ser ingrato com os pais e superiores constitui pecado. Também é pecado negligenciar os pais idosos ou doentes, rejeitar autoridades legítimas e manter um ambiente familiar sem diálogo ou respeito mútuo. Fui amoroso ou arrogante com os pais? Fui solícito quando me pediram algo?" //falta acrescir
                                    />
                                    <ManualItem
                                        title="5. Não matar"
                                        content="Deus é o autor da vida, e ninguém tem o direito de tirar ou desprezar a vida de outro. Esse mandamento vai além do assassinato físico: inclui o aborto, a eutanásia, o suicídio, bem como o ódio, a vingança, a violência verbal e física, o abuso e a indiferença diante do sofrimento do próximo. Atos como dirigir embriagado, usar ou traficar drogas, e até escandalizar os outros (levando-os ao pecado) também atentam contra a vida e dignidade humana. Desejei a morte de alguém? Não perdoei ou pedi perdão? Fui indiferente ao outro? Matei alguém dentro de mim?"
                                    />
                                    <ManualItem
                                        title="6. Não pecar contra a castidade e 9. Não desejar a mulher do próximo"
                                        content="SSão mandamentos que protegem a pureza da mente, do coração e do corpo. A castidade é vivida conforme o estado de vida: os solteiros são chamados à abstinência e os casados, à fidelidade. Pecar contra ela é envolver-se com pornografia, adultério, masturbação, relações fora do casamento, entre outros atos impuros. Já o desejo desordenado diz respeito aos pecados interiores, como flertes, fantasias e paixões por pessoas comprometidas. Esses pecados muitas vezes começam no coração antes de se tornarem ações. Vi vídeos ou filmes de teor sensual/erótico? Imaginei ou pensei algo com alguém? Desejei o outro como objeto de prazer? Falei palavras ruins/imorais? Olhei para onde não deveria? Vesti roupas indecentes? Inventivei a sensualidade?"
                                    />
                                    <ManualItem
                                        title="7. Não furtar e 10. Não cobiçar as coisas alheias"
                                        content="Não furtar e não cobiçar as coisas alheias nos ensinam a respeitar o que é do próximo, rejeitando tanto atos injustos como roubo, corrupção ou fraude, quanto desejos desordenados como inveja e ganância. Esses pecados ferem a justiça e revelam um coração insatisfeito, afastando-nos da confiança em Deus. Roubei ou desejei tomar o que não é meu? Tive sentimentos de inveja? Desejei as coisas ou a vida do outro?"
                                    />
                                    <ManualItem
                                        title="8. Não levantar falso testemunho"
                                        content="A verdade é um valor essencial e sagrado. Esse mandamento protege a reputação, a honra e a integridade do próximo. Mentir, caluniar, difamar, fofocar ou fazer julgamentos sem provas são pecados contra a verdade. Também ofendem a Deus a hipocrisia, a manipulação de fatos e a omissão de verdades que deveriam ser ditas para o bem do próximo. Falei mal de alguém? Julguei? Condenei alguém? Espalhei fofocas ou histórias mesmo que sejam verdadeiras?"
                                    />
                                    <ManualItem
                                        title="Amar o próximo como a ti mesmo"
                                        content="Amar o próximo é viver a caridade com gestos concretos de respeito, paciência, perdão e generosidade. Pecamos contra esse mandamento ao agir com indiferença, julgamento, rancor ou injustiça. Quem ama de verdade, revela o amor de Deus ao mundo."
                                    />
                                    <ManualItem
                                        title="Mandamentos da Igreja"
                                        content={`1. Participar da missa aos domingos e festas de guarda
                                            2. Confessar-se ao menos uma vez por ano
                                            3. Comungar ao menos pela Páscoa da ressurreição
                                            4. Jejuar e abster-se de carne nos dias indicados pela Igreja (Quarta-feira de Cinzas e Sexta-feira da Paixão requerem abstinência total de carne, juntamente com todas as sextas-feiras do ano, exceto solenidades.)
                                            5. Ajudar a Igreja em suas necessidades — por meio do dízimo, ofertas, doações, tempo ou serviço.

                                            ❗ O descumprimento voluntário desses mandamentos constitui pecado grave. Eles não são apenas orientações, mas obrigações fundamentais que sustentam nossa vida espiritual e demonstram fidelidade à Igreja de Cristo.`}
                                    />
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="ato">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <h2 className="text-xl font-bold tracking-tight">Ato de Contrição</h2>
                            <p className="text-sm text-primary">
                                Após a preparação, peça perdão sincero a Deus e faça o propósito de lutar contra o mal. Acredite firmemente na misericórdia do Senhor.
                            </p>
                            <p className="italic text-sm text-primary">
                                Reze: Pai Nosso, Ave Maria e o Ato de Contrição
                            </p>
                            <Separator />
                            <blockquote className="border-l-2 pl-4 italic text-primary text-base whitespace-pre-line">
                                {`Meus Deus, eu me arrependo de todo coração de vos Ter ofendido, por que sois tão bom e amável. Prometo, com a Vossa graça, esforçar-me para ser bom. Meu Jesus, misericórdia! Senhor meu, Jesus Cristo, Deus e homem verdadeiro, Criador e Redentor meu! Por serdes vós quem sois, sumamente bom e digno de ser amado sobre todas as coisas; e porque vos amo e estimo, pesa-me, Senhor, de todo o meu coração, por vos ter ofendido. Pesa-me também por ter perdido o céu e merecido o inferno. Mas proponho firmemente, ajudado com o auxílio de vossa divina graça, emendar-me e nunca mais vos tornar a ofender. E espero alcançar o perdão das minhas culpas, pela vossa infinita misericórdia. Amém.`}
                            </blockquote>

                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="pos">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <h2 className="text-xl font-bold tracking-tight">Depois da Confissão</h2>
                            <p className="text-sm text-primary">
                                Agora que você recebeu o perdão de Deus pelo sacramento da confissão, se possível, dirija-se ao sacrário.
                            </p>
                            <p className="text-sm text-primary">
                                Ali está Jesus, realmente presente na Eucaristia, esperando por você com amor. Aproveite esse momento de graça para fazer sua penitência com o coração aberto. Agradeça, peça forças e renove seu desejo de amá-Lo.
                            </p>
                            <blockquote className="border-l-2 pl-4 italic text-muted-foreground">
                                “Vinde a mim, vós todos que estais aflitos sob o fardo, e eu vos aliviarei.” — Mateus 11,28
                            </blockquote>

                            <div className="mt-8 pt-6 border-t border-muted space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                                    <a
                                        href="https://instagram.com/pedrohenrique.trc"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 rounded-md border bg-transparent hover:bg-white/5 transition"
                                    >
                                        <Instagram className="w-5 h-5 text-primary" />
                                        <div>
                                            <p className="font-semibold text-primary">Pedro Henrique</p>
                                            <p className="text-xs text-primary">Elaboração do Manual</p>
                                        </div>
                                    </a>

                                    <a
                                        href="https://instagram.com/diaconomaxsuweloliveira"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 rounded-md border bg-transparent hover:bg-white/5 transition"
                                    >
                                        <Instagram className="w-5 h-5 text-primary" />
                                        <div>
                                            <p className="font-semibold text-primary">Diácono Maxsuwel Oliveira</p>
                                            <p className="text-xs text-primary">Revisão Pastoral</p>
                                        </div>
                                    </a>
                                </div>

                                <p className="text-center text-xs italic text-gray-500">
                                    A serviço da evangelização 🙏
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

            </Tabs>
        </div>
    );
}

function ManualItem({ title, content }: { title: string; content: string }) {
    return (
        <div className="space-y-1">
            <h3 className="text-base font-semibold text-primary">{title}</h3>
            <p className="text-sm text-pretty whitespace-pre-line">{content}</p>
            <Separator className="my-2" />
        </div>
    );
}

