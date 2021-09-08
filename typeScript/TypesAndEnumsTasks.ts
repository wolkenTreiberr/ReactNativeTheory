/*  
        Задание 1 
    ~ Объявить переменные ВСЕХ возможных типов и присвоить им значения.
    ~ Присвоить ранее объявленной переменной значение другого типа (Что будет в этом случае? Будет ли ошибка компиляции?)
    ~ Вывести в консоль значение каждой переменной с указанием ее имени (формат сообщения '<name> = <value>')
*/

let isStuding: boolean = true;
console.log(`isStuding = ${isStuding}`);

const userAge: number = 23;
console.log(`userAge = ${userAge}`);

const userName: string = 'Illia';
console.log(`userName = ${userName}`);

let someArray: Array<number> = [1, 2, 3];
console.log(`someArray = ${someArray}`);

let someArrayWithTwoTypes: [string, number] = ['str', 1];
console.log(`someArrayWithTwoTypes = ${someArrayWithTwoTypes}`);

enum Directions {
  Forward = 1,
  Backward,
  Left,
  Right
}
let currentDirection: Directions = Directions.Backward;
console.log(`currentDirection = ${currentDirection}`);

let notSure: unknown = 4;
console.log(`notSure = ${notSure}`);

let canBeAnything: any = true;
console.log(`canBeAnything = ${canBeAnything}`);

let unusable: void = undefined;
console.log(`unusable = ${unusable}`);

const undefinedType: undefined = undefined;
console.log(`undefinedType = ${undefinedType}`);

const nullType: null = null;
console.log(`nullType = ${nullType}`);

const someObject: object = { a: 1 };
console.log(`someObject = ${someObject}`);

const neverEnds = function (): never {
  while (true) {}
};

/*  
        Задание 2 
    ~ Написать функцию принимающую в качестве аргументов два числа, которая возвращает их сумму
    ~ Объявить три константы a = 5, b = 7, eight = '8'  
    ~ Написать проверку типов аргументов функции и в случае передачи константы eight выводить ошибку "Incorrect input!"
*/

function sumOfNumbers(firstNumber, secondNumber): number {
  if (typeof firstNumber === 'string' || typeof secondNumber === 'string') {
    throw new Error('Incorrect input!');
  }
  return firstNumber + secondNumber;
}

const a = 5;
const b = 7;
const eight = '8';

console.log(sumOfNumbers(a, b));
console.log(sumOfNumbers(eight, b));

/*  
        Задание 3 
    ~ Объявить переменную A типа any и задать ей значение 'example'
    ~ Написать функцию, которая проверит, что А не является чем-то из следующего списка null, undefined, NaN, '', 0, false 
*/

let A: any = 'example';

function isFalsy(variable: any): boolean {
  if (variable) {
    return false;
  }
  return true;
}

console.log(isFalsy(A));
A = null;
console.log(isFalsy(A));
A = undefined;
console.log(isFalsy(A));
A = NaN;
console.log(isFalsy(A));
A = 0;
console.log(isFalsy(A));
A = '';
console.log(isFalsy(A));
A = false;
console.log(isFalsy(A));

/*  
        Задание 4 
    ~ Написать функцию combine с аргументами, которые могут быть как типа number так и string. 
    ~ Третим аргументом передаем параметр со значениями 'as-number' или 'as-string'.
    ~ При значении 'as-number' выводить сумму чисел, при 'as-string' объединение строк. 
*/

function combine(
  firstArg: number | string,
  secondArg: number | string,
  typeOfCombine: string
): number | string {
  if (typeOfCombine === 'as-number') {
    return Number(firstArg) + Number(secondArg);
  } else if (typeOfCombine === 'as-string') {
    return firstArg.toString() + secondArg.toString();
  }
  return;
}

console.log(combine(1, 2, 'as-number'));
console.log(combine(1, '2', 'as-string'));
console.log(combine('1', '2', 'as-number'));
console.log(combine(1, 2, 'as-string'));

/*  
        Задание 5 
    ~ Объявить переменную A типа any и задать ей значение 'example'. Объявить константу типа Tuple с кодом ошибки и ее текстом
    ~ Написать функцию, которая проверит, что А не является чем-то из следующего списка null, undefined, NaN, '', 0, false
    ~ Если условие не выполняется вывести код и текст ошибки консоль
    ~ Проверить работу функции присвоив переменной А значение undefined
*/

let AA: any = 'example';
let onError: [number, string] = [10, 'Variable is falsy!'];

function isFalsy2(variable: any): void {
  if (variable) {
    return;
  }
  console.log(`Error code: ${onError[0]}: ${onError[1]}`);
}

console.log(isFalsy2(AA));
A = undefined;
console.log(isFalsy2(AA));

/*  
        Задание 6 
    ~ Создать объект person cо свойствами: имя, возраст, пол, роль (Администратор, Автор, Модератор). Например (Jon, 19 years, men, Author).
    ~ Для свойства Роль использовать enum.
    ~ Вывести в консоль название свойства и его значение. Каждое свойство на новой строке.
*/

enum Role {
  Admininistrator,
  Author,
  Moderator
}

let person = {
  name: 'Jon',
  age: '19 years',
  sex: 'men',
  role: Role[1]
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

/*  
        Задание 7 
    ~ Перечислению (Enum) Роль с предыдущего задания присвоить текстовые значения.
    ~ Создать несколько объектов подобных объекту person с Задания 6 c разными ролями.
    ~ Написать функцию которая принимает массив объектов и выводит в консоль сообщения следующего вида "My name is {name}. I am {role}" для каждого объекта.

*/

enum Role {
  Admininistratorr = 'administrator',
  Authorr = 'author',
  Moderatorr = 'moderator'
}

let arrayOfPersons = [
  {
    name: 'Jack',
    age: '19 years',
    sex: 'men',
    role: Role.Admininistratorr
  },
  {
    name: 'Tiffany',
    age: '20 years',
    sex: 'women',
    role: Role.Authorr
  },
  {
    name: 'Tony',
    age: '23 years',
    sex: 'men',
    role: Role.Moderatorr
  }
];

function greet(persons): void {
  for (let key in persons) {
    console.log(`My name is ${persons[key].name}. I am ${persons[key].role}.`);
  }
}

greet(arrayOfPersons);

/*  
        Задание 8
    ~ Используйте функцию с Задания 2 для сложения двух чисел. 
    ~ Написать функцию addAndHandle, которая будет возвращать результат вычисления в качестве Callback.
    ~ Явно указать тип возвращаемого значения для функций
    ~ Итоговый вызов функции должен иметь следующий вид:
        addAndHandle(10, 20, (result) => {
            console.log(result)
        })

*/

function addAndHandle(
  firstNumber: number,
  secondNumber: number,
  callback: Function | null
): object {
  return callback(sumOfNumbers(firstNumber, secondNumber));
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

/*  
        Задание 9
    ~ Написать функцию, с возвращаемым значением типа never
*/

function endlessLoop(): never {
  while (true) {}
}

/*  
        Задание 10
    ~ Создать вычисляемое перечисление с городами (Харьков, Киев, Львов, Одесса) и их почтовыми индексами.
    ~ Написать функцию. которая возвращает индекс города.
    ~ Вывести в консоль города с индексами. 
*/

enum Cities {
  Kharkiv = '61000',
  Kiev = '01001',
  Lviv = '79007',
  Odessa = '65125'
}

function getPostalCodeOfCity(city: string): string {
  return Cities[city];
}

console.log(`Kharkiv: ${getPostalCodeOfCity('Kharkiv')}`);
console.log(`Kiev: ${getPostalCodeOfCity('Kiev')}`);
console.log(`Lviv: ${getPostalCodeOfCity('Lviv')}`);
console.log(`Odessa: ${getPostalCodeOfCity('Odessa')}`);

/*
        Задание 11
    ~ Создай 5 строк с названием стран
    ~ Если в названии страны встречается буква А, выведи ее нзавание в консоль
*/

let america = 'America';
let africa = 'Africa';
let ukraine = 'Ukraine';
let belorus = 'Belorus';
let canada = 'Canada';

function isInclude(string): void {
  if (string.includes('A')) {
    console.log(string);
  }
}

isInclude(america);
isInclude(africa);
isInclude(ukraine);
isInclude(belorus);
isInclude(canada);

/*  
        Задание 12
    ~ Объявить несколько массивов типа number и заполнить их разным количеством элементов.
    ~ Объявить Tuple в который можно передать любой из объявленных массивов и текстовое значение.
    ~ Создать функцию в качестве аргумента которой созданный Tuple. Вывести в консоль текстовое значение из Tuple и количество элементов массива цифр
*/

let firstArr: Array<number> = [1, 2, 3, 4, 5];
let secondArr: Array<number> = [1, 2, 3, 4, 5, 6, 7];
let tupleArr: [Array<number>, string];

function getArrayLength(tuple): void {
  console.log(`${tuple[1]}${tuple[0].length}`);
}

tupleArr = [firstArr, 'first array length is: '];
getArrayLength(tupleArr);

tupleArr = [secondArr, 'second array length is: '];
getArrayLength(tupleArr);

/*  
        Задание 13
    ~ Написать метод without, который будет принимать объект со свойствами разных типов и тип.
    ~ Метод without должен вернуть копию объекта, но уже без свойств переданного типа .
*/

let human = {
  name: 'John',
  age: 25,
  isSmart: false,
  skills: ['skill-1', 'skill-2']
};

function without(obj: object, type) {
  let newObj = {};

  for (let key in obj) {
    if (typeof obj[key] === type) {
      continue;
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

console.log(without(human, 'boolean'));
console.log(without(human, 'object'));

/*  
        Задание 14
    ~ Написать функцию isEmpty, которая проверяет пустой ли объект, независимо от его вложенности. Должен венуть true для объектов { a: { b: undefined }, { a: { b: [] } }, {}, { a: { b: [ { c: [] } ] } }
*/

const isEmpty = (obj: { [key: string]: any }): boolean => {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      return isEmpty(obj[key]);
    }
    if (obj[key] === undefined) {
      return true;
    }
    return false;
  }
  return true;
};
