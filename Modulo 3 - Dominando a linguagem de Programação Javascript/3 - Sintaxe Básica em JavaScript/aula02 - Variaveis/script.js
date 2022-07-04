// Tipos Primitivos

// Boolean
var vOuF = false;
console.log(typeof(vOuF));

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nome = 'Vini';
console.log(typeof(nome));

// function
var funcao = function(){}
console.log(typeof(funcao));

// declarando variaveis
var variavel = 'Vini';
variavel = 'Clunc';
console.log(variavel);

let variavel2 = 'Vini';
console.log(variavel2);

const constante = 'Gecir';
console.log(constante);

var escoloGlobal = 'global';
console.log(escoloGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

// atribuição
var atribuicao = 'Sol';

// comparação
var comparacao = '0' == 0;
console.log(comparacao);

// compara valor e tipo
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// Operadores aritméticos
// adicao
var adicao = 1 + 1;
console.log(adicao);

// subtracao
var subtracao = 2 - 1;
console.log(subtracao);

// multiplicacao
var multiplicacao = 2 * 3;
console.log(multiplicacao);

// divisao Real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

// divisao inteira ou o resto da divisao
var divisaoInteira = 5 % 2;
console.log(divisaoInteira); // retorna o resto da divisao, no caso 1

// potenciacao
var potenciacao = 2 ** 10;
console.log(potenciacao);

// Operadores relacionais
// maior que 
var maiorQue = 5 > 2;
console.log(maiorQue);

// menor que
var menorQue = 5 < 2;
console.log(menorQue);

// maior ou igual a 
var maiorOuIgualA = 5 >= 2;
console.log(maiorOuIgualA);

// menor ou igual a 
var menorOuIgualA = 5 <= 2;
console.log(menorOuIgualA);

// Operadores Lógicos
// E
var e = true && false;
console.log(e);

// OU
var ou = true || false;
console.log(ou);

// NAO
var nao = !true;
console.log(nao);