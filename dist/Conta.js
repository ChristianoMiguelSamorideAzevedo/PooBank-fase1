"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const Transacao_1 = require("./Transacao");
class Conta {
    numero;
    cliente;
    saldo = 0;
    transacoes = [];
    constructor(numero, cliente) {
        this.numero = numero;
        this.cliente = cliente;
    }
    depositar(valor) {
        if (valor <= 0)
            throw new Error("Valor do depósito deve ser positivo.");
        this.saldo += valor;
        this.transacoes.push(new Transacao_1.Transacao("Depósito", valor));
    }
    sacar(valor) {
        if (valor <= 0)
            throw new Error("Valor do saque deve ser positivo.");
        if (valor > this.saldo)
            throw new Error("Saldo insuficiente.");
        this.saldo -= valor;
        this.transacoes.push(new Transacao_1.Transacao("Saque", -valor));
    }
    transferir(valor, contaDestino) {
        if (valor <= 0)
            throw new Error("Valor da transferência deve ser positivo.");
        if (valor > this.saldo)
            throw new Error("Saldo insuficiente para transferência.");
        // Cria as transações de débito/crédito
        const [debito, credito] = Transacao_1.Transacao.criarTransferencia(this, contaDestino, valor);
        // Aplicar as alterações de saldo de forma atômica: primeiro validar, depois executar.
        // Aqui realizamos as alterações diretamente sobre os saldos (mesma classe pode acessar private de outra instância).
        // Usamos try/catch para tentar manter a consistência em caso de erro inesperado.
        let debitApplied = false;
        try {
            this.saldo -= valor;
            debitApplied = true;
            contaDestino.saldo += valor;
            // Registrar no extrato apenas após sucesso nos saldos
            this.transacoes.push(debito);
            contaDestino.transacoes.push(credito);
        }
        catch (err) {
            // Rollback parcial se necessário
            if (debitApplied)
                this.saldo += valor;
            // tentar reverter crédito se já aplicado
            if (contaDestino.saldo >= valor)
                contaDestino.saldo -= valor;
            throw err;
        }
    }
    toJSON() {
        return {
            numero: this.numero,
            cliente: this.cliente.getNome(), // use getNome() se nome for private
            saldo: this.saldo,
            extrato: this.transacoes.map(t => t.toJSON())
        };
    }
}
exports.Conta = Conta;
//# sourceMappingURL=Conta.js.map