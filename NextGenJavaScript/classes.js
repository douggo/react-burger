/*
- Na nova geração do JavaScript, é possível criar classes.
- Uma classe é criada com a keyword class.
- Uma classe pode conter propriedades e métodos.
- Uma classe é instânciada com a keyword new.
- No JavaScript é possível utilizar a herança.
*/

//Criando uma classe
class Person {
    constructor() {
      this.name = 'Douglas';
    }
    
    printMyName() {
      console.log(this.name);
    }
  }
const person = new Person();
person.printMyName();

//Utilizando herança
class Human {
    constructor() {
      this.gender = 'male';
    }
    
    printGender() {
      console.log(this.gender);
    }
}
class Person extends Human {
    constructor() {
      super(); //já que extends, é preciso colocar super() para executar os métodos da classe Human
      this.name = 'Douglas';
      this.gender = 'female';
    }
    
    printMyName() {
      console.log(this.name);
    }
} 
const person = new Person();
person.printMyName(); // Douglas
person.printGender(); // female