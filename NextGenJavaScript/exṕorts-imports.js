/* 
- A nova geração do JavaScript você pode escrever códigos em forma de módulos.
- Precisa-se apenas realizar a importação e a exportação desses códigos.
- Para o default import, você escolhe o nome
- Para o named import, você precisa utilizar o nome definido no export
*/

//Realizando a exportação padrão, de um arquivo chamado `person.js`
const person = {
    name: 'Douglas'
}
export default person;

//Exportando vários elementos de um arquivo `utility.js`
export const clean = () => {
    //...
}
export const baseData = 10;

//Realizando a importação para um arquivo `app.js`
import person from './person.js'; //utilizando o default keyword do `person.js`
import prs from './person.js'; //como está utilizando default, ele pega o export padrão do ´person.js´
import { baseData } from './utility.js'; //pega direto o `baseData` do `utility.js`
import { clean } from './utility.js'; //pega direto o `clean` do `utility.js`

//Variações
import { smth as Smth } from '.utility.js'; //apesar de ter nome pré-definido, é possível definir outro
import * as bundled from './utility.js' //importa tudo de um arquivo para um objeto com nome de bundled