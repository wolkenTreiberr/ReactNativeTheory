/*

████████╗██╗░░░██╗██████╗░███████╗░██████╗  ░█████╗░███╗░░██╗██████╗░  ███████╗███╗░░██╗██╗░░░██╗███╗░░░███╗░██████╗
╚══██╔══╝╚██╗░██╔╝██╔══██╗██╔════╝██╔════╝  ██╔══██╗████╗░██║██╔══██╗  ██╔════╝████╗░██║██║░░░██║████╗░████║██╔════╝
░░░██║░░░░╚████╔╝░██████╔╝█████╗░░╚█████╗░  ███████║██╔██╗██║██║░░██║  █████╗░░██╔██╗██║██║░░░██║██╔████╔██║╚█████╗░
░░░██║░░░░░╚██╔╝░░██╔═══╝░██╔══╝░░░╚═══██╗  ██╔══██║██║╚████║██║░░██║  ██╔══╝░░██║╚████║██║░░░██║██║╚██╔╝██║░╚═══██╗
░░░██║░░░░░░██║░░░██║░░░░░███████╗██████╔╝  ██║░░██║██║░╚███║██████╔╝  ███████╗██║░╚███║╚██████╔╝██║░╚═╝░██║██████╔╝
░░░╚═╝░░░░░░╚═╝░░░╚═╝░░░░░╚══════╝╚═════╝░  ╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░  ╚══════╝╚═╝░░╚══╝░╚═════╝░╚═╝░░░░░╚═╝╚═════╝░

    В этом разделе ты узнаешь:
- что такое константы и переменные
- почему TypeScript является строго типизированным языком
- какие типы данных имеются в TypeScript и как с ними работать
- как проверить тип переменной
- что такое Enums и Tuple

    Внимательно изучи соответствующий материал официальной документации и переходи к парктическим заданиям:
--> https://www.typescriptlang.org/docs/handbook/basic-types.html <--
--> https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases <--
*/
/*
        Задание 1
    ~ Объявить переменные ВСЕХ возможных типов и присвоить им значения.
    ~ Присвоить ранее объявленной переменной значение другого типа (Что будет в этом случае? Будет ли ошибка компиляции?)
    ~ Вывести в консоль значение каждой переменной с указанием ее имени (формат сообщения '<name> = <value>')
*/
// //1 Boolean type
// let isStuding: boolean = true;
// console.log(`isStuding = ${isStuding}`);
// //2 Number type
// const userAge: number = 23;
// console.log(`userAge = ${userAge}`);
// //3 String type
// const userName: string = 'Illia';
// console.log(`userName = ${userName}`);
// //4 Array type
// let someArr: Array<number> = [1, 2, 3];
// console.log(`someArr = ${someArr}`);
// //5 Tuple type
// let someArrWithTwoTypes: [string, number] = ['str', 1];
// console.log(`someArrWithTwoTypes = ${someArrWithTwoTypes}`);
// //6 Enum type
// enum Directions {
//     Forward = 1,
//     Backward,
//     Left,
//     Right,
//   }
// let c: Directions = Directions.Backward;
// console.log(`c = ${c}`);
// //7 Unknown type 
// let notSure: unknown = 4;
// console.log(`notSure = ${notSure}`);
// //8 Any type
// let someVariable: any = true;
// console.log(`someVariable = ${someVariable}`);
// //9 Void type
// let unusable: void = undefined;
// console.log(`unusable = ${unusable}`);
// //10 Undefined type
// const u: undefined = undefined;
// console.log(`u = ${u}`);
// //11 Null type
// const n: null = null;
// console.log(`n = ${n}`);
// //12 Object type
// const someObj: object = {a: 1}
// console.log(`someObj = ${someObj}`);
/*
        Задание 2
    ~ Написать функцию принимающую в качестве аргументов два числа, которая возвращает их сумму
    ~ Объявить три константы a = 5, b = 7, eight = '8'
    ~ Написать проверку типов аргументов функции и в случае передачи константы eight выводить ошибку "Incorrect input!"
*/
// function sumOfNums(firstNum, secondNum) {
//     if(typeof firstNum === 'string' || typeof secondNum === 'string') {
//         throw new Error('Incorrect input!');
//     }
//     return firstNum + secondNum;
// }
// const a = 5;
// const b = 7;
// const eight = '8';
// console.log(sumOfNums(a,b));
// console.log(sumOfNums(eight, b));
/*
        Задание 3
    ~ Объявить переменную A типа any и задать ей значение 'example'
    ~ Написать функцию, которая проверит, что А не является чем-то из следующего списка null, undefined, NaN, '', 0, false
*/
// let A: any = 'example';
// function isFalsy(variable){
//     if(variable){
//         return false;
//     }
//     return true;
// }
// console.log(isFalsy(A))
// A = null;
// console.log(isFalsy(A))
// A = undefined;
// console.log(isFalsy(A))
// A = NaN;
// console.log(isFalsy(A))
// A = 0;
// console.log(isFalsy(A))
// A = '';
// console.log(isFalsy(A))
// A = false;
// console.log(isFalsy(A))
/*
        Задание 4
    ~ Написать функцию combine с аргументами, которые могут быть как типа number так и string.
    ~ Третим аргументом передаем параметр со значениями 'as-number' или 'as-string'.
    ~ При значении 'as-number' выводить сумму чисел, при 'as-string' объединение строк.
*/
// function combine(firstArg: number | string , secondArg : number | string , typeOfCombine: string) {
//     if(typeOfCombine === 'as-number'){
//         return Number(firstArg) + Number(secondArg);
//     } else if(typeOfCombine === 'as-string'){
//         return firstArg.toString() + secondArg.toString();
//     }
// }
// console.log(combine(1, 2, 'as-number'));
// console.log(combine(1,'2', 'as-string'));
// console.log(combine('1','2', 'as-number'));
// console.log(combine(1, 2, 'as-string'));
/*
        Задание 5
    ~ Объявить переменную A типа any и задать ей значение 'example'. Объявить константу типа Tuple с кодом ошибки и ее текстом
    ~ Написать функцию, которая проверит, что А не является чем-то из следующего списка null, undefined, NaN, '', 0, false
    ~ Если условие не выполняется вывести код и текст ошибки консоль
    ~ Проверить работу функции присвоив переменной А значение undefined
*/
// let A: any = 'example';
// let err: [number, string] = [10, 'Variable is falsy!'];
// function isFalsy(variable){
//         if(variable){
//             return;
//         }
//         console.log(`Error code: ${err[0]}: ${err[1]}`);
//     }
//     console.log(isFalsy(A));
//     A = undefined;
//     console.log(isFalsy(A));
/*
        Задание 6
    ~ Создать объект person cо свойствами: имя, возраст, пол, роль (Администратор, Автор, Модератор). Например (Jon, 19 years, men, Author).
    ~ Для свойства Роль использовать enum.
    ~ Вывести в консоль название свойства и его значение. Каждое свойство на новой строке.
*/
// enum Role {
//     Admininistrator,
//     Author,
//     Moderator,
// }
// let person = {
//     name: 'Jon',
//     age: '19 years',
//     sex: 'men',
//     role: Role[1]
// }
// for(let key in person){
//     console.log(`${key}: ${person[key]}`)
// }
/*
        Задание 7
    ~ Перечислению (Enum) Роль с предыдущего задания присвоить текстовые значения.
    ~ Создать несколько объектов подобных объекту person с Задания 6 c разными ролями.
    ~ Написать функцию которая принимает массив объектов и выводит в консоль сообщения следующего вида "My name is {name}. I am {role}" для каждого объекта.

*/
// enum Role {
//     Admininistrator = 'administrator',
//     Author = 'author',
//     Moderator = 'moderator',
// }
// let arrayOfPersons =[
//     {
//         name: 'Jack',
//         age: '19 years',
//         sex: 'men',
//         role: Role.Admininistrator
//     },
//     {
//         name: 'Tiffany',
//         age: '20 years',
//         sex: 'women',
//         role: Role.Author
//     },
//     {
//         name: 'Tony',
//         age: '23 years',
//         sex: 'men',
//         role: Role.Moderator
//     },
// ]
// function personsGreeting(arr){
// for(let key in arr){
//     console.log(`My name is ${arr[key].name}. I am ${arr[key].role}.`)
// }
// }
// personsGreeting(arrayOfPersons);
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
// function sumOfNums(firstNum, secondNum) {
//     if(typeof firstNum === 'string' || typeof secondNum === 'string') {
//         throw new Error('Incorrect input!');
//     }
//     return firstNum + secondNum;
// }
// function addAndHandle(firstNum, secondNum, callback){
//  return callback(firstNum, secondNum);
// }
// addAndHandle(10, 20, (sumOfNums) => {
//     console.log(sumOfNums)
// })
/*
        Задание 9
    ~ Написать функцию, с возвращаемым значением типа never
*/
// function neverEnds(): never {
//     while (true) {}
// }
/*
        Задание 10
    ~ Создать вычисляемое перечисление с городами (Харьков, Киев, Львов, Одесса) и их почтовыми индексами.
    ~ Написать функцию. которая возвращает индекс города.
    ~ Вывести в консоль города с индексами.
*/
// enum Cities {
//     Kharkiv = '61000',
//     Kiev = '01001',
//     Lviv = '79007',
//     Odessa = '65125',
// }
// function getPostalCodeOfCity(city){
//     return Cities[city];
// }
// console.log(`Kharkiv: ${getPostalCodeOfCity('Kharkiv')}`);
// console.log(`Kiev: ${getPostalCodeOfCity('Kiev')}`);
// console.log(`Lviv: ${getPostalCodeOfCity('Lviv')}`);
// console.log(`Odessa: ${getPostalCodeOfCity('Odessa')}`);
/*
        Задание 11
    ~ Создай 5 строк с названием стран
    ~ Если в названии страны встречается буква А, выведи ее нзавание в консоль
*/
var america = 'America';
var africa = 'Africa';
var ukraine = 'Ukraine';
var belorus = 'Belorus';
var canada = 'Canada';
function isInclude(str) {
    if (str.includes('A')) {
        console.log(str);
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
//Добавить код сюда...
/*
        Задание 13
    ~ Написать метод without, который будет принимать объект со свойствами разных типов и тип.
    ~ Метод without должен вернуть копию объекта, но уже без свойств переданного типа .
*/
//Добавить код сюда...
/*
        Задание 14
    ~ Написать функцию isEmpty, которая проверяет пустой ли объект, независимо от его вложенности. Должен венуть true для объектов { a: { b: undefined }, { a: { b: [] } }, {}, { a: { b: [ { c: [] } ] } }
*/
//Добавить код сюда...
