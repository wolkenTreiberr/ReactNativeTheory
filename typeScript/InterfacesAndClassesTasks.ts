/*


██╗███╗░░██╗████████╗███████╗██████╗░███████╗░█████╗░░█████╗░███████╗░██████╗  
██║████╗░██║╚══██╔══╝██╔════╝██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝  
██║██╔██╗██║░░░██║░░░█████╗░░██████╔╝█████╗░░███████║██║░░╚═╝█████╗░░╚█████╗░  
██║██║╚████║░░░██║░░░██╔══╝░░██╔══██╗██╔══╝░░██╔══██║██║░░██╗██╔══╝░░░╚═══██╗  
██║██║░╚███║░░░██║░░░███████╗██║░░██║██║░░░░░██║░░██║╚█████╔╝███████╗██████╔╝  
╚═╝╚═╝░░╚══╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚══════╝╚═════╝░  

                    ░█████╗░███╗░░██╗██████╗░  
                    ██╔══██╗████╗░██║██╔══██╗  
                    ███████║██╔██╗██║██║░░██║  
                    ██╔══██║██║╚████║██║░░██║  
                    ██║░░██║██║░╚███║██████╔╝  
                    ╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░  

        ░█████╗░██╗░░░░░░█████╗░░██████╗░██████╗███████╗░██████╗
        ██╔══██╗██║░░░░░██╔══██╗██╔════╝██╔════╝██╔════╝██╔════╝
        ██║░░╚═╝██║░░░░░███████║╚█████╗░╚█████╗░█████╗░░╚█████╗░
        ██║░░██╗██║░░░░░██╔══██║░╚═══██╗░╚═══██╗██╔══╝░░░╚═══██╗
        ╚█████╔╝███████╗██║░░██║██████╔╝██████╔╝███████╗██████╔╝
        ░╚════╝░╚══════╝╚═╝░░╚═╝╚═════╝░╚═════╝░╚══════╝╚═════╝░

    В этом разделе ты узнаешь:
- что такое Interfaces
- основные принципы работы с Interfaces
- о Optional и Readonly свойствах Interface
- как расширить существующий Interfaces
- что такое Utility Types и как они упрощают базовые преобразования типов
- что такое классы
- что такое свойства и методы
- что такое наследование классов

    Внимательно изучи соответствующий материал официальной документации и переходи к парктическим заданиям:    
--> https://www.typescriptlang.org/docs/handbook/interfaces.html#introduction <--
--> https://www.typescriptlang.org/docs/handbook/utility-types.html <--
--> https://www.typescriptlang.org/docs/handbook/2/classes.html <--
*/

/*
        Задание 1
    ~ Раскомментировать строки кода ниже
    ~ Учитывая данные определить интерфейс User
    ~ Использовать интерфейс User
*/

// interface UserInterface {
//     name: string,
//     age: number,
//     occupation: string,
// }

// export type User = UserInterface;

// export const users: UserInterface[] = [
//   {
//     name: 'Max Mustermann',
//     age: 25,
//     occupation: 'Chimney sweep'
//   },
//   {
//     name: 'Kate Müller',
//     age: 23,
//     occupation: 'Astronaut'
//   }
// ];

// export function logPerson(user: UserInterface) {
//   console.log(` - ${user.name}, ${user.age}`);
// }

// console.log('Users:');
// users.forEach(logPerson);

/*
        Задание 2
    ~ Используем код Задания 1 (копируем, комментируем и вставляем ниже)
    ~ Добавить в массив User объекты { name: 'Jane Doe', age: 32, role: 'Administrator'},  { name: 'Bruce Willis', age: 64, role: 'World saver' }
    ~ Объявить интерфейс Admin, который бы соответствовал новым объектам
    ~ Внести изменения в код, что бы не было ошибок
*/

// interface UserInterface {
//   name: string;
//   age: number;
//   occupation?: string;
// }

// interface Admin extends UserInterface {
//     role?:string
// }

// export type User =  Admin;

// export const users: User[] = [
//   {
//     name: 'Max Mustermann',
//     age: 25,
//     occupation: 'Chimney sweep'
//   },
//   {
//     name: 'Kate Müller',
//     age: 23,
//     occupation: 'Astronaut'
//   },
//   {
//     name: 'Jane Doe',
//     age: 32,
//     role: 'Administrator'
//   },
//   { name: 'Bruce Willis',
//     age: 64,
//     role: 'World saver'
//   }
// ];

// export function logPerson(user: User) {
//   console.log(` - ${user.name}, ${user.age}`);
// }

// console.log('Users:');
// users.forEach(logPerson);

/*
        Задание 3
    ~ Используем код Задания 2 (копируем, комментируем и вставляем ниже)
    ~ Изменить функцию logPerson таким образом, что бы все свойства объекта были выведены в консоль  (включая role и occupation)
*/

// interface UserInterface {
//   name: string;
//   age: number;
//   occupation?: string;
// }

// interface Admin extends UserInterface {
//   role?: string;
// }

// export type User = Admin;

// export const users: User[] = [
//   {
//     name: 'Max Mustermann',
//     age: 25,
//     occupation: 'Chimney sweep'
//   },
//   {
//     name: 'Kate Müller',
//     age: 23,
//     occupation: 'Astronaut'
//   },
//   {
//     name: 'Jane Doe',
//     age: 32,
//     role: 'Administrator'
//   },
//   { name: 'Bruce Willis', age: 64, role: 'World saver' }
// ];

// export function logPerson(user: User) {
//   for (let key in user) {
//       console.log(`${key}: ${user[key]}`);
//   }
// }

// console.log('Properties of users:');
// users.forEach(logPerson);

/*
        Задание 4
    ~ Используем код Задания 3 (копируем, комментируем и вставляем ниже)
    ~ Для определения типа аргумента person в функции logPerson используем следующие функции

        export function isAdmin(person: Person) {
            return person.type === 'admin';
        }

        export function isUser(person: Person) {
            return person.type === 'user';
        }

    ~ Как помочь TS понять какой фактический тип передается в эти функции, что бы мы могли без ошибок использовать в logPerson следующее выражение
     if (isAdmin(person)) {
        additionalInformation = person.role;
     }                                          
*/

// export function isAdmin(person: Person) {
//   return person.type === 'admin';
// }

// export function isUser(person: Person) {
//   return person.type === 'user';
// }

// interface User {
//   name: string;
//   age: number;
//   occupation?: string;
//   type: string;
// }

// interface Admin extends User {
//   role?: string;
// }

// export type Person = Admin;

// export const users: Person[] = [
//   {
//     name: 'Max Mustermann',
//     age: 25,
//     occupation: 'Chimney sweep',
//     type: 'user'
//   },
//   {
//     name: 'Kate Müller',
//     age: 23,
//     occupation: 'Astronaut',
//     type: 'user'
//   },
//   {
//     name: 'Jane Doe',
//     age: 32,
//     role: 'Administrator',
//     type: 'admin'
//   },
//   {
//     name: 'Bruce Willis',
//     age: 64,
//     role: 'World saver',
//     type: 'admin'
//   }
// ];

// export function logPerson(person: Person) {
//   let additionalInformation: string = '';
//   if (isAdmin(person)) {
//     additionalInformation = person.role;
//   }
//   if (isUser(person)) {
//     additionalInformation = person.occupation;
//   }
//   console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }

// console.log('Properties of users:');
// users.forEach(logPerson);

/*
        Задание 5
    ~ Используем код Задания 4 (копируем, комментируем и вставляем ниже)
    ~ Необходимо добавить свойство type в существующие интерфейсы и соответствующие объекты (типов будет три user, admin, superuser)
    ~ Определить интерфейс SuperUser, который содержит все поля от User и Admin за исключением поля type (используй Utility Types). Поле type указать явно и задать соответсвующее значение.
    ~ Написать функцию isSuperUser
    ~ Вывести в консоль отдельные списки Users, Admins, Super Users
*/

export function isAdmin(person: Admin) {
  return person.type === 'admin';
}

export function isUser(person: User) {
  return person.type === 'user';
}

export function isSuperUser(person: SuperUser) {
  return person.hasOwnProperty('type');
}

interface User {
  name: string;
  age: number;
  occupation?: string;
  type: string;
}

interface Admin extends User {
  role?: string;
}

type SuperUser = Omit<Admin, 'type'>;

export type Person = Admin;

export const users: Person[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
    type: 'user'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
    type: 'user'
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator',
    type: 'admin'
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver',
    type: 'admin'
  }
];

export function logPerson(person: Person) {
  let additionalInformation: string = '';
  let usersList = [];
  let adminsList = [];
  let superusersList = [];

  if (isAdmin(person)) {
    additionalInformation = person.role;
    adminsList.push(person);
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
    usersList.push(person);
  }
  if (isSuperUser(person)) {
    superusersList.push(person);
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Properties of users:');
users.forEach(logPerson);

/*
        Задание 6
    ~ Объяви класс Weather, который будет иметь два свойства windSpeed и chanceOfRain числового типа.
    ~ У класса должен быть обязательный инициализатор, который принимает значения скорости ветра (windSpeed) и шанс дождя (chanceOfRain)
    ~ Добавь в класс функцию isDayForWalk. Если скорость ветра (windSpeed) меньше 5 метров и шанс дождя (chanceOfRain) меньше 30 процентов, то функция должна вернуть true,  иначе  - false.
    ~ Создай экземпляр класса и выведи в консоль удачный ли сегодня день для прогулок;)
*/

class Weather {
  windSpeed: number;
  chanceOfRain: number;
  constructor(windSpeed: number, chanceOfRain: number) {
    this.windSpeed = windSpeed;
    this.chanceOfRain = chanceOfRain;
  }

  isDayForWalk(): boolean {
    if (this.windSpeed < 5 && this.chanceOfRain < 30) {
      return true;
    }
    return false;
  }
}

let weatherInKharkiv: Weather = new Weather(4, 10);
let weatherInLondon: Weather = new Weather(7, 35);
console.log(weatherInKharkiv.isDayForWalk());
console.log(weatherInLondon.isDayForWalk());

/*
        Задание 7
    ~ Объяви класс Point2D, который будет иметь два свойства x и y числового типа. Свойства должны быть инициализированными 0 по умолчанию.
    ~ Добавь в класс Point2D, метод  reset, который будет устанавливать координаты x и y в 0.
    ~ Добавь инициализатор в класс Point2D, который в качестве параметров будет принимать значения для координат x и y.
    ~ Объяви класс Point3D, который будет дочерним классом по отношению к классу Point2D. Добавь в него свойство z, которое будет проинициализировано по умолчанию нулем
    ~ Добавь инициализатор, который будет в качестве параметров принимать значения для координат x, y и z
    ~ Cоздай экземпляр класса Point3D с именем point3D
    ~ Сделай так, чтобы при вызове метода reset, также сбрасывалась в ноль и координата z
    ~ Используй механизм переопределения методов!
*/

class Point2D {
  x: number;
  y: number;
  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  reset(): void {
    this.x = 0;
    this.y = 0;
  }
}

class Point3D extends Point2D {
  z: number;
  constructor(x: number, y: number, z: number = 0) {
    super(x, y);
    this.z = z;
  }
  reset(): void {
    super.reset();
    this.z = 0;
  }
}
let point3D = new Point3D(13, 23, 3);
console.log(point3D);
point3D.reset();
console.log(point3D);

/*
        Задание 8
    ~ Реализуй иерархию классов, представленной на Рисунке 1
*/

abstract class Telephone {
  constructor() {}
  makeCall() {}
  hangUp() {}
}

abstract class Landline extends Telephone {
  constructor() {
    super();
  }
}

class Rotary extends Landline {
  constructor() {
    super();
  }
  rotaryInput() {}
}

class PushButton extends Landline {
  constructor() {
    super();
  }
  buttonInput() {}
}

abstract class Cellular extends Telephone {
  constructor() {
    super();
  }
  sendSMS() {}
}

class NonSmart extends Cellular {
  constructor() {
    super();
  }
  buttonInput() {}
}

class Smart extends Cellular {
  constructor() {
    super();
  }
  touchINput() {}
  accessInternet() {}
}

class Iphone extends Smart {
  constructor() {
    super();
  }
  iOS() {}
}

class Android extends Smart {
  constructor() {
    super();
  }
  androidOS() {}
}

class Windows extends Smart {
  constructor() {
    super();
  }
  windowsOS() {}
}
