# Visão Geral do # Projeto PooBank 💳

## Descrição

Sistema bancário orientado a objetos desenvolvido em TypeScript como projeto final da disciplina POO na Escola ADA.

🎯 Objetivo
Criar a lógica de negócios de um sistema bancário usando TypeScript e os pilares da Programação Orientada a Objetos (POO). O foco é na estrutura e segurança do código, não na interface visual.

## Decisões de Design

- Utilizei **herança** para modelar `ContaCorrente` e `ContaPoupanca` a partir de uma classe abstrata `Conta`.
- Apliquei **encapsulamento rigoroso** no atributo `saldo`, acessível apenas por métodos controlados.
- Modelei **composição** entre `Conta` e `Transacao` para garantir integridade do extrato.
- Implementei um sistema de **chaves PIX** para transferências por identificadores únicos.

## Etapas e Componentes Obrigatórios

Classes Essenciais

Cliente: dados do correntista

Conta: saldo, histórico de transações

Transacao: depósito, saque, transferência

Requisitos de POO

•  Encapsulamento máximo: saldo privado, sem setter público.
•  Validação de métodos: verificar valores positivos e saldo suficiente.
•  Transferência atômica: sacar da origem e depositar no destino.
•  Relacionamentos claros:
•  Cliente → Conta (1:N)
•  Conta → Transacao (composição)
•  Método estático:  cria duas transações.
•  Serialização:  em Cliente e Conta, sem expor dados sensíveis.

## Desafios Avançados

•  Herança:  abstrata →  e
•  PIX: sistema de chaves (email, CPF) para transferências

## Como Executar

- Item 1 Instale as dependências com `npm install`
- Item 2 Compile com `tsc`
- Item 3 Execute com `node dist/index.js`

## Fase 2 - Implementações Pessoais

- Métodos extras como `mostrarCliente`, `toJSON`, `adicionarConta`
- Organização de extrato e associação de múltiplas contas
- Testes mais completos e estrutura mais robusta

## Como rodar

```bash
npx tsc
node dist/index.js


