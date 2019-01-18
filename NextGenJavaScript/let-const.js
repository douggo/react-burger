/* 
- Na nova versão do JavaScript o var ainda funciona, mas é bom já realizar o desenvolvimento
    através das palavras abaixo, `let` e `const`.
- Let para valores variáveis.
- Const para valores constantes.
*/

// Na versão antiga do JavaScript:
var myName = 'Douglas';
console.log(myName);
myName = 'Aleatório';
console.log(myName);

// Na nova versão do JavaScript:
    // Com o let código será executado com sucesso, já que o let deixa as variáveis receberem valores
    let myName = 'Douglas';
    console.log(myName);
    myName = 'Aleatório';
    console.log(myName);

    // Com o const, o resultado no segundo log é um erro, já que `myName` é uma constante
    const myName = 'Douglas';
    console.log(myName);
    myName = 'Aleatório';
    console.log(myName);