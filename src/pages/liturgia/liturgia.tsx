import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { CorLiturgica, LiturgiaDiaResponse } from "@/interfaces/liturgiaTypes";
import { cn } from "@/lib/utils";
import { getLiturgicDay } from "@/services/getLiturgicApi";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function Liturgia() {
  const [fontSize, setFontSize] = useState("text-base")
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [liturgiaData, setLiturgiaData] = useState<LiturgiaDiaResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isVigiliaPascal = liturgiaData?.liturgia === 'Sábado Santo - Vigília Pascal'

  const corClasses: Record<CorLiturgica, string> = {
    Verde: 'bg-green-100 text-green-800',
    Vermelho: 'bg-red-100 text-red-800',
    Roxo: 'bg-purple-100 text-purple-800',
    Rosa: 'bg-pink-100 text-pink-800',
    Branco: 'bg-gray-100 text-gray-800',
  };

  const corLiturgica = liturgiaData?.cor ?? 'Branco';

  function handleShareClick() {
    const link = window.location.href
    navigator.clipboard.writeText(link)
    setCopied(true)
  }

  function increaseFont() {
    setFontSize(prev => prev === "text-base" ? "text-lg" : "text-xl")
  }

  function decreaseFont() {
    setFontSize(prev => prev === "text-xl" ? "text-lg" : "text-base")
  }

  useEffect(() => {
    if (copied) {
      toast.success("Link copiado!");
      setCopied(false);
    }
  }, [copied]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const diaParam = searchParams.get("dia");
    const mesParam = searchParams.get("mes");
    const anoParam = searchParams.get("ano");

    const dia = diaParam || String(new Date().getDate()).padStart(2, "0");
    const mes = mesParam || String(new Date().getMonth() + 1).padStart(2, "0");
    const ano = anoParam || String(new Date().getFullYear());

    const dateFromParams = new Date(Number(ano), Number(mes) - 1, Number(dia));

    if (!isNaN(dateFromParams.getTime())) {
      setSelectedDate(dateFromParams);
    }

    const fetchData = async () => {
      setIsLoading(true);
      const data = await getLiturgicDay(dia, mes, ano);
      if (!data) {
        toast.error("A liturgia desta data ainda não está disponível nesse site");
      }
      setLiturgiaData(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const dia = String(selectedDate.getDate()).padStart(2, "0");
      const mes = String(selectedDate.getMonth() + 1).padStart(2, "0");
      const ano = String(selectedDate.getFullYear());

      const newUrl = `${window.location.pathname}?dia=${dia}&mes=${mes}&ano=${ano}`;
      window.history.pushState({}, "", newUrl);

      const fetchData = async () => {
        const data = await getLiturgicDay(dia, mes, ano);
        if (!data) {
          toast.error("A liturgia desta data ainda não está disponível nesse site");
        }
        setLiturgiaData(data);
      };

      fetchData();
    }
  }, [selectedDate]);

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-5">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
        <p className="font-semibold text-lg sm:text-xl md:text-2xl">
          {liturgiaData?.liturgia ?? "Liturgia não disponível"}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-2">
          <div className="flex gap-2">
            <button
              onClick={decreaseFont}
              className="text-sm px-2 py-1 border rounded cursor-pointer"
            >
              A-
            </button>
            <button
              onClick={increaseFont}
              className="text-sm px-2 py-1 border rounded cursor-pointer"
            >
              A+
            </button>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button
                  onClick={() => {
                    handleShareClick();
                    setOpen(true);
                  }}
                  className="text-sm px-2 py-1 border rounded cursor-pointer"
                  aria-label="Compartilhar"
                >
                  <Share2 size={16} />
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Link copiado!</DialogTitle>
                  <DialogDescription>
                    O link da leitura foi copiado para sua área de transferência. Agora você pode colar e compartilhar com quem quiser.
                  </DialogDescription>
                </DialogHeader>
                <input
                  readOnly
                  value={window.location.href}
                  className="w-full mt-4 p-2 border rounded text-sm"
                  onClick={(e) => (e.target as HTMLInputElement).select()}
                />
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP", { locale: ptBR }) : <span>Escolher data</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  locale={ptBR}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      <div>
        <span
          className={`text-sm font-medium px-3 py-1 rounded-full w-fit ${corClasses[corLiturgica]}`}
        >
          Cor Litúrgica: {corLiturgica}
        </span>
      </div>
      {isLoading ? (
        <div className="space-y-4 animate-pulse">
          <div className="h-6 bg-gray-200/50 rounded w-1/2" />
          <div className="h-4 bg-gray-200/50 rounded w-full" />
          <div className="h-4 bg-gray-200/50 rounded w-11/12" />
          <div className="h-4 bg-gray-200/50 rounded w-10/12" />
          <div className="h-4 bg-gray-200/50 rounded w-9/12" />
          <div className="h-6 bg-gray-300/50 rounded w-2/3 mt-6" />
          <div className="h-4 bg-gray-200/50 rounded w-full" />
          <div className="h-4 bg-gray-200/50 rounded w-11/12" />
        </div>
      ) : (
        isVigiliaPascal ? (
          <Tabs defaultValue="primeira" className="w-full">
            <div className="flex justify-between items-center mb-4 text-2xl md:text-lg">
              <TabsList className="grid grid-cols-2 gap-1 w-full">
                <TabsTrigger className="text-xs md:text-sm" value="primeira">Liturgia da Palavra</TabsTrigger>
                <TabsTrigger className="text-xs md:text-sm" value="evangelho">Evangelho</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="primeira" className={`${fontSize} space-y-8`}>
              {liturgiaData?.leituras.primeiraLeitura?.map((leitura, index) => (
                <div key={`leitura-${index}`}>
                  <h2 className="text-lg font-semibold mb-2">{index + 1}ª Leitura {leitura.referencia}</h2>
                  <p className="italic mb-2">{leitura.titulo}</p>
                  <p className="leading-relaxed whitespace-pre-line">{leitura.texto}</p>

                  {liturgiaData.oracoes.extras?.[index] && (
                    <div className="mt-4">
                      <p className="italic font-semibold">{liturgiaData.oracoes.extras[index].titulo}</p>
                      <p className="leading-relaxed whitespace-pre-line">{liturgiaData.oracoes.extras[index].texto}</p>
                    </div>
                  )}

                  {liturgiaData.leituras.salmo?.[index] && (
                    <div className="mt-6 space-y-3">
                      <h2 className="text-lg font-semibold mb-2">{liturgiaData.leituras.salmo[index].referencia}</h2>
                      <p className="mb-2 font-semibold">— {liturgiaData.leituras.salmo[index].refrao}</p>
                      {liturgiaData.leituras.salmo[index].texto.split('\n').map((linha, i) => (
                        <p key={i} className="leading-relaxed whitespace-pre-line">{linha.trim()}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Epístola */}
              {liturgiaData?.leituras.segundaLeitura?.map((leitura, index) => (
                <div key={`epistola-${index}`}>
                  <h2 className="text-lg font-semibold mt-8 mb-2">Epístola {leitura.referencia}</h2>
                  <p className="italic mb-2">{leitura.titulo}</p>
                  <p className="leading-relaxed whitespace-pre-line">{leitura.texto}</p>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="evangelho">
              {liturgiaData?.leituras.evangelho?.map((evangelho, index) => {
                const isPaixao = evangelho.titulo.startsWith("Paixão de nosso Senhor Jesus Cristo");
                return (
                  <div key={index}>
                    <h2 className="text-lg font-semibold mb-2">Evangelho {evangelho.referencia}</h2>
                    <div className={`${fontSize}`}>
                      <p className="italic mb-2">{evangelho.titulo}</p>
                      {!isPaixao && <p>— Glória a vós, Senhor.</p>}
                      <p className="leading-relaxed mt-2 whitespace-pre-line">{evangelho.texto}</p>
                      <p className="mt-4 font-semibold">— Palavra da Salvação.</p>
                      <p>— Glória a vós, Senhor.</p>
                    </div>
                  </div>
                );
              })}
            </TabsContent>
          </Tabs>
        ) : (
          <Tabs defaultValue="primeira" className="w-full">
            <div className="flex justify-between items-center mb-4 text-2xl md:text-lg">
              <TabsList className="grid grid-cols-5 gap-1 w-full">
                <TabsTrigger className="text-xs md:text-sm" value="oracoes">Orações</TabsTrigger>
                <TabsTrigger className="text-xs md:text-sm" value="primeira">1ª Leitura</TabsTrigger>
                <TabsTrigger className="text-xs md:text-sm" value="salmo">Salmo</TabsTrigger>
                <TabsTrigger className="text-xs md:text-sm" value="segunda">2ª Leitura</TabsTrigger>
                <TabsTrigger className="text-xs md:text-sm" value="evangelho">Evangelho</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="oracoes" className={`${fontSize} space-y-6`}>
              <div>
                <h3 className="text-lg font-semibold mb-1">Coleta</h3>
                <p className="leading-relaxed">{liturgiaData?.oracoes.coleta}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Oferendas</h3>
                <p className="leading-relaxed">{liturgiaData?.oracoes.oferendas}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Comunhão</h3>
                <p className="leading-relaxed">{liturgiaData?.oracoes.comunhao}</p>
              </div>
              {liturgiaData?.oracoes.extras?.map((extra, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-1">{extra.titulo}</h3>
                  <p className="leading-relaxed">{extra.texto}</p>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="primeira" className={`${fontSize} space-y-4`}>
              {liturgiaData?.leituras.primeiraLeitura?.map((leitura, index) => (
                <div key={index}>
                  {index > 0 && <p className="italic text-sm mb-1">ou, à escolha: </p>}
                  <h2 className="text-lg font-semibold mb-2">{index + 1}ª Leitura {leitura.referencia}</h2>
                  <p className="italic mb-2">{leitura.titulo}</p>
                  <p className="leading-relaxed whitespace-pre-line">{leitura.texto}</p>
                  <p className="mt-4 font-semibold pb-2">— Palavra do Senhor.</p>
                  <p>— Graças a Deus.</p>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="salmo">
              {liturgiaData?.leituras.salmo?.map((salmos, index) => (
                <div key={index} className={`${fontSize} space-y-3`}>
                  {index > 0 && <p className="italic text-sm mb-1">ou, à escolha: </p>}
                  <h2 className="text-lg font-semibold mb-2">{salmos.referencia}</h2>
                  <p className="mb-2 font-semibold">— {salmos.refrao}</p>
                  {salmos.texto.split('\n').map((verso, i) => (
                    <p key={i} className="leading-relaxed mt-2 whitespace-pre-line">
                      {verso.trim()}
                    </p>
                  ))}
                </div>
              ))}
            </TabsContent>

            <TabsContent value="segunda" className={`${fontSize} space-y-4`}>
              {liturgiaData?.leituras.segundaLeitura && liturgiaData.leituras.segundaLeitura.length > 0 ? (
                liturgiaData.leituras.segundaLeitura.map((leitura, index) => (
                  <div key={index}>
                    {index > 0 && <p className="italic text-sm mb-1">ou, à escolha: </p>}
                    <h2 className="text-lg font-semibold mb-2">
                      {index + 1}ª Leitura {leitura.referencia}
                    </h2>
                    <p className="italic mb-2">{leitura.titulo}</p>
                    <p className="leading-relaxed mt-2 whitespace-pre-line">{leitura.texto}</p>
                    <p className="mt-4 font-semibold pb-2">— Palavra do Senhor.</p>
                    <p>— Graças a Deus.</p>
                  </div>
                ))
              ) : (
                <p className="italic">Hoje não há segunda leitura.</p>
              )}
            </TabsContent>

            <TabsContent value="evangelho">
              {liturgiaData?.leituras.evangelho?.map((evangelho, index) => {
                const isPaixao = evangelho.titulo.startsWith("Paixão de nosso Senhor Jesus Cristo");

                return (
                  <div key={index}>
                    <h2 className="text-lg font-semibold mb-2">Evangelho {evangelho.referencia}</h2>
                    <div className={`${fontSize}`}>
                      <p className="italic mb-2">
                        {evangelho.titulo.split(/(✠)/g).map((parte, idx) =>
                          parte === '✠' ? (
                            <span key={idx} className="text-red-800 font-bold">{parte}</span>
                          ) : (
                            <span key={idx}>{parte}</span>
                          )
                        )}
                      </p>
                      {!isPaixao && <p>— Glória a vós, Senhor.</p>}

                      {evangelho.texto.split('\n').map((i) => (
                        <p key={i} className="leading-relaxed whitespace-pre-line">
                          {evangelho.texto}
                        </p>
                      ))}

                      <p className="mt-4 font-semibold">— Palavra da Salvação.</p>
                      <p>— Glória a vós, Senhor.</p>
                    </div>
                  </div>
                );
              })}
            </TabsContent>
          </Tabs>
        )
      )}

    </main >
  )
}

export default Liturgia
