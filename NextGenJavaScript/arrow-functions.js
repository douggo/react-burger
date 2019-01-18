/*
- Arrow function é uma sintaxe diferente para criação de funções em JavaScript.
- Os parâmetros irão dentro dos `()`.
- É mais curta e resolve um monte de coisas envolvendo a palavra `this` no JavaScript.
- Ao utilizar `this` numa arrow function, ela sempre será utilizado no seu contexto.
*/

// Criando uma função na sintaxe antiga
function printMyName(name) {
    console.log(name);
}
printMyName('Douglas'); // Douglas

// Criando a mesma função, porém com uma arrow function
const printMyName = (name) => {
    console.log(name);
}  
printMyName('Douglas'); // Douglas

// Sobre os argumentos/parâmetros numa arrow function
    // Se houver apenas um argumento, não é necessário colocar os parênteses
    const printMyName = name => {
        console.log(name);
    }  
    printMyName('Douglas'); // Douglas

    // Se não houver nenhum argumento, é preciso colocar os parênteses
    const printMyName = () => {
        console.log('Douglas');
    }  
    printMyName(); // Douglas

    // Se houverem mais de um argumento, é necessário colocar entre parênteses, entre vírgulas
    const printMyName = (name, age) => {
        console.log(name, age);
    }
    printMyName('Douglas', 21); // Douglas & 21

    // Para funções que apenas precisam retornar algo
        // Método padrão
        const multiply = (number) => {
            return number * 2;
        }
        console.log(multiply(2)); // 4
    
        // Neste outro caso, precisa-se remover os colchetes e retirar a palavra return
        const multiply = (number) => number * 2;
        console.log(multiply(2)); //4