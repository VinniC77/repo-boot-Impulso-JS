// O objetivo do exrcício é resulver um palindromo (quando uma palavra ou frase é igual de frente pra trás e de trás pra frente)

// Solução 1
function verificaPalindromo(string) {
    if(!string) return "Essa palavra não é um palíndromo";
    
    return string.split("").reverse().join("") === string // split para separar letra por letr no caseo, reverse reverter a ordem das letras e join para juntar os elementos do array
}

console.log(verificaPalindromo('arara'));

// Solução 2

function verificaPalindromo2(string) {
    if(!string) return "Essa palavra não é um palíndromo";
    // o length é /2, pois como a comparação é da primeira letra com a última e assim por diante, o numeor de indices é pela metade
    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2('abba'));