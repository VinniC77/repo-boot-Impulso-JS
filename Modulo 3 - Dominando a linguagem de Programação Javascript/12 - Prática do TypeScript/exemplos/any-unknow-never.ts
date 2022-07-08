let anyEstaDeVolta: any;

let unknowValor: unknown;
unknowValor = 3;
unknowValor = 'Olá';
unknowValor = true;
unknowValor = 'vai sim';

// let stringTest2: string = 'agora vai';
// stringTest2 = unknowValor; // o unknow tem uma diferença em relação ao any

// // Se quiser atribuir um valor diferente do que foi setado na primeira vez em que a variável foi definida, é mais detalhado

// if(typeof unknowValor === 'string') {
//     stringTest2 = unknowValor;
// }



// Tipo never e o comendo throw
// Never é referente a um código que nunca é finalizado por alguma razão.
function jogaErro(erro: string, codigo: Number): never {
    throw {
        error: erro,
        code: codigo
    }
}

jogaErro('deu erro', 500);