// Estruturas de Condição - IF

var jogador1 = 0;
var jogador2 = 0;
var placar;

// Aninhamento de IF
// if(jogador1 !== -1) { // Condição para nao começar uma partida com menos 1 ponto.
//     if(jogador1 > 0) {
//         console.log('O jogador 1 marcou um ponto');
//     } else if(jogador2 > 0) {
//         console.log('O jogador 2 marcou um ponto');
//     } else {
//         console.log('Niinguém marcou ponto');
//     }
// }

// // If ternario (condicao) ? (true) : (false)
// jogador1 !== -1 && jogador2 !== -1 ? 
// console.log('Os jogadores são válidos') : console.log('Jogadores Invalidados');

// Usando verificação para melhorar o código
if(jogador1 > 0 && jogador2 == 0) {
    console.log('O jogador 1 marcou ponto');
    placar = jogador1 > jogador2
} else if(jogador2 > 0 && jogador1 == 0) {
    console.log('O jogador 2 marcou ponto');
    placar = jogador2 > jogador1
}

// usando Switch/Case
switch(placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
        case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou');
        break;
        default:
        console.log('Ninguém ganhou');
}

// Laços de Repetição
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3',
}

// For - Executa uma instrução até que a mesma seja falsa
for(let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}

// For-In executa repetição a partir de uma propriedade
for(let i in array) {
    console.log(i);
}

// For-In com objetos
for(i in object) {
    console.log(i);
}

// For-Of - Executa um valor a partir de valor
for(i of array) {
    console.log(i);
}

// For-Of não funciona com objetos porque ele irá imprimir um caractere em cada linha
for(i of object.propriedade1) {
    console.log(i);
}

// While - Executa algo enquanto a condição for verdadeira. A verificação feita antes da execução.
var a = 0;
while(a < 10) {
    a++;
    console.log(a);
}

// Do while - Executa instrução até que determinada condição seja falsa. Verificação é feita após a execução
do {
    a++;
    console.log(a);
} while (a < 10);