interface OracaoEucaristicaProps {
    titulo: string;
    subtitulo?: string;
    edicao?: string;
    texto: string[];
}

export function OracaoEucaristicaPage({
    titulo,
    subtitulo,
    edicao,
    texto,
}: OracaoEucaristicaProps) {
    return (
        <div className="max-w-3xl mx-auto py-10 px-4 space-y-6">
            <h1 className="text-3xl font-bold text-center font-serif text-primary">
                {titulo}
            </h1>

            {subtitulo && (
                <p className="text-sm text-muted-foreground text-center">
                    {subtitulo}
                </p>
            )}

            {edicao && (
                <p className="text-sm text-center text-gray-500 italic">
                    {edicao}
                </p>
            )}

            <div className="space-y-4 text-justify leading-relaxed">
                {texto.map((par, idx) => (
                    <div key={idx} className="space-y-2">
                        {par.split('\n').map((linha, subIdx) => {
                            const isVariação = linha.trim().toLowerCase().startsWith('variações:');

                            return (
                                <p
                                    key={subIdx}
                                    className={`whitespace-pre-wrap ${isVariação ? 'font-semibold text-red-500' : ''
                                        }`}
                                >
                                    {linha}
                                </p>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}
