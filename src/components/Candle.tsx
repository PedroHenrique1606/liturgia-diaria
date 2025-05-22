import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

    const handleClick = () => {
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
        <div className="flex flex-col items-center space-y-6 mt-10 px-4">
            {/* Vela SVG */}
            <div className="cursor-pointer" onClick={handleClick}>
                <div className="w-32 h-64 relative">
                    {/* SVG base da vela */}
                    <svg
                        viewBox="0 0 64 128"
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Corpo da vela */}
                        <rect x="24" y="40" width="16" height="70" rx="4" ry="4" fill="#fdf6e3" stroke="#e0cda9" strokeWidth="1" />
                        {/* Pavio */}
                        {lit && <line x1="32" y1="40" x2="32" y2="34" stroke="#555" strokeWidth="2" />}
                    </svg>
                    {lit && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.9 }}
                            animate={{ opacity: 1, y: -16, scale: [1, 1.15, 1] }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                            className="absolute left-1/2 top-[34px] w-5 h-7 -translate-x-1/2 rounded-full bg-gradient-to-t from-orange-400 to-yellow-200 blur-[2px] shadow-md"
                        />
                    )}
                </div>
            </div>

            {/* Input de intenção */}
            {!submitted && lit && (
                <div className="w-full max-w-sm space-y-2">
                    <Input
                        placeholder="Escreva sua intenção de oração"
                        value={intention}
                        onChange={(e) => setIntention(e.target.value)}
                    />
                    <Button onClick={handleSubmit} className="w-full">
                        Acender com Intenção
                    </Button>
                </div>
            )}

            {/* Intenção salva */}
            {submitted && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mt-4 bg-yellow-50 p-4 rounded-xl border border-yellow-100 shadow-sm max-w-sm"
                >
                    <p className="text-yellow-800 font-semibold">🙏 Intenção:</p>
                    <p className="italic text-gray-700">{intention}</p>
                </motion.div>
            )}
        </div>
    );
}
