//--------------- S  P  A  C  E  Ex1 ----------------//

let nickname = "Macho Alpha"

    let LetraMaiuscula = nickname.toUpperCase();
    let LetraMinuscula = nickname.toLowerCase();

    console.log(LetraMaiuscula, LetraMinuscula);

//--------------- S  P  A  C  E   Ex2 ----------------//
let fruta = "Berinjela"

function temLetraA(fruta){
    fruta.toLowerCase();

    if(fruta.includes("a")){
        console.log(`A letra "a" da palavra ${fruta}, está na posição ${fruta.indexOf("a") + 1}.`);

    } else{
        console.log("Não tem a");
    }
}
temLetraA(fruta);

//--------------- S  P  A  C  E   Ex3 ----------------//

const notícia = `Neste ano de 2024, o grande jogador "pelé" (já falecido) acabou sendo reconhecido como uma forma de elogio dentre as pessoas. `

let começo = notícia.slice(0, 43);
let final = notícia.slice(43, 150);

console.log(`Início: ${começo}, final: ${final}`);

//--------------- S  P  A  C  E   Ex4 ----------------//

const frase = "Claudião"

console.log(frase.concat(" doPneu"));

//--------------- S  P  A  C  E   Ex5 ----------------//

const frase2 = `Eu não sei andar em uma cadeira de rodas motorizada`;
console.log(frase2.replace(`Não sei, sei`))

//--------------- S  P  A  C  E   Ex6 ----------------//

let fraseQlqr = ("Qualquer frase que desejar.");
const PalavraComHifen = fraseQlqr.split(" ").join("-");

console.log(`Palavras com a adição de hífen: ${PalavraComHifen}`)

//--------------- S  P  A  C  E   Ex7 ----------------//

let SenhaConsulta  = [1, 2, 3, 4, 5, 6, 7,];
console.log(`SENHAS: ${SenhaConsulta}`);

const SenhaRemover = SenhaConsulta.pop();
console.log(`Senha removida:  ${SenhaRemover}`);
console.log(`Senhas após remoção: ${SenhaConsulta}`);

//--------------- S  P  A  C  E   Ex8 ----------------//

function gerenciarClientes() {
    const clientes = [];
    clientes.unshift("Cliente 1");
    clientes.unshift("Cliente 2");
    console.log("Clientes:", clientes);
    clientes.shift();
    console.log("Clientes após atendimento:", clientes);
}
gerenciarClientes();

//--------------- S  P  A  C  E   Ex9 ----------------//

let dados  = [1, 2, 3, 4, 5, 6];
console.log(`DADOS: ${dados}`);

const DadosInvertidos = dados.reverse(dados);;
console.log(`DADOS INVERTIDOS: ${dados}`);

//--------------- S  P  A  C  E   Ex10 ----------------//

let ValoresSemDesconto = [200, 150, 350];
console.log(`VALORES SEM DESCONTO: ${ValoresSemDesconto}`);

const Desconto = 0.9;
console.log(`VALORES COM DESCONTO: ${ValoresSemDesconto.map(valor => valor * Desconto)}`);

//--------------- S  P  A  C  E   Ex11 ----------------//

function filtrarNotas(notas) {
    const aprovados = notas.filter(nota => nota >= 7);
    console.log("Notas acima de 7:", aprovados);
}
filtrarNotas([5, 8, 10, 6, 7, 9]);

//--------------- S  P  A  C  E   Ex12 ----------------//

function calcularTotal(valores) {
    const total = valores.reduce((juntar, valor) => juntar + valor, 0);
    console.log("Total das compras:", total);
}
calcularTotal([10, 20, 30]);

//--------------- S  P  A  C  E   Ex13 ----------------//

function ordenarLivros(titulos) {
    const titulosOrdenados = titulos.sort();
    console.log("TÍTULOS ORDENADOS:", titulosOrdenados);
}
ordenarLivros(["Assim que acaba, InjanaJhones, Segredo para o sucesso."]);

//--------------- S  P  A  C  E   Ex14 ----------------//

function gerarNumeroAleatorio() {
    const numero = Math.floor(Math.random() * 101);
    console.log("Número aleatório:", numero);
}
gerarNumeroAleatorio();

//--------------- S  P  A  C  E   Ex15 ----------------//

function exibirDadosCliente(cliente) {
    console.log("Campos:", Object.keys(cliente));
    console.log("Dados:", Object.values(cliente));
}
exibirDadosCliente({ nome: "Jefferson", idade: 21, saldo: 2000 });

//--------------- S  P  A  C  E   Ex16 ----------------//

const carro = {
    marca: "Ferrari",
    modelo: "F40",
    ano: 1985,
    detalhes: function() {
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
    }
};
carro.detalhes();

//--------------- S  P  A  C  E   Ex17 ----------------//

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.apresentar = function() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    };
}

const funcionario = new Pessoa("Rogério Do PNeu", 28);
funcionario.apresentar();

//--------------- S  P  A  C  E   Ex18 ----------------//

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    detalhes() {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco}`);
    }
}
const produto = new Produto("Tênis", 199.99);
produto.detalhes();

//--------------- S  P  A  C  E   Ex19 ----------------//

const relogio = {
    hora: new Date().toLocaleTimeString(),
    exibirHora: function() {
        setTimeout(() => {
            console.log("Hora atual:", this.hora);
        }, 1000);
    }
};
relogio.exibirHora();