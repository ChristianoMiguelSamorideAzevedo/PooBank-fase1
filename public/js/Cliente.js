"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
    Cliente.prototype.apresentar = function () {
        return "Ol\u00E1, meu nome \u00E9 ".concat(this.nome, ", tenho ").concat(this.idade, " anos e meu email \u00E9 ").concat(this.email, ".");
    };
    // Convenience method used by index.ts
    Cliente.prototype.mostrarCliente = function () {
        return this.apresentar();
    };
    return Cliente;
}());
exports.Cliente = Cliente;
