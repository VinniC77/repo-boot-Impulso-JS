const pessoa = {
    nome: "Mariana",
    idade: 30,
    profissao: "desenvolvedora"
}

pessoa.idade = 28;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao { // Com o enum, definimos um tipo.
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface IPessoa {
    nome: string,
    idade: number,
    profissao?: Profissao // o ? significa que a propriedade é opcional.
}

interface IEstudante extends IPessoa {
    materias: string[] // tipo de lista de string
}


const vanessa: IPessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: IPessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: IEstudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática', 'Programacao']
}

const monica: IEstudante = {
    nome: 'Monica',
    idade: 22,
    materias: ['Matemática', 'Programacao']
}

function listar(lista: string[]) {
    for(const item of lista) {
        console.log('- ', item);
    }
}

listar(monica.materias);