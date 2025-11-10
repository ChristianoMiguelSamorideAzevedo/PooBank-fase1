"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    #nome;
    #idade;
    #email;
    #contas = [];
    constructor(nome, idade, email) {
        if (!nome || nome.trim().length === 0) {
            throw new Error('Nome não pode estar vazio');
        }
        if (idade < 0) {
            throw new Error('Idade não pode ser negativa');
        }
        if (!email || !email.includes('@')) {
            throw new Error('Email inválido');
        }
        this.#nome = nome.trim();
        this.#idade = idade;
        this.#email = email.trim();
    }
    apresentar() {
        return `Olá, meu nome é ${this.#nome}, tenho ${this.#idade} anos e meu email é ${this.#email}.`;
    }
    getNome() {
        return this.#nome;
    }
    mostrarCliente() {
        return this.apresentar();
    }
    adicionarConta(conta) {
        this.#contas.push(conta);
    }
    getContas() {
        return [...this.#contas]; // Return a copy to prevent external modification
    }
    toJSON() {
        return {
            nome: this.#nome,
            idade: this.#idade,
            email: maskEmail(this.#email),
            contas: this.#contas.map(conta => conta.toJSON())
        };
    }
}
exports.Cliente = Cliente;
function maskEmail(email) {
    const [local, domain] = email.split('@');
    if (!local || !domain)
        return '***@***';
    if (local.length === 1)
        return `*@${domain}`;
    return `${local[0]}***@${domain}`;
}
//# sourceMappingURL=Cliente.js.map