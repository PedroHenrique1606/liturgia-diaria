import type { Prayer } from "@/interfaces/praysTypes";

export const PrayersContent: Prayer[] = [
    {
        id: "lord_prayer",
        title: "Pai Nosso",
        content:
            "Pai nosso que estais nos céus, santificado seja o Vosso nome; venha a nós o Vosso reino; seja feita a Vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.",
        latin:
            "Pater noster, qui es in caelis, sanctificetur nomen tuum; adveniat regnum tuum; fiat voluntas tua, sicut in caelo et in terra. Panem nostrum quotidianum da nobis hodie; et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris; et ne nos inducas in tentationem; sed libera nos a malo. Amen.",
    },
    {
        id: "hail_mary",
        title: "Ave Maria",
        content:
            "Ave Maria, cheia de graça, o Senhor é convosco. Bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém.",
        latin:
            "Ave Maria, gratia plena, Dominus tecum. Benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen.",
    },
    {
        id: "glory_be",
        title: "Glória ao Pai",
        content:
            "Glória ao Pai, ao Filho e ao Espírito Santo, como era no princípio, agora e sempre. Amém.",
        latin:
            "Gloria Patri, et Filio, et Spiritui Sancto. Sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen.",
    },
    {
        id: "creed",
        title: "Creio em Deus Pai (Credo)",
        content:
            "Creio em Deus Pai todo-poderoso, criador do céu e da terra; e em Jesus Cristo, seu único Filho, Nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu na Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos; creio no Espírito Santo, na santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém",
        latin: 'Credo in Deum, Patrem omnipoténtem, Creatórem caeli et terrae. Et in Jesum Christum, Filium eius únicum, Dóminùm nostrum: qui concéptus est de Spíritu Sancto, natus ex María Virgine, passus sub Pontio Piláto, crucifíxus, mórtuus, et sepúltus: descéndit ad ínferos; tértia die resurréxit a mórtuis; ascéndit ad caelos; sedet ad déxteram Dei Patris omnipoténtis: inde ventúrus est judicare vivos et mórtuos. Credo in Spiritum Sanctum, sanctam Ecclésiam Cathólicam, Sanctórum communionem, remissiónem peccatórum carnis resurrectiónem, vitam aetérnam. Amen'
    },
    {
        id: "creed_nicene",
        title: 'Credo Niceno-Constantinopolitano',
        content: `Creio em um só Deus, Pai Todo-Poderoso, criador do céu e da terra, / de todas as coisas visíveis e invisíveis. / Creio em um só Senhor, Jesus Cristo, Filho Unigênito de Deus, / nascido do Pai antes de todos os séculos: Deus de Deus, luz da luz, / Deus verdadeiro de Deus verdadeiro, / gerado, não criado, consubstancial ao Pai. / Por ele todas as coisas foram feitas. / E por nós, homens, e para nossa salvação, desceu dos céus:
(aqui todos se ajoelhem)
e se encarnou pelo Espírito Santo, / no seio da Virgem Maria, e se fez homem.
(aqui todos se levantem)
Também por nós foi crucificado sob Pôncio Pilatos; / padeceu e foi sepultado. / Ressuscitou ao terceiro dia, / conforme as Escrituras, / e subiu aos céus, / onde está sentado à direita do Pai. / E de novo há de vir, / em sua glória, / para julgar os vivos e os mortos; / e o seu reino não terá fim. / Creio no Espírito Santo, / Senhor que dá a vida, / e procede do Pai e do Filho; / e com o Pai e o Filho é adorado e glorificado: / ele que falou pelos profetas. / Creio na Igreja, una, santa, católica e apostólica. / Professo um só batismo para remissão dos pecados. / E espero a ressurreição dos mortos / e a vida do mundo que há de vir. - Amém.`,
        latin: `Credo in unum Deum, Patrem omnipoténtem, Factórem caeli et terrae, Visibílium ómnium et invisibílium. Et in unum Dóminum Iesum Christum, Fílium Dei Unigénitum, Et ex Patre natum ante ómnia saecula. Deum de Deo, lumen de lúmine, Deum verum de Deo vero, Génitum, non factum, consubstantiálem Patri: Per quem ómnia facta sunt. Qui propter nos hómines et propter nostram salútem Descéndit de caelis. Et incarnátus est de Spíritu Sancto Ex María Vírgine, et homo factus est. Crucifíxus étiam pro nobis sub Póntio Piláto; Passus, et sepúltus est, Et resurréxit tértia die, secúndum Scriptúras, Et ascéndit in caelum, sedet ad déxteram Patris. Et íterum ventúrus est cum glória, Iudicáre vivos et mórtuos, Cuius regni non erit finis. Et in Spíritum Sanctum, Dóminum et vivificántem: Qui ex Patre Filióque procédit. Qui cum Patre et Fílio simul adorátur et conglorificátur: Qui locútus est per prophétas. Et unam, sanctam, cathólicam et apostólicam Ecclésiam. Confíteor unum baptísma in remissiónem peccatorum. Et expecto resurrectionem mortuorum, Et vitam ventúri saeculi. Amen`
    },
    {
        id: "act_contrition",
        title: "Ato de Contrição",
        content: "Meu Deus, porque sois infinitamente bom e vos amo de todo o meu coração, pesa-me de vos ter ofendido. Prometo, com a vossa graça, emendar-me e nunca mais pecar. Amém.",
        latin: "Deus meus, ex toto corde poenitet me omnium meorum peccatorum, eaque detestor, quia peccando non solum poenas a te iuste statutas promeritus sum, sed praesertim quia offendi te, summum bonum ac dignum qui super omnia diligaris. Ideo firmiter propono, adiuvante gratia tua, de cetero me non peccaturum peccandique occasiones proximas fugiturum. Amen."
    },
    {
        id: "angel_guardian",
        title: "Santo Anjo do Senhor",
        content: "Santo Anjo do Senhor, meu zeloso guardador, se a ti me confiou a piedade divina, sempre me rege, me guarda, me governa, me ilumina. Amém.",
        latin: "Angele Dei, qui custos es mei, me tibi commissum pietate superna; hodie illumina, custodi, rege et guberna. Amen."
    },
    {
        id: 'vinde_espiritus',
        title: "Oração do Espírito Santo",
        content: `Vinde Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do Vosso Amor. Enviai o Vosso Espírito e tudo será criado e renovareis a face da terra. Oremos: Ó Deus que instruíste os corações dos vossos fiéis, com a luz do Espírito Santo, fazei que apreciemos retamente todas as coisas segundo o mesmo Espírito e gozemos da sua consolação.Por Cristo Senhor Nosso. Amém`,
        latin: `Veni Sancte Spíritus reple tuórum corda fidélium, et tu amóris in eis ignem accénde. Emítte Spíritum tuum et creabúntur. Et renovábis faciem terrae. Oremus. Deus, qui corda fidélium Sancti Spíritus illustratióne docuisti da nobis in eódem Spíritu recta sápere, et de eius semper consolatióne gaudére. Per Christum Dóminum nostrum.Amen.`
    },
    {
        id: "salve_regina",
        title: "Salve Rainha",
        content: "Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei. E depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém.",
        latin: "Salve Regina, mater misericordiæ, vita, dulcedo, et spes nostra, salve. Ad te clamamus, exsules, filii Hevæ. Ad te suspiramus, gementes et flentes in hac lacrimarum valle. Eia ergo, Advocata nostra, illos tuos misericordes oculos ad nos converte. Et Jesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende. O clemens, O pia, O dulcis Virgo Maria. Ora pro nobis, sancta Dei Genitrix. Ut digni efficiamur promissionibus Christi. Amen."
    },
    {
        id: "veni_creator",
        title: "Vinde, Espírito Criador (Veni Creator Spiritus)",
        content: "Vinde, Espírito Criador, visitai as almas dos vossos fiéis, e enchei com a graça do alto os corações que vós criastes. Vós sois o Consolador prometido, dom do Altíssimo, fonte viva, fogo, caridade e unção espiritual. Sois o dedo da mão de Deus, o prometido do Pai, que inspirais nossas palavras. Acendei a luz nos sentidos, infundi o amor nos corações e amparai sempre com a vossa força a nossa carne fraca. Afastai para longe o inimigo, dai prontidão à paz, e assim, com vossa orientação, evitaremos todo o mal. Fazei que conheçamos o Pai e que conheçamos também o Filho; e que em vós, Espírito de ambos, creiamos para sempre. Glória seja ao Pai, ao Filho ressuscitado dos mortos, e ao Espírito Consolador, agora e pelos séculos dos séculos. Amém.",
        latin: "Veni, Creator Spiritus, mentes tuorum visita, imple superna gratia quae tu creasti pectora. Qui Paraclitus diceris, donum Dei altissimi, fons vivus, ignis, caritas, et spiritalis unctio. Tu septiformis munere, digitus paternae dexterae, tu rite promissum Patris, sermone ditans guttura. Accende lumen sensibus: infunde amorem cordibus: infirma nostri corporis virtute firmans perpeti. Hostem repellas longius, pacemque dones protinus: ductore sic te praevio vitemus omne noxium. Per te sciamus da Patrem, noscamus atque Filium, te utriusque Spiritum credamus omni tempore. Amen."
    },
    {
        id: "litany_all_saints",
        title: "Ladainha de Todos os Santos",
        content: `Senhor, tende piedade de nós.
Cristo, tende piedade de nós.
Senhor, tende piedade de nós.
Jesus Cristo, ouvi-nos.
Jesus Cristo, atendei-nos.
Deus Pai do Céu, tende piedade de nós.
Deus Filho, Redentor do mundo, tende piedade de nós.
Deus Espírito Santo, tende piedade de nós.
Santíssima Trindade, que sois um só Deus, tende piedade de nós.
Santa Maria, rogai por nós.
Santa Mãe de Deus, rogai por nós.
Santa Virgem das Virgens, rogai por nós.
São Miguel, rogai por nós.
São Gabriel, rogai por nós.
São Rafael, rogai por nós.
Todos os Santos Anjos e Arcanjos, rogai por nós.
Todas as santas ordens de Espíritos bem-aventurados, rogai por nós.
São João Batista, rogai por nós.
São José, rogai por nós.
Todos os santos Patriarcas e Profetas, rogai por nós.
São Pedro, rogai por nós.
São Paulo, rogai por nós.
Santo André, rogai por nós.
São João, rogai por nós.
Todos os santos Apóstolos e Evangelistas, rogai por nós.
Todos os santos Discípulos do Senhor, rogai por nós.
Santo Estêvão, rogai por nós.
São Lourenço, rogai por nós.
São Vicente, rogai por nós.
Todos os santos Mártires, rogai por nós.
São Silvestre, rogai por nós.
São Gregório, rogai por nós.
Santo Agostinho, rogai por nós.
Todos os santos Pontífices e Confessores, rogai por nós.
Todos os santos Doutores, rogai por nós.
Santo Antão, rogai por nós.
São Bento, rogai por nós.
São Domingos, rogai por nós.
São Francisco, rogai por nós.
Todos os santos Sacerdotes e Levitas, rogai por nós.
Todos os santos Monges e Eremitas, rogai por nós.
Santa Maria Madalena, rogai por nós.
Santa Inês, rogai por nós.
Santa Cecília, rogai por nós.
Santa Águeda, rogai por nós.
Santa Anastácia, rogai por nós.
Todas as santas Virgens e Viúvas, rogai por nós.
Todos os Santos e Santas de Deus, intercedei por nós.
Sede-nos propício, perdoai-nos, Senhor.
Sede-nos propício, ouvi-nos, Senhor.
De todo mal, livrai-nos, Senhor.
De todo pecado, livrai-nos, Senhor.
Da morte eterna, livrai-nos, Senhor.
Pelo mistério da vossa santa Encarnação, livrai-nos, Senhor.
Pela vossa Vinda, livrai-nos, Senhor.
Pelo vosso Nascimento, livrai-nos, Senhor.
Pelo vosso Batismo e santo Jejum, livrai-nos, Senhor.
Pela vossa Cruz e Paixão, livrai-nos, Senhor.
Pela vossa Morte e Sepultura, livrai-nos, Senhor.
Pela vossa santa Ressurreição, livrai-nos, Senhor.
Pela vossa admirável Ascensão, livrai-nos, Senhor.
Pela vinda do Espírito Santo Consolador, livrai-nos, Senhor.
No dia do Juízo, livrai-nos, Senhor.
Pecadores que somos, nós vos rogamos: ouvi-nos.
Para que nos perdoeis, nós vos rogamos: ouvi-nos.
Para que vos digneis governar e conservar a vossa santa Igreja, nós vos rogamos: ouvi-nos.
Para que vos digneis conservar na santa religião o Sumo Pontífice e todas as ordens a hierarquia eclesiástica, nós vos rogamos: ouvi-nos.
Para que vos digneis humilhar os inimigos da santa Igreja, nós vos rogamos: ouvi-nos.
Para que vos digneis conceder a paz e a verdadeira concórdia aos reis e príncipes cristãos, nós vos rogamos: ouvi-nos.
Para que vos digneis confortar-nos e conservar-nos em vosso santo serviço, nós vos rogamos: ouvi-nos.
Para que vos digneis retribuir, com os bens sempiternos, a todos os nossos benfeitores, nós vos rogamos: ouvi-nos.
Para que vos digneis dar e conservar os frutos da terra, nós vos rogamos: ouvi-nos.
Para que vos digneis conceder o descanso eterno a todos os fiéis defuntos, nós vos rogamos: ouvi-nos.
Para que vos digneis atender-nos, nós vos rogamos: ouvi-nos.
Cordeiro de Deus, que tirais os pecados do mundo, perdoai-nos, Senhor.
Cordeiro de Deus, que tirais os pecados do mundo, ouvi-nos, Senhor.
Cordeiro de Deus, que tirais os pecados do mundo, tende piedade de nós.
Jesus Cristo, ouvi-nos.
Jesus Cristo, atendei-nos.`,
        latin: `Kyrie, eleison
Christe, eleison
Kyrie, eleison
Pater de caelis, Deus, miserere nobis.
Fili, Redemptor mundi, Deus, miserere nobis.
Spiritus Sancte, Deus, miserere nobis.
Sancta Trinitas, unus Deus, miserere nobis.
Sancta Maria, ora pro nobis.
Sancta Dei Genetrix, ora pro nobis.
Sancta Virgo virginum, ora pro nobis.
Sancte Michael Gabriel et Raphael, orate pro nobis.
Omnes sancti Angeli, orate pro nobis.
Sancte Abraham, ora pro nobis.
Sancte Ioannes Baptista, ora pro nobis.
Sancte Ioseph, ora pro nobis.
Omnes sancti Patriarchae et Prophetae, orate pro nobis.
Sancte Petre et Paule, orate pro nobis.
Sancte Andrea, ora pro nobis.
Sancte Ioannes et Iacobe, orate pro nobis.
Sancte Matthaee, ora pro nobis.
Omnes sancti Apostoli, orate pro nobis.
Sancte Marce, ora pro nobis.
Sancta Maria Magdalena, ora pro nobis.
Omnes sancti discipuli Domini, orate pro nobis.
Sancte Stephane, ora pro nobis.
Sancte Ignati, ora pro nobis.
Sancte Polycarpe, ora pro nobis.
Sancte Iustine, ora pro nobis.
Sancte Laurenti, ora pro nobis.
Sancta Agnes, ora pro nobis.
Omnes sancti martyres, orate pro nobis.
Sancti Leo et Gregori, orate pro nobis.
Sancte Ambrosi, ora pro nobis.
Sancte Augustine, ora pro nobis.
Sancti Basili et Gregori, orate pro nobis.
Sancte Benedicte, ora pro nobis.
Sancte Ioannes Maria, ora pro nobis.
Sancta Teresia, ora pro nobis.
Sancta Elisabeth, ora pro nobis.
Omnes Sancti et Sanctae Dei, orate pro nobis.
Propitius esto, libera nos Domine.
Ab omni malo, libera nos Domine.
A morte perpetua, libera nos Domine.
Per Incarnationis tuae, libera nos Domine.
Per sanctam resurrectionem tuam, libera nos Domine.
Per refusionem Spiritus Sancti, libera nos Domine.
Christe Fili Dei vivi, miserere nobis.
Qui in hunc mundum venisti, miserere nobis.
Qui in mortem propter nos accepisti, miserere nobis.
Qui a mortuis resurrexisti, miserere nobis.
Qui Spiritum Sanctum in Apostolos misisti, miserere nobis.
Qui venturus es iudicare vivos et mortuos, miserere nobis.
Ut nobis parcas, te rogamus audi nos.
Ut ecclesiam tuam sanctam regere et conservare digneris, te rogamus audi nos.
Ut omnes homines ad Evangelii lumen perducere digneris, te rogamus audi nos.
Christe audi nos, Christe audi nos.
Christe exaudi nos, Christe exaudi nos.
Agnus Dei, qui tollis peccata mundi, miserere nobis.
Agnus Dei, qui tollis peccata mundi, miserere nobis.
Agnus Dei, qui tollis peccata mundi, miserere nobis.
Christe audi nos, Christe audi nos.
Christe exaudi nos, Christe exaudi nos.

`,
    },
];