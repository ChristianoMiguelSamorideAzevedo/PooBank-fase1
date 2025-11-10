document.querySelector("button").addEventListener("click", () => {
  alert("Cliente criado com sucesso!");
});

document.getElementById("formCliente").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = parseInt(document.getElementById("idade").value);
  const email = document.getElementById("email").value;

  const cliente = new Cliente(nome, idade, email);
  document.getElementById("resultado").innerText = cliente.mostrarCliente();
});

class Cliente {
  constructor(nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }

  mostrarCliente() {
    return `Cliente cadastrado: ${this.nome}, ${this.idade} anos, e-mail: ${this.email}`;
  }
}
