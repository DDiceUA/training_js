// 1. Завдання:
// Створи об'єкт із властивостями firstName (рядок), lastName (рядок) та age (число). Додай метод getFullName, який повертає повне ім'я у форматі: [firstName] [lastName]. Також додай метод incrementAge, який збільшує вік на 1.

// const person = {
//     firstName: 'Alex',
//     lastName: 'Proger',
//     age: 26,
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     },
//     incrementAge(){
//         this.age += 1;
//     },
// }

// console.log(person);
// console.log(person.getFullName());
// person.incrementAge();
// console.log(person);
// person.incrementAge();
// person.incrementAge();
// console.log(person);
// person.age = 10;
// console.log(person);
// person.incrementAge();
// console.log(person);


//!----------------------------------------
// 2. Завдання:
// Створи об'єкт із властивостями bankName (рядок), accountNumber (число) та balance (число). Додай метод deposit, який приймає суму як аргумент і додає її до балансу, а також метод withdraw, який приймає суму і зменшує баланс, якщо сума не перевищує наявний баланс. Метод має повертати новий баланс.

// const bank = {
//     bankName: 'Aval',
//     accountNumber: 1564854,
//     balance: 100,
//     deposit(sum){
//         this.balance += sum;
//     },
//     withdraw(sum){
//         if (this.balance > sum){
//             this.balance -= sum;
//         }
//         return this.balance;
//     }

// }

// console.log(bank.balance);
// bank.deposit(50);
// console.log(bank.balance);
// console.log(bank.withdraw(25));
// console.log(bank.withdraw(225));

//!----------------------------------------
// 3. Завдання:
// Створи об'єкт з властивостями width (число), height (число). Додай метод calculateArea, який повертає площу прямокутника, та метод calculatePerimeter, який повертає периметр.

// const rect = {
//     width: 50,
//     height: 50,
//     calculateArea(){
//         return this.width * this.height;
//     },
//     calculatePerimeter(){
//         return this.width * 2 + this.height * 2;
//     },
// }

// console.log(rect);
// console.log(rect.calculateArea());
// console.log(rect.calculatePerimeter());

//!----------------------------------------
// 8. Завдання:
// Створи об'єкт із властивостями temperature (число) та unit (рядок, що приймає значення "C" або "F"). Додай метод convertToCelsius, який переводить температуру з Фаренгейта в Цельсій, якщо unit дорівнює "F", та метод convertToFahrenheit, який робить зворотнє перетворення.

// const obj = {
//     temperature: 14,
//     unit: 'F',
//     convertToCelsius(){
//         if (this.unit === 'F'){
//             this.temperature = (this.temperature - 32) / 1.8;
//             this.unit = 'C';
//         }
//     },
//     convertToFahrenheit(){
//         if (this.unit === 'C'){
//             this.temperature = (this.temperature * 9/5) + 32;
//             this.unit = 'F';
//         }
//     },
// }
// console.log(obj);
// obj.convertToCelsius();
// console.log(obj);
// obj.convertToFahrenheit();
// console.log(obj);


//!----------------------------------------
