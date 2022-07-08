// Any é um tipo que pode receber qualquer tipo
let valorAny: any;

valorAny = 3;
valorAny = 'Ola';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny; // Funciona pois o valor any pode ser qualquer tipo.
// Esse é o lado ruim do Typescript. O any tira todo conceito do typescript que é justamente tipar os elementos.
let valorString2: string = 'testao';
valorString2 = valorAny;


function somaString(string1: string, string2: string) {
    console.log(string1 + string2);
}

somaString(valorString, valorString2);

// Então a dica é não utilizar o tipo any.