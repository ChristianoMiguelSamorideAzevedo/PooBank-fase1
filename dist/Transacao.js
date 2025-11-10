"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transacao = void 0;
class Transacao {
    tipo;
    valor;
    data;
    descricao;
    constructor(tipo, valor, data = new Date(), descricao) {
        this.tipo = tipo;
        this.valor = valor;
        this.data = data;
        this.descricao = descricao;
    }
    static criarTransferencia(origem, destino, valor) {
        return [
            new Transacao("Transferência - Débito", -valor, new Date(), `Para conta ${destino.numero}`),
            new Transacao("Transferência - Crédito", valor, new Date(), `De conta ${origem.numero}`)
        ];
    }
    toJSON() {
        return {
            tipo: this.tipo,
            valor: this.valor,
            data: this.data.toISOString(),
            descricao: this.descricao
        };
    }
}
exports.Transacao = Transacao;
//# sourceMappingURL=Transacao.js.map