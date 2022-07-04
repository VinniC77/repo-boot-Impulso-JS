// Array

// let array = ['string', 1, true];
// console.log(array);

// pode guardar varios tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'],['array3'],['array4']];
// console.log(array[0]);

// Manipulando array
// forEach
// array.forEach(function(item, index) { // para cada um
//     console.log(item, index); // ele imprimiu os valores e indices
// })

// push
// array.push('novo item') // adiciona um novo item no final do array
// console.log(array);

// pop
// array.pop() // remove um item no final do array
// console.log(array);

// shift
// array.shift() // remove um item no inicio do array
// console.log(array);

// unshift
// array.unshift('item no inicio') // adiciona um item no inicio do array
// console.log(array);

// indexOf - retorna o indice de um item no array
// console.log(array.indexOf(true));

// splice - remove ou substitue um item por um indice e devolve um novo array
// array.splice(0 ,3);
// console.log(array);

// slice - retorna uma parte de um array já existente
// let novoArray = array.slice(0, 3);
// console.log(novoArray);

// Objetos - propriedades e valores
let object = {string: 'string', number: 1, booleana: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'}}

// Acessando uma propriedade de um Objeto
// console.log(object.booleana);

// Desestruturação do Objeto
// var string = object.string;
// console.log(string);

// var array1 = object.array;
// console.log(array1);

// Outra forma de fazer Desestruturação
var { string, booleana, objectInterno } = object;
console.log(string, booleana, objectInterno);