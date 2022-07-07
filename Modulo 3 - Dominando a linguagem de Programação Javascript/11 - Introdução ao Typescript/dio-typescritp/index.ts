// // No TS temos acesso as types e as interfaces

// /* interface IAnimal {
//     nome: string;
//     tipo: 'terrestre' | 'aquatico'; // | equivale a || (OU) em JS
//     executarRugido(alturaEmDecibeis: number): void;
// }
// */

// type IAnimal = {
//     nome: string;
//     tipo: 'terrestre' | 'aquatico';
//     domestico: boolean
// }

// // Podemos extender uma interface, como uma classe:

// interface IFelino extends IAnimal {
//     visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal {
//     porte: 'pequeno' | 'medio' | 'grande';
// }

// type IDomestico = IFelino | ICanino;

// const animal: IDomestico = {
//     domestico: true,
//     nome: 'cachorro',
//     porte: 'medio',
//     tipo: 'terrestre'
// }

// // const felino: IFelinos = {
// //     nome: 'Leão',
// //     tipo:  'terrestre',
// //     visaoNoturna: true,
// //     executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
// // }



// Tratando a tag input

// const input = document.getElementById('input') as HTMLInputElement; // Isso é para informar ao TS que a tag é de uma tipo Input

// input.addEventListener('input', (event) => {
//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i.value)
// })



// // Generic Types

// function adicionaApendiceALista<NaoSei>(array: NaoSei[], valor: NaoSei) {
//     return array.map(() => valor);
// }

// adicionaApendiceALista([1, 2, 3], 2);


// Utilizando o ? para criar propriedades de definição opcional.

// interface IUsuario {
//     id: string,
//     email: string;
//     cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario'; // com o ? a propriedade pode ou não ser definido. Fica opcional.
// }


// function redirecione(usuario: IUsuario) {
//     if(usuario.cargo) {
//         // redirecionar(usuario.cargo)
//     }

//     // redirecionar para a área do usuário
// }



interface Cachorro {
    nome: string,
    idade: number,
    parqueFavorito?: string;
}

// const meuCachorro: Cachorro = {
//     nome: 'Apolo',
//     idade: 14
// }

// type CachorroSomenteLeitura = {
//     readonly [K in keyof Cachorro]-?: Cachorro[K]; // Iterando em todos os itens de Cachorro e informando que estes são itens de somente leitura. E o -? retira a opcionalidade de parqueFavorito, tornando-o obrigatório.
// }

// class MeuCachorro implements CachorroSomenteLeitura {
//     nome;
//     idade;
//     parqueFavorito;

//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const cao = new MeuCachorro('Apolo', 14);


// Utilizando o Omit
interface Pessoa {
    nome: string,
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {

}






