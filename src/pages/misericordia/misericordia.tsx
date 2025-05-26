import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TercoDaMisericordia() {
    return (
        <div className="max-w-3xl mx-auto py-10 px-4 space-y-8 text-justify">
            <h1 className="text-3xl font-bold text-center text-primary font-serif">Terço da Misericórdia</h1>

            <p className="text-muted-foreground leading-relaxed">
                O Terço da Divina Misericórdia foi revelado por Jesus a Santa Faustina Kowalska em 1935. É uma oração poderosa que invoca a misericórdia de Deus para o mundo inteiro. Pode ser rezado com um terço comum e é especialmente recomendado às 15h, hora da morte de Jesus.
            </p>

            <Card>
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">Como rezar o Terço da Misericórdia:</h2>

                    <ol className="list-decimal pl-5 space-y-6 text-base leading-relaxed">
                        <li>
                            <p>Faça o <strong>Sinal da Cruz</strong>:</p>
                            <p className="italic mt-1">“Em nome do Pai, do Filho e do Espírito Santo. Amém.”</p>
                        </li>

                        <li>
                            <p>
                                Reze o <strong>Pai Nosso</strong> <span className="text-sm text-muted-foreground">(na primeira continha da Ave-Maria):</span>
                            </p>
                            <p className="italic mt-1">
                                Pai nosso que estais nos céus, santificado seja o Vosso nome; venha a nós o Vosso reino; seja feita a Vossa vontade, assim na terra como no céu.
                                O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido;
                                e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.
                            </p>
                        </li>

                        <li>
                            <p>
                                Reze a <strong>Ave Maria</strong> <span className="text-sm text-muted-foreground">(na segunda continha da Ave-Maria):</span>
                            </p>
                            <p className="italic mt-1">
                                Ave Maria, cheia de graça, o Senhor é convosco. Bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus.
                                Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém.
                            </p>
                        </li>

                        <li>
                            <p>
                                Reze o <strong>Credo</strong> <span className="text-sm text-muted-foreground">(na terceira continha da Ave-Maria):</span>
                            </p>
                            <p className="italic mt-1 whitespace-pre-line">
                                Creio em Deus Pai todo-poderoso, criador do céu e da terra; e em Jesus Cristo, seu único Filho, Nosso Senhor;
                                que foi concebido pelo poder do Espírito Santo; nasceu na Virgem Maria, padeceu sob Pôncio Pilatos,
                                foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus,
                                está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos;
                                creio no Espírito Santo, na santa Igreja Católica, na comunhão dos santos, na remissão dos pecados,
                                na ressurreição da carne, na vida eterna. Amém.
                            </p>
                        </li>


                        <Separator />

                        <li>
                            Nas contas grandes (do Pai Nosso), reze: <br />
                            <em>“Eterno Pai, eu vos ofereço o Corpo e o Sangue, a Alma e a Divindade de Vosso diletíssimo Filho, Nosso Senhor Jesus Cristo, em expiação dos nossos pecados e dos do mundo inteiro.”</em>
                        </li>

                        <li>
                            Nas contas pequenas (da Ave Maria), reze: <br />
                            <em>“Pela Sua dolorosa Paixão, tende misericórdia de nós e do mundo inteiro.”</em> <br />
                            <span className="text-sm text-muted-foreground">Repetir 10 vezes.</span>
                        </li>

                        <li>
                            Ao final de cada dezena, repita a oração da conta grande.
                        </li>

                        <li>
                            Ao final do terço (5 dezenas), reze 3 vezes: <br />
                            <em>“Deus Santo, Deus Forte, Deus Imortal, tende piedade de nós e do mundo inteiro.”</em>
                        </li>

                        <li>
                            Finalize com: <br />
                            <em>“Ó Sangue e Água que jorrastes do Coração de Jesus como fonte de misericórdia para nós, eu confio em Vós.”</em>
                        </li>
                    </ol>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">Quando rezar o Terço da Misericórdia?</h2>
                    <p>
                        Pode ser rezado a qualquer momento, mas especialmente às <strong>15h</strong>, conhecida como a <em>Hora da Misericórdia</em>, em memória da morte de Jesus na cruz.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">Promessas de Jesus</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>“Neste terço, concederei tudo o que me pedirem, se for compatível com a minha vontade.”</li>
                        <li>“A alma que rezar este terço será envolvida pela minha misericórdia durante sua vida e, especialmente, na hora da morte.”</li>
                    </ul>
                    <p className="text-sm text-muted-foreground">— Palavras de Jesus a Santa Faustina (Diário da Misericórdia)</p>
                </CardContent>
            </Card>

            <div className="text-center mt-10 text-sm text-muted-foreground italic">
                “Jesus, eu confio em Vós.”
            </div>
        </div>
    );
}
