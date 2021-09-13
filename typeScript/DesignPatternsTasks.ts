/*
    ПРОДВИНУТЫЙ УРОВЕНЬ
    К Заданию 4
--> https://refactoring.guru/ru/design-patterns/decorator <--
    К Заданию 5
--> https://refactoring.guru/ru/design-patterns/facade <--
    К Заданию 6
--> https://refactoring.guru/ru/design-patterns/state <--

*/

// БАЗОВЫЙ УРОВЕНЬ
/*
        Задание 1
    Реализуй паттерн Adapter в следующем контексте: 
    Есть два класса: автомобиль и эвакуатор. Каждый из них, независимо друг от друга может ездить. 
    У автомобиля обнаружили несправность. Хозяин вызвал эвакуатор и автомобиль начали буксировать. 
    Опишите эту ситуацию реализуя паттерн проектирования с выводами текстовых сообщений в консоль.
*/

class Car {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  drive() {
    console.log('Driving...');
  }

  callTowTruck() {
    console.log('Please get my car to the service!');
  }
}

class TowTruck extends Car {
  clientCar: Car;
  drive() {
    console.log('Driving to the client');
  }
  constructor(clientCar: Car) {
    super(clientCar.name);
    this.clientCar = clientCar;
  }
  tow() {
    return this.clientCar.drive();
  }
}

let corvette = new Car('corvette');
let volvo = new TowTruck(corvette);
corvette.drive();
corvette.callTowTruck();
volvo.drive();
volvo.tow();

/*
        Задание 2
    Реализуй паттерн Observer в следующем контексте: 
    В доме срабатывает сигнализация. Она оповещает о тревоге охранную 
    фирму и хозяина дома, после отключения сигнализации, все так же получают соответствующее уведомление.
*/

interface Listener {
  status: string;
  update(status);
}

class HouseSecuritySystem {
  listeners: Listener[];
  status: string;

  subscribe(listener: Listener) {
    this.listeners.push(listener);
  }
  changeStatus(newStatus: string) {
    this.status = newStatus;
  }
  notify() {
    this.listeners.forEach((listener) => listener.update(this.status));
  }
}

class SecurityAgency implements Listener {
  status: string;
  update(newStatus: string) {
    this.status = newStatus;
  }
}

class HouseOwner implements Listener {
  status: string;
  update(newStatus: string) {
    this.status = newStatus;
  }
}

let SuperSecurity = new HouseSecuritySystem();
let SeaHawkSecurity = new SecurityAgency();
let Jimmy = new HouseOwner();

SuperSecurity.subscribe(Jimmy);
SuperSecurity.subscribe(SeaHawkSecurity);
SuperSecurity.changeStatus(
  'Alert! Suspective movement on the perimeter! Sirens are on!'
);
SuperSecurity.notify();
SuperSecurity.changeStatus('SeaHawkSecurity units arrived! Sirens are off!');
SuperSecurity.notify();

/* 
        Задание 3
    Реалиуй паттерн Abstract Factory в следующем контексте:
    Есть два производителя Samsung и Apple. Каждый из этих производителей выпускает различные девайсы (телефоны, планшеты, компьютеры и т.д).
    Фабрика должна предоставлять возможность создавать девайсы любой марки и любого типа. 
*/

interface Phone {
  releasePhone();
}

class Iphone implements Phone {
  releasePhone() {}
}

class SamsungPhone implements Phone {
  releasePhone() {}
}

interface Tablet {
  releaseTablet();
}

class Ipad implements Tablet {
  releaseTablet() {}
}

class SamsungTablet implements Tablet {
  releaseTablet() {}
}

interface AbstractFactory {
  releasePhone();
  releaseTablet();
}

class AppleFactory implements AbstractFactory {
  releasePhone() {
    return new Iphone();
  }
  releaseTablet() {
    return new Ipad();
  }
}

class SamsungFactory implements AbstractFactory {
  releasePhone() {
    return new SamsungPhone();
  }
  releaseTablet() {
    return new SamsungTablet();
  }
}

// ПРОДВИНУТЫЙ УРОВЕНЬ
/*
        Задание 4
    Реализуй паттерн Decorator в следующем контексте: 
    Фастфуд предлагает два комбо набора Чизбургер меню и Гамбургер меню.
    Каждый из этих наборов могут дополняться различными напитками или десертами на выбор покупателя, из-за чего изменяется его цена.
    Поступил заказ на два меню (Чизбургер меню и Гамбургер меню), одно с соком, а второе с колой и пончиком. 
    Помогите фастфуду приготовить и вывести заказ в консоль, не создавая новых видов меню.
*/

//Добавить код сюда...

/*
        Задание 5
    Реализуй паттерн Facade в следующем контексте: 
    У вас умный дом. Он напичкан многими девайсами и автоматическими приборами. 
    Когда вы уходите или приходите домой каждый раз повторяете множество одних и тех же действий (вкл/выкл света, кондиционера, музыки и т.д).
    Создайте две запрограммированных поведения системы умного дома - "хозяин дома", "хозяин ушел".
*/

//Добавить код сюда...

/*
        Задание 6
    Реализуй паттерн State в следующем контексте: 
    Допустим, что мобильное приложение перед выливкой в стор, может находится в 4-x состояних: waiting for review, in review, ready for sale, published.
    В каждом состоянии мы можем вызвать методы Publish и Cancel, уоторые будет работать по-разному:
     - из waiting for review Publish отправит приложение на проверку, Cancel вызвать нельзя
     - из in review Publish отправит в ready for sale, если проверка прошла успешно, 
       либо вызовет Cancel, при обнаружении ошибок и вернет в начальное состояние.
    - из ready for sale пользователь может вызвать Cancel и отменить выливку, или Publish и перейти в состояние published.
    - из состояния published нельзя вызывать методы Publish и Cancel
*/

//Добавить код сюда...
