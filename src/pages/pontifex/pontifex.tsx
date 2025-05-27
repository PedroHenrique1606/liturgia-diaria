import backgroundImage from "@/assets/pope-leone-sacada.png";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function PontificePage() {
    return (
        <div className="min-h-screen bg-background text-foreground">

            <motion.section
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 flex h-full items-center justify-center">
                    <div className="text-center text-white px-6">
                        <h1 className="text-4xl font-bold tracking-wide">Sumo Pontífice</h1>
                        <p className="mt-4 text-lg max-w-xl mx-auto">Leonem XIV</p>
                    </div>
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="py-12 px-4 max-w-5xl mx-auto"
            >
                <h2 className="text-2xl font-semibold mb-6">Sobre o Papa Leão XIV</h2>
                <p className="text-muted-foreground leading-relaxed">
                    Papa Leão XIV, nascido Robert Francis Prevost em Chicago, foi eleito ao trono de São Pedro em 8 de maio de 2025, tornando-se o 267º pontífice da Igreja Católica e o primeiro papa norte-americano da história. Missionário e bispo no Peru por mais de duas décadas, destacou-se pelo serviço aos mais pobres e pela defesa incansável da dignidade humana.
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                    Inspirado por São Leão Magno e Leão XIII, escolheu seu nome pontifício como um compromisso com a defesa da fé e a promoção da justiça social em tempos de intensas transformações. Desde o início de seu pontificado, tem enfatizado a unidade da Igreja, o acolhimento aos marginalizados e o diálogo inter-religioso.
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                    Sob sua liderança, a Igreja reafirma seu papel missionário, com ênfase no Evangelho e na tradição apostólica, enquanto enfrenta os desafios éticos e espirituais da contemporaneidade, como a inteligência artificial e as novas dinâmicas sociais globais.
                </p>
            </motion.section>

            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="bg-muted py-12"
            >
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-2xl font-semibold mb-6">Frases e Reflexões</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <motion.div whileHover={{ scale: 1.02 }}>
                            <Card>
                                <CardContent className="p-6">
                                    <blockquote className="italic">
                                        "O mal não irá prevalecer. Estamos todos nas mãos de Deus. Portanto, sem medo, juntos, de mãos dadas, com Deus e uns com os outros, prossigamos."
                                    </blockquote>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        — Discurso inaugural, 2025
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }}>
                            <Card>
                                <CardContent className="p-6">
                                    <blockquote className="italic">
                                        Essa é a paz de Cristo ressuscitado. Uma paz desarmada, uma paz 'desarmante', humilde e perseverante, que provém de Deus.
                                    </blockquote>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        — Mensagem aos fiéis, 2025
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="py-16 bg-background text-center px-6"
            >
                <div className="space-y-5">
                    <h2 className="text-2xl font-semibold mb-4">Habemus Papam</h2>
                    <hr />
                    <p className="italic text-lg max-w-3xl mx-auto text-muted-foreground leading-relaxed tracking-wide font-['EB_Garamond']">
                        <span className="block text-xl text-foreground mb-2">Annuntio vobis gaudium magnum:</span>
                        <span className="block text-2xl text-foreground font-semibold">Habemus Papam!</span>
                        <span className="block mt-4">
                            Eminentissimum ac Reverendissimum Dominum, Dominum Robertum Franciscum,
                            Sanctae Romanae Ecclesiae Cardinalem Prevost, qui sibi nomen imposuit <strong>LEONEM XIV</strong>.
                        </span>
                    </p>
                </div>
            </motion.section>
        </div>
    )
}
