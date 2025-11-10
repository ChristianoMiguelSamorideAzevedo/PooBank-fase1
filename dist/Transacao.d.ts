export declare class Transacao {
    tipo: string;
    valor: number;
    data: Date;
    descricao?: string | undefined;
    constructor(tipo: string, valor: number, data?: Date, descricao?: string | undefined);
    static criarTransferencia(origem: {
        numero: string;
    }, destino: {
        numero: string;
    }, valor: number): [Transacao, Transacao];
    toJSON(): {
        tipo: string;
        valor: number;
        data: string;
        descricao: string | undefined;
    };
}
//# sourceMappingURL=Transacao.d.ts.map