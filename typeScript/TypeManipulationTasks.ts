/*  
        Задание 1 
    ~ Объявить несколько массивов разного типа
    ~ Написать функцию, которая будет возвращать рандомный элемент этого массива используя generic type
*/

let arrayOfNumbers: Array<number> = [1, 2, 3, 4];
let arrayOfStrings: Array<string> = ['a', 'b', 'c'];

function getRandomElement<T>(array: T[]): T | null {
  function randomNumber(min: number, max: number): number {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  let randomElemetIndexValue = randomNumber(0, array.length);

  return array[randomElemetIndexValue];
}

console.log(getRandomElement(arrayOfNumbers));
console.log(getRandomElement(arrayOfStrings));

/*  
        Задание 2 
    ~ Функция myFilter повторяет функционал стандартной функции filter.
    ~ Раскомментировать код.
    ~ Добавить в функцию аннотацию типов с использованием generic type
    ~ Вывести результат работы функции в консоль
*/

function myFilter<T>(arr: Array<T>, predicate: (value: T) => any): T[] {
  const result = [];
  for (const elm of arr) {
    if (predicate(elm)) {
      result.push(elm);
    }
  }
  return result;
}

// Пример использования
const res = myFilter([1, 2, 3, 4, 5], (num) => num % 2 === 0);
const res2 = myFilter(['foo', 'hoge', 'bar'], (str) => str.length >= 4);
/*  
        Задание 3 
    ~ Раскомментировать код.
    ~ Определить тип Price
    ~ Написать пример и вывести в консоль результат использования функции
*/

type Price = {
  speed: 'low' | 'medium' | 'high';
};

function getPrice(price: Price): number {
  switch (price.speed) {
    case 'low':
      return 50;
    case 'medium':
      return 100;
    case 'high':
      return 150;
  }
}

console.log(getPrice({ speed: 'low' }));
console.log(getPrice({ speed: 'medium' }));
console.log(getPrice({ speed: 'high' }));

/*  
        Задание 4
    ~ Раскомментировать код.
    ~ Определить и указать тип функции addAge, которая добавляет к объекту новое свойство age.
    ~ Вывести в консоль результат использования функции
*/

function addAge(obj: object): object {
  const age = 25;
  return {
    ...obj,
    age
  };
}

console.log(addAge({ name: 'Phillip', height: 175, weight: 73 }));

/*  
        Задание 5
    ~ Раскомментировать код.
    ~ Определить и указать тип аргументов функции reducer.
    ~ action.type может быть только трех видов (increment, decrement, reset)
*/

type Action = {
  type: 'increment' | 'decrement' | 'reset';
  amount: number;
  value?: number;
};

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case 'increment':
      return state + action.amount;
    case 'decrement':
      return state - action.amount;
    case 'reset':
      return action.value;
  }
};

// Пример использования

reducer(100, {
  type: 'increment',
  amount: 10
}) === 110; //true

/*  
        Задание 6
    ~ Дано два типа Keys и Accessors
    ~ Получить из существующих типов тип Methods ("getName" | "getAddress" | "setName" | "setAddress") применяя Manipulation Types
*/

type Keys = 'name' | 'address';
type Accessors = 'get' | 'set';

type CapitalizedAccesors = Capitalize<`${Keys}`>;

type Methods = `${Accessors}${CapitalizedAccesors}`;

/*  
        Задание 7
    ~ Дан тип с опциональными свойствами
    ~ На основании типа User создать тип без опциональных свойств
    ~ Использовать модификаторы типа 
*/

type User = {
  id: string;
  name: string;
  age?: number;
  sex?: string;
};

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type AddModifiers<Type> = {
  readonly [Property in keyof Type]: Type[Property];
};

type UserWithoutModifiers = Concrete<User>;
type TypicalUser = AddModifiers<UserWithoutModifiers>;
