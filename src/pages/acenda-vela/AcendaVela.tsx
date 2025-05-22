import { Candle } from "@/components/Candle";

export default function AcendaVela() {
    return (
        <div className="min-h-screen bg-gradient-to-b flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-6">Acenda uma Vela Virtual 🕯</h1>
                <Candle />
            </div>
        </div>
    )
}