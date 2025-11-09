export class Cliente {
  private nome: string;
  private idade: number;
  private email: string;
  
  constructor(nome: string, idade: number, email: string) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }       

  public apresentar(): string {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu email é ${this.email}.`;
  }

  // Convenience method used by index.ts
  public mostrarCliente(): string {
    return this.apresentar();
  }

}