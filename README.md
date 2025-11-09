# PooBank

## Descrição

Sistema bancário orientado a objetos desenvolvido em TypeScript como projeto final da disciplina POO na Escola ADA.

## Decisões de Design

- Utilizei **herança** para modelar `ContaCorrente` e `ContaPoupanca` a partir de uma classe abstrata `Conta`.
- Apliquei **encapsulamento rigoroso** no atributo `saldo`, acessível apenas por métodos controlados.
- Modelei **composição** entre `Conta` e `Transacao` para garantir integridade do extrato.
- Implementei um sistema de **chaves PIX** para transferências por identificadores únicos.

## Como Executar

- Item 1 Instale as dependências com `npm install`
- Item 2 Compile com `tsc`
- Item 3 Execute com `node dist/index.js`
