// Створіть клас Enemy, який має властивості name, hp, attack, та метод dealDamage(), який виводе в консоль текст:"name наніс attack шкоди". Також оголосіть конструктор класу, який буде приймати об'єкт в якості параметра та присвоювати відповідні значення з отримуваного об'єкта в екземпляр класу. Додайте базові значення для влдастивостей класу. Створіть ще 2 класи RangeEnemy та MiliEnemy, які наслідуютсья від Enemy. Змініть для кожного з цих нових класів значення здоров'я або атаки. Створіть екземпляр для кожного з класів та виклич метод dealDamage() кожного з екземплярыв. Також не забудьте, що об'єкт при створенні екземпляру класу може не мати якогось параметру, наприклад, може бути не вказано здоров'я.

// class Enemy {
//     name = 'Enemy';
//     hp = 5;
//     attack = 5;
//     constructor(params){
//         this.name = params.name || this.name;
//         this.hp = params.hp ? params.hp : this.hp;
//         this.attack = params.attack || this.attack;
//     }
//     dealDamage(){
//         console.log(`${this.name} наніс ${this.attack} шкоди`);        
//     }
// }

// class RangeEnemy extends Enemy{
//     attack = 10;
// }

// class MiliEnemy extends Enemy{
//     hp = 20
// }

// const goblin1 = new MiliEnemy({name:'Goblin Picker'});
// console.log(goblin1);
// goblin1.dealDamage();

// const goblin2 = new RangeEnemy({name:'Goblin Archer'});
// console.log(goblin2);
// goblin2.dealDamage();

// const goblin3 = new Enemy({name:'Goblin'});
// console.log(goblin3);
// goblin3.dealDamage();


// !================================================
// Створыть клас Pan, який має властивості brand, bodyColor, incColor та метод drow(text), який повертає рядок ""TEXT" drowed by BRAND pen and INCCOLOR incs!". Оголосіть конструктор класу, який буде приймати об'єкт в якості параметра та присвоювати відповідні значення з отримуваного об'єкта в екземпляр класу. Додайте базові значення для влдастивостей класу. Не забудьте, що в об'єкті, який приймає конструктор, може не бути певних властивостей. Створіть екземпляр класу та викличте його метод.

// class Pan{
//     brand = 'Havana';
//     bodyColor = 'blue';
//     incColor = 'blue';
//     constructor(params){
//         this.brand = params.brand || this.brand;
//         this.bodyColor = params.bodyColor || this.bodyColor;
//         this.incColor = params.incColor || this.incColor;
//     }

//     drow(text){
//         return `"${text}" drowed by ${this.brand} pen and ${this.incColor} incs!`;
//     }
// }

// const greenPan = new Pan({brand: "Aloha",bodyColor:"green",incColor:"black"});
// console.log(greenPan.drow('Hello World'));

// greenPan.incColor = "pink";
// console.log(greenPan.drow('Other text lalala'));

// !================================================

