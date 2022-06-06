const pessoa = {
    nome: 'Mariana',
    idade: 28,
    professao: 'desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, professao: string} = {
    nome: 'Andre',
    idade: 25,
    professao: 'pintor'
}

const paula: {nome: string, idade: number, professao: string} = {
    nome: 'Paula',
    idade: 25,
    professao: 'desenvolvedora'
}

enum Professao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    professao?: Professao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    professao: Professao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    professao: Professao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    professao: Professao.Desenvolvedora,
    materias: ['Matemática discreta', 'programação']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matemática discreta', 'programação']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(monica.materias);