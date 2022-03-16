

// ### Task 11.1 ###

export class Person { // класс-шаблон для объектов персонажей
  
  constructor(name, type, health, level, attack, defence) {
    this.name = name,
    this.type = type,
    this.health = health,
    this.level = level,
    this.attack = attack,
    this.defence = defence
  };
};

export class Team {   // целевой класс для хранения объектов персонажей
  
  constructor() {
    this.arrObjects = [];
  };

  add(obj) {
    this.arrObjects.push(obj);
  };
  
  *[Symbol.iterator]() {  // формирование свойства итерации объекта с помощью функции-генератора
    // это генератор
    // и здесь есть доступ к this
    
    for(let value of this.arrObjects) {
      yield value;
    };
  };
};

// ### Task 11.2 ###

export function canIterate(value) { // функция проверки объекта на итерируемость

  if (value == null) {
    return false;
  };
  return typeof value[Symbol.iterator] === 'function';
};