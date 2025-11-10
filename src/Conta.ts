import { Cliente } from "./Cliente";
import { Transacao } from "./Transacao";

export class Conta {
  private saldo: number = 0;
  private transacoes: Transacao[] = [];

  constructor(public numero: string, public cliente: Cliente) {}

  public depositar(valor: number): void {
    if (valor <= 0) throw new Error("Valor do depósito deve ser positivo.");
    this.saldo += valor;
    this.transacoes.push(new Transacao("Depósito", valor));
  }

  public sacar(valor: number): void {
    if (valor <= 0) throw new Error("Valor do saque deve ser positivo.");
    if (valor > this.saldo) throw new Error("Saldo insuficiente.");
    this.saldo -= valor;
    this.transacoes.push(new Transacao("Saque", -valor));
  }

  public transferir(valor: number, contaDestino: Conta): void {
    if (valor <= 0) throw new Error("Valor da transferência deve ser positivo.");
    if (valor > this.saldo) throw new Error("Saldo insuficiente para transferência.");

    // Cria as transações de débito/crédito
    const [debito, credito] = Transacao.criarTransferencia(this, contaDestino, valor);

    
    let debitApplied = false;
    try {
      this.saldo -= valor;
      debitApplied = true;

      contaDestino.saldo += valor;

      // Registrar no extrato apenas após sucesso nos saldos
      this.transacoes.push(debito);
      contaDestino.transacoes.push(credito);
    } catch (err) {
      // Rollback parcial se necessário
      if (debitApplied) this.saldo += valor;
      // tentar reverter crédito se já aplicado
      if (contaDestino.saldo >= valor) contaDestino.saldo -= valor;
      throw err;
    }
  }

  public toJSON(): ContaJSON {
    return {
      numero: this.numero,
      cliente: this.cliente.getNome(), // use getNome() se nome for private
      saldo: this.saldo,
      extrato: this.transacoes.map(t => t.toJSON())
    };
  }
}

export interface ContaJSON {
  numero: string;
  cliente: string;
  saldo: number;
  extrato: Array<ReturnType<Transacao['toJSON']>>;
}