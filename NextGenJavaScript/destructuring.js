/*
- Com o destructuring é possível extrair elementos de um array ou propriedades de objetos inserindo-os
  em variáveis.
*/

// Funcionamento em arrays
[a, b] = ['Hello', 'Douglas'];
console.log(a); // Hello
console.log(b); // Douglas

// Funcionamento em objetos
//{name} = {name: 'Douglas', age: 21};
console.log(name); // Douglas
console.log(age); // undefined

// Utilização
const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2); // 1 e 2

// Pegando o primeiro e terceiro elemento de um array
const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3); //1 e 3

// 