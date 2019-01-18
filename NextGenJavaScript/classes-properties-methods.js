/*
- Propriedades são como variáveis anexadas às classes/objetos.
- Métodos são funções anexadas às classes/objetos.
*/

// Na sintaxe antiga, era preciso codificar um construtor para criar propriedades
class Person {
    constructor() {
        this.property = 'value';
    }
}
// Na nova geração, não é mais preciso realizar o constructor
class Person {
    myProperty = 'value';
}

// Os métodos eram desenvolvidos dessa maneira
class Person{
    myMethod() {
        //...
    }
}

// Atualmente, é feito com uma arrow function
class Person {
    myMethod = () => {
        //...
    }
}

// Utilizando as classes Human e Person com a sintaxe atualizada
class Human {
    // não é mais preciso colocar o constructor
    gender = 'male';
    
    // transformando o método com uma arrow function
    printGender = () => {
      console.log(this.gender);
    }
  }
  
  class Person extends Human {
    // tirando o constructor e o super()
    name = 'Douglas';
    gender = 'female';
    
    // método com uma arrow function
    printMyName = () => {
      console.log(this.name);
    }
  }
  const person = new Person();
  person.printMyName();
  person.printGender();