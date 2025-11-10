import { Conta } from "./Conta";
import { ContaJSON } from "./Conta";
export declare class Cliente {
    #private;
    constructor(nome: string, idade: number, email: string);
    apresentar(): string;
    getNome(): string;
    mostrarCliente(): string;
    adicionarConta(conta: Conta): void;
    getContas(): Conta[];
    toJSON(): ClienteJSON;
}
interface ClienteJSON {
    nome: string;
    idade: number;
    email: string;
    contas: ContaJSON[];
}
export {};
//# sourceMappingURL=Cliente.d.ts.map