export class Transacao {
  constructor(
    public tipo: string,
    public valor: number,
    public data: Date = new Date(),
    public descricao?: string      
  ) {}

  static criarTransferencia(origem: { numero: string }, destino: { numero: string }, valor: number): [Transacao, Transacao] {
    return [
    new Transacao("Transferência - Débito", -valor, new Date(), `Para conta ${destino.numero}`),
    new Transacao("Transferência - Crédito", valor, new Date(), `De conta ${origem.numero}`)
  ];
}


  public toJSON() {
    return {
      tipo: this.tipo,
      valor: this.valor,
      data: this.data.toISOString(),
      descricao: this.descricao
    };
  }
}

