export type CorLiturgica = 'Verde' | 'Vermelho' | 'Roxo' | 'Rosa' | 'Branco';

export interface LiturgiaDiaResponse {
  data: string;
  liturgia: string;
  cor: CorLiturgica;
  oracoes: {
    coleta: string;
    oferendas: string;
    comunhao: string;
    extras?: {
      titulo: string;
      texto: string;
    }[];
  };
  leituras: {
    primeiraLeitura?: Leitura[];
    segundaLeitura?: Leitura[];
    evangelho?: Leitura[];
    salmo?: Salmo[];
    extras?: Leitura[];
  };
  antifonas?: {
    entrada?: string;
    comunhao?: string;
  };
}

export interface Leitura {
  referencia: string;
  titulo: string;
  texto: string;
  tipo?: string;
}

export interface Salmo {
  referencia: string;
  refrao: string;
  texto: string;
}

export interface LiturgiaError {
  erro: string;
  data: string;
}