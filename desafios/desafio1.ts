// Como podemos rodar isso em um arquivo .ts sem causar erros? 
//Respostas possiveis:

let employee = {
    code: 10,
    name: "John"
};

let employee1: {code: number, name: string} = {
    code: 10,
    name: "John"
}

interface employee {
    code: number,
    name: string
}

let employee3: employee = {
    code: 5,
    name: 'amanda'
}