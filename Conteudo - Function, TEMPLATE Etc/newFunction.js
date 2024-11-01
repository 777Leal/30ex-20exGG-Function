//--------------- S  P  A  C  E ----------------//

let casa = {
    Cor: `Black`,
    Sala: 15,
    Cozinha: 10,
    Banheiro: 8,
    Quarto: 20,
}

function CalcularTamanhoTotalCasaEmM2 (
    TamanhoSala,
    TamanhoCozinha,
    TamanhoBanheiro,
    TamanhoQuarto
) {
    const TamanhoTotal1 = 
    TamanhoSala + TamanhoQuarto + TamanhoCozinha + TamanhoBanheiro;
    console.log(`O tamanho da casa é de ${TamanhoTotal1}m2`);
    return TamanhoTotal1
}

CalcularTamanhoTotalCasaEmM2 (
    casa.Sala,
    casa.Cozinha,
    casa.Banheiro,
    casa.Quarto
);

//--------------- S  P  A  C  E ----------------//

let a = 2.00000001;

console.log(a);
console.log(a.toFixed(3));
console.log(a.toString());

//--------------- S  P  A  C  E ----------------//

let b = `Texto da aula de metódos,`;

console.log(b.concat(` que já dominei totalmente.`));

//--------------- S  P  A  C  E ----------------//

let c = `Texto da aula de metódos,`;

console.log(c.split(`da`));

//--------------- S  P  A  C  E ----------------//

let d = `Texto da aula de metódos,`;

console.log(d.split(` `));

//--------------- S  P  A  C  E ----------------//

let e = `10110`;

console.log(Number.parseInt(e));

//--------------- S  P  A  C  E ----------------//

let f = `Texto da aula de metódos,`;
let g = `10110`;

console.log(Number.parseInt(g));
console.log(Number.isNaN(Number.parseInt(f)));

//--------------- S  P  A  C  E ----------------//

const ListaNota = [
 { nome: `RogérioDoPneu`, nota: 5},
 { nome: `BacalhauPeludo`, nota: 6},
 { nome: `GefersonDaCaganeira`, nota: 1},
 { nome: `JoãoComeAbacate`, nota: 3},
 { nome: `GilbertoPeçaTorta`, nota: 2},
 { nome: `JuanPeideMolenga`, nota: 4},
 { nome: `RogérioDoPneu`, nota: 9},
 { nome: `LimaCheiraCocada`, nota: 10},
 { nome: `SenhorCacetinhos`, nota: 7},
 { nome: `BahianoDaAfrica`, nota: 8},
]

const AulunosAprovados = ListaNota.filter(function (aluno){
    return aluno.nota >= 7;
});

console.log(AulunosAprovados);


const AlunosQueTiraram0 = ListaNota.find(function (aluno) {
    return aluno.nota === 0;
});
console.log(AlunosQueTiraram0);
