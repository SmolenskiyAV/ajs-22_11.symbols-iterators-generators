import {Person, Team, canIterate} from '../basic';


// проверка вывода содержимого объекта через генератор
test('shoud check return content by generator', () => {

  const pers1 = new Person('Andy', 'Dworf', 200, 1, 500, 600);
  const pers2 = new Person('Tom', 'Undead', 100, 4, 300, 200);
  
  let team = new Team();
  team.add(pers1);
  team.add(pers2);

  const result = [...team];
  expect(result).toEqual([
    {
      "attack": 500, 
      "defence": 600, 
      "health": 200, 
      "level": 1, 
      "name": "Andy", 
      "type": "Dworf"
    }, 
      
    {
      "attack": 300, 
      "defence": 200, 
      "health": 100, 
      "level": 4, 
      "name": "Tom", 
      "type": "Undead"
    }
  ])
});

// проверка объекта на итерируемость
test('shoud check object for itarable', () => {

  const pers1 = new Person('Andy', 'Dworf', 200, 1, 500, 600);
  const pers2 = new Person('Tom', 'Undead', 100, 4, 300, 200);
  
  let team = new Team();
  team.add(pers1);
  team.add(pers2);

  const result = canIterate(team);
  expect(result).toBe(true);
});