const button = document.getElementById('button');
const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;

function adicionarNumeros(num1: number, num2: number, devePrintar: boolean, frase: string) {
    let resultado = num1 + num2
    if(devePrintar) {
        console.log(frase + resultado);
    }
    return num1 + num2;
}

const devePrintar = true; // Não podemos reatribuir um valor de um tipo diferente a uma variável em TS.
let frase: string; // Podemos antes definir o tipo
frase = "O valor é: "; // e depois o valor da variável


if(button) {
    button.addEventListener('click', () => {
        if(input1 && input2) {
            console.log(adicionarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    })
}