import CicloLiturgico from '../../assets/liturgic-calendar.svg';

export default function CalendarioLiturgico() {
    return (
        <section className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">
                Ciclo Litúrgico
            </h1>

            <figure className="flex flex-col items-center">
                <img
                    src={CicloLiturgico}
                    alt="Calendário litúrgico com cores e períodos do ano cristão"
                    className="w-full h-auto rounded shadow-md"
                />

                <figcaption className="mt-2 text-sm text-gray-600 text-center">
                    Representação visual do Ciclo Litúrgico da Igreja Cristã,
                    destacando Advento, Natal, Quaresma, Páscoa e Tempo Comum.
                    <cite className="block mt-1 text-xs italic text-gray-500">
                        Reprodução: <a href="https://sitecatolico.com.br/" target='_blank'>https://sitecatolico.com.br/</a>
                    </cite>
                </figcaption>
            </figure>
        </section>
    );
}
