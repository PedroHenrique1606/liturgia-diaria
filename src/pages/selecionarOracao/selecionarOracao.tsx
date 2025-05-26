import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const oracoes = [
    { id: "eucaristica-i", title: "Oração Eucarística I (Cânon Romano)" },
];

export default function OracoesEucaristicas() {
    const navigate = useNavigate();

    return (
        <div className="max-w-3xl mx-auto py-10 px-4 space-y-6">
            <h1 className="text-3xl font-bold text-center font-serif text-primary">
                Orações Eucarísticas
            </h1>

            <p className="text-muted-foreground text-center">
                Selecione uma das orações eucarísticas para visualizar seu texto completo.
            </p>

            <div className="grid gap-4">
                {oracoes.map((oracao) => (
                    <Card
                        key={oracao.id}
                        className="cursor-pointer hover:shadow-lg transition"
                        onClick={() => navigate(`/oracao-eucaristica/${oracao.id}`)}
                    >
                        <CardContent className="p-4">
                            <h2 className="text-lg font-semibold text-primary">{oracao.title}</h2>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
