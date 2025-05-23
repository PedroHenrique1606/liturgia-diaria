import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const STORAGE_KEY = "vela_intencao";

export function Candle() {
    const [lit, setLit] = useState(false);
    const [intention, setIntention] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            setIntention(parsed.intention);
            setLit(true);
            setSubmitted(true);
        }
    }, []);

    const handleLightCandle = () => {
        if (!lit) setLit(true);
    };

    const handleSubmit = () => {
        if (intention.trim()) {
            const data = { intention };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            setSubmitted(true);
        }
    };

    return (
        <div className="flex flex-col items-center mt-10 px-4 space-y-6 text-center">
            {/* Vela */}
            <div
                onClick={handleLightCandle}
                className="cursor-pointer relative w-28 h-64 group transition-transform hover:scale-105"
            >
                {/* Corpo da vela */}
                <svg
                    viewBox="0 0 64 128"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Corpo da vela */}
                    <rect
                        x="24"
                        y="40"
                        width="16"
                        height="70"
                        rx="4"
                        ry="4"
                        fill="#fff7e0"
                        stroke="#d6ba91"
                        strokeWidth="1"
                    />
                    {/* Pavio */}
                    {lit && <line x1="32" y1="40" x2="32" y2="34" stroke="#555" strokeWidth="2" />}

                    {/* Chama */}
                    {lit && (
                        <motion.g
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [1, 0.8, 1],
                                scale: [1, 1.15, 1],
                            }}
                            transition={{
                                duration: 1.4,
                                repeat: Infinity,
                            }}
                        >
                            <ellipse
                                cx="32"
                                cy="28"
                                rx="4"
                                ry="6"
                                fill="url(#flameGradient)"
                                filter="url(#blur)"
                            />
                        </motion.g>
                    )}

                    {/* Gradiente e blur */}
                    <defs>
                        <radialGradient id="flameGradient" cx="50%" cy="30%" r="80%">
                            <stop offset="0%" stopColor="#ffecb3" />
                            <stop offset="100%" stopColor="#ff9800" />
                        </radialGradient>
                        <filter id="blur">
                            <feGaussianBlur stdDeviation="0.5" />
                        </filter>
                    </defs>
                </svg>

                {/* Tooltip */}
                {!lit && (
                    <div className="absolute -bottom-8 w-full text-sm text-gray-500 group-hover:text-gray-800 transition">
                        Clique para acender
                    </div>
                )}
            </div>

            {/* Input */}
            {!submitted && lit && (
                <div className="w-full max-w-sm space-y-3">
                    <p className="text-gray-700">Escreva sua intenção para esta vela ✨</p>
                    <Input
                        placeholder="Ex: Pela saúde da minha família"
                        value={intention}
                        onChange={(e) => setIntention(e.target.value)}
                    />
                    <Button
                        onClick={handleSubmit}
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
                    >
                        Acender com Intenção
                    </Button>
                </div>
            )}

            {/* Intenção Salva */}
            {submitted && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-yellow-50 p-5 rounded-xl border border-yellow-200 shadow max-w-sm w-full space-y-2"
                >
                    <div className="flex items-center justify-center gap-2 text-yellow-700 font-medium">
                        <CheckCircle size={20} className="text-yellow-600" />
                        Intenção registrada
                    </div>
                    <p className="italic text-gray-600 break-words">{intention}</p>
                    <p className="text-xs text-gray-400">Ela permanecerá acesa em seu coração ❤️</p>
                </motion.div>
            )}
        </div>
    );
}
