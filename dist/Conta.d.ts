import { Cliente } from "./Cliente";
import { Transacao } from "./Transacao";
export declare class Conta {
    numero: string;
    cliente: Cliente;
    private saldo;
    private transacoes;
    constructor(numero: string, cliente: Cliente);
    depositar(valor: number): void;
    sacar(valor: number): void;
    transferir(valor: number, contaDestino: Conta): void;
    toJSON(): ContaJSON;
}
export interface ContaJSON {
    numero: string;
    cliente: string;
    saldo: number;
    extrato: Array<ReturnType<Transacao['toJSON']>>;
}
//# sourceMappingURL=Conta.d.ts.map