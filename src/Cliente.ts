import { Conta } from "./Conta";
import { ContaJSON } from "./Conta";

export class Cliente {
  #nome: string;
  #idade: number;
  #email: string;
  #contas: Conta[] = [];

  constructor(nome: string, idade: number, email: string) {
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

  public apresentar(): string {
    return `Olá, meu nome é ${this.#nome}, tenho ${this.#idade} anos e meu email é ${this.#email}.`;
  }

  public getNome(): string {
    return this.#nome;
  }

  public mostrarCliente(): string {
    return this.apresentar();
  }

  public adicionarConta(conta: Conta): void {
    this.#contas.push(conta);
  }

  public getContas(): Conta[] {
    return [...this.#contas]; // Return a copy to prevent external modification
  }

  public toJSON(): ClienteJSON {
    return {
      nome: this.#nome,
      idade: this.#idade,
      email: maskEmail(this.#email),
      contas: this.#contas.map(conta => conta.toJSON()) as ContaJSON[]
    };
  }
}

interface ClienteJSON {
  nome: string;
  idade: number;
  email: string;
  contas: ContaJSON[];
}

function maskEmail(email: string): string {
  const [local, domain] = email.split('@');
  if (!local || !domain) return '***@***';
  if (local.length === 1) return `*@${domain}`;
  return `${local[0]}***@${domain}`;
}