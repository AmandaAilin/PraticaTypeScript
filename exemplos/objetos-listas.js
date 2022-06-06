"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    professao: 'desenvolvedora'
};
pessoa.idade = 25;
const andre = {
    nome: 'Andre',
    idade: 25,
    professao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 25,
    professao: 'desenvolvedora'
};
var Professao;
(function (Professao) {
    Professao[Professao["Professora"] = 0] = "Professora";
    Professao[Professao["Atriz"] = 1] = "Atriz";
    Professao[Professao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Professao[Professao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Professao || (Professao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    professao: Professao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 23,
    professao: Professao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    professao: Professao.Desenvolvedora,
    materias: ['Matemática discreta', 'programação']
};
const monica = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matemática discreta', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
