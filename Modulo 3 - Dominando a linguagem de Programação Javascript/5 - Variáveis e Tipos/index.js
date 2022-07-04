// Hoisting - Atribuir um valor a uma varável antes mesmo de declará-la
numberOne = 1;

console.log(numberOne + 2);

var numberOne; // se for let é preciso declarar antes, se fosse var o JS colocar o var no começo do código automaticamente.

var firstName = 'Joao';
var lastName = 'Souza';

if(firstName === 'Joao') {
    var firstName = 'Pedro'; // como é var, irá assumir esse novo nome
    let lastName = 'Silva'; // esse tem escopo de bloco.
}

console.log(firstName, lastName);

const FIRST_NAME = 'Vinícius'; // é convenção que constantes sejam declaradas com letras maiúsculas e precisa da sua inicialização antes de ser acessada. Não tem hoisting

