// Criando tipos antes de utilizar em uma função. No caso o tipo input, permite string e number.
// type input = number | string;

// function somarValores(input1: input, input2: input) {
//     if(typeof input1 === 'string' || typeof input2 === 'string') {
//         return input1.toString() + input2.toString();
//     } else {
//         return input1 + input2;
//     }
// }

// console.log(somarValores(1, 5));
// console.log(somarValores('Olá ', ', tudo bem?'));
// console.log(somarValores('1', 5));

// function somarValoresNumericos(num1: number, num2: number): number { // Isso não garante a plena execução do código. o :number protege a função de alguém mexer. Estamos definindo o tipo de retorno da função.
//     return num1 + num2; // Se alguém mexer no código aqui, fudeu
// }

// console.log(somarValoresNumericos(1, 3));


// // Quando usar o tipo void em funções
// // void são funções que não retornam nada. Um exemplo de função void é o console.log(). Essa não retorna nada, apenas imprime algo no console.

// function printaValoresNumericos(num1: number, num2: number): void {
//     console.log(num1 + num2);
// }
// // Quando queremos dizer ao TS que a função não devolve nada, devemos adicionar o tipo void nela


// Incluindo callbacks em funções
function somarValoresNumericosETratar(num1: number, num2: number, callback: (numero: number) => number): number {
    let resultado = num1 + num2; 
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));