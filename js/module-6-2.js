//1 Клас Calculator: Реалізуйте клас Calculator, який матиме методи для
// Основні математичні операції: add, subtract, multiply, і divide. Кожен
// метод прийматиме два числа і повертатиме результат відповідної операції.

// class Calculator {
//     add(x, y){
//         return x + y;
//     }
//     subtract(x, y){
//         return x - y;
//     }
//     multiply(x, y){
//         return x * y;
//     }
//     divide(x, y){
//         return x / y;
//     }
// }

// const calc = new Calculator;
// console.log(calc.add(1,2));
// console.log(calc.subtract(1,2));
// console.log(calc.multiply(1,2));
// console.log(calc.divide(1,2));

//!============================================
// 2 Клас ContactBook: Створіть клас Contact для подання контакту з полями name, email та phone. Потім реалізуйте клас ContactBook, який зберігатиме список контактів та надавати методи для додавання, видалення та пошуку контактів.

// class Contact {
//     name;
//     email;
//     phone;

//     constructor(params){
//         this.name = params.name;
//         this.email = params.email;
//         this.phone = params.phone;
//     }
// }


// class ContactBook {
//     base = [];

//     addContact(contact){
//         this.base.push(contact);
//         if (contact instanceof Contact){ //перевіряє чи є змінна екземпляром класу КОНТАКТ
//         }
//     }
//     removeContact(contact){
//         this.base.splice(this.base.indexOf(contact),1);
//     }
//     findContact(key,value){
//         return this.base.filter(contact => contact[key] === value);
//     }
// }

// const user1 = new Contact({name: 'Alex',email:"alex@mail.com",phone:'+380956284997'});
// const user2 = new Contact({name: 'Ivan',email:"ivan@mail.com",phone:'+380994753226'});
// const user3 = new Contact({name: 'Olena',email:"olena@mail.com",phone:'+380751236548'});

// console.log(user1);


// const contbook = new ContactBook;

// console.log(contbook.base);

// contbook.addContact(user1);
// console.log(contbook.base);

// contbook.addContact(user2);
// console.log(contbook.base);

// contbook.addContact(user3);
// console.log(contbook.base);

// console.log('finded with name',contbook.findContact('name','Alex'));

// contbook.removeContact(user3);
// console.log(contbook.base);


//!============================================
