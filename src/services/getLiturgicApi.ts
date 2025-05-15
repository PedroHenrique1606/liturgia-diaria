import type { LiturgiaDiaResponse, LiturgiaError } from '@/interfaces/liturgiaTypes';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getLiturgicDay(
    dia: string,
    mes: string,
    ano: string,
): Promise<LiturgiaDiaResponse | null> {

    try {
        const params = new URLSearchParams({ dia, mes })
        if (ano) params.append("ano", ano)

        const response = await axios.get<LiturgiaDiaResponse>(`${BASE_URL}/?${params.toString()}`)
        return response.data
    } catch (error: any) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            const erroData = error.response.data as LiturgiaError;
            console.warn("❌ Liturgia não encontrada:", erroData);
            return null;
        }
        console.error("❌ Erro inesperado ao buscar liturgia:", error);
        throw error;
    }
}