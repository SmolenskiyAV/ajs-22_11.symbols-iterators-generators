
import {Person, Team, canIterate} from './basic';


// ### Task 11.1 ###

const pers1 = new Person('Andy', 'Dworf', 200, 1, 500, 600);
const pers2 = new Person('Tom', 'Undead', 100, 4, 300, 200);
const pers3 = new Person('Fred', 'Bowman', 250, 3, 400, 350);

let team = new Team();

team.add(pers1);
team.add(pers2);
team.add(pers3);

console.log('********* Исходный объект Team **********')
console.log(team);
console.log();

console.log('########## Возврат содержимого объекта Team ###########')
console.log([...team]);
console.log();

// ### Task 11.2 ###

console.log('********* Проверка на итерируемость **********')
console.log(canIterate(team));
console.log();

console.log(canIterate(pers1));
