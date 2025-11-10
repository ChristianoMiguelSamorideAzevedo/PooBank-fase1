"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./Cliente");
const Conta_1 = require("./Conta");
const cliente1 = new Cliente_1.Cliente("Miguel", 30, "miguel@email.com");
console.log(cliente1.mostrarCliente());
//TESTES DE CLASSE - FASE 4-----------
// Em seguida criando cliente
const cliente = new Cliente_1.Cliente("Miguel", 30, "miguel@email.com");
// Neste momento vai criando contas
const conta1 = new Conta_1.Conta("001", cliente1);
const conta2 = new Conta_1.Conta("002", cliente1);
// Associando contas ao cliente
cliente1.adicionarConta(conta1);
cliente1.adicionarConta(conta2);
// Operações
conta1.depositar(1000);
conta1.sacar(200);
conta1.transferir(300, conta2);
// Exibindo resultado
console.log("=== CLIENTE ===");
console.log(cliente.mostrarCliente());
console.log("\n=== CONTA 1 ===");
console.log(JSON.stringify(conta1.toJSON(), null, 2));
console.log("\n=== CONTA 2 ===");
console.log(JSON.stringify(conta2.toJSON(), null, 2));
//# sourceMappingURL=index.js.map