/* 
- Primitive: strings, booleans, numbers.
- Reference: quando você referencia o valor de uma variável para outra variável.
- Objetos e arrays são tipos de reference.
- Já que objetos e arrays são reference, somente será copiado o pointer causando problemas inesperados
*/

// Explicação
const number = 1;
const num2 = number; //REFERENCE
console.log(num2); //1

// O objeto secondPerson não copiará o primeiro objeto, apenas o pointer será copiado
const person = {
    name: 'Douglas'
};
const secondPerson = person;
console.log(secondPerson) //name: Douglas;

// Se tentarmos trocar o nome da person, o secondPerson também será mudado *POINTER*
const person = {
    name: 'Douglas'
};
const secondPerson = person;
person.name = 'Aleatório';
console.log(secondPerson) //name: Aleatório;

// É possível resolver isso criando um novo objeto porém importando as propriedades do objeto anterior
const person = {
    name: 'Douglas'
};
const secondPerson = {
    ...person // copiando as propriedades
};
person.name = 'Aleatório';
console.log(secondPerson); // name: Douglas