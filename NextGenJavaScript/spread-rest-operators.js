/*
- É apenas um operator: ´...´
- Porém depende nos casos em que se utiliza.
- Spread é utilizado para dividir elementos de um array ou propriedades de um objeto
- Rest é utilizado para juntar uma lista de argumentos de funções num array
*/

// Utilização do Spread
const newArray = [...oldArray, 1, 2]; //pega os elementos do array antigo e adiciona-os no novo array
const newObject = {...oldObject, newProp: 5}; //cria um novo objeto com as propriedades do objeto antigo

// Utilização do Rest
function sortArgs(...args) {
    return args.sort();
}

// Exemplificação do Spread com arrays
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers); // [1, 2, 3, 4]

// Exemplificação do Spread com objetos
const person = {
    name: 'Douglas'
};
const newPerson = {
    ...person,
    age: 21
};
console.log(newPerson); //age: 28, name: "Douglas"

// Exemplificação do Rest
const filter = (...args) => {
    return args.filter(el => el === 1);
    //no parâmetro do filter, há uma arrow function 
    //retorna true ou false se o elemento for 1
}
console.log(filter(1, 2, 3));