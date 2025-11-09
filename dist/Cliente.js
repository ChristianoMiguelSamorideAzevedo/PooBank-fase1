"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    nome;
    idade;
    email;
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu email é ${this.email}.`;
    }
    // Convenience method used by index.ts
    mostrarCliente() {
        return this.apresentar();
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=Cliente.js.map