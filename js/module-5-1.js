//1 Сума чисел: Напишіть функцію sumArray(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна обчислити суму чисел у масиві та передати результат у колбек.

// const sumArray = (numbers, callback) => callback(numbers.reduce((sum, number) => sum + number,0));

// function logToConsole(arg){
//     console.log(arg);    
// }
// sumArray([0,1,2,3],logToConsole);

// !==========================================

//2 Подвоєння чисел: Напишіть функцію doubleArray(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна подвоїти кожне число в масиві та передати новий масив у колбек.

// const doubleArray = (numbers, callback) => callback(numbers.map(number => number *2));

// function logToConsole(arg){
//     console.log(arg);    
// }

// doubleArray([0,1,2,3],logToConsole);

// !==========================================

//3 Фільтр слів: Напишіть функцію filterWords(words, condition, callback), яка приймає масив рядків words, функцію condition (перевірка рядка) та колбек callback. Функція повинна фільтрувати слова масиву за допомогою переданої умови та передати відфільтрований масив у колбек.

// const filterWords = (words, condition, callback) => callback(words.filter(word => condition(word)));

// function logToConsole(arg){
//     console.log(arg);    
// }

// function isFirstLetterAnyA(str){
//     return str[0] === 'A' || str[0] === 'a';
// }

// filterWords(['Alex', 'alex', 'small', 'cat', 'Abadon', 'axe', 'Alhemist','Nazar','Zahar','Ivan', 'Vroclav', 'indigo'],isFirstLetterAnyA,logToConsole);

// !==========================================

//4 Капіталізація рядків: Напишіть функцію capitalizeStrings(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна перетворити всі рядки в масиві, роблячи першу літеру кожного рядка великої, і передати перетворений масив в колбек.

// const capitalizeStrings = (strings, callback) => callback(strings.map(str => str[0].toUpperCase()+str.slice(1)));

// function logToConsole(arg){
//     console.log(arg);    
// }
// capitalizeStrings(['sasha', 'alex', 'small', 'cat', 'abadon', 'axe', 'alhemist','nazar','zahar','ivan', 'Vroclav'],logToConsole);


// !===

// const capitalizeStrings = (strings, callback) => callback(strings.forEach((str, index,arr) => arr[index] = str[0].toUpperCase()+str.slice(1)));

// const logToConsole = arg => console.log(arg);    

// const arr = ['sasha', 'alex', 'small', 'cat', 'abadon', 'axe', 'alhemist','nazar','zahar','ivan', 'Vroclav'];

// capitalizeStrings(arr,logToConsole);
// console.log(arr);

// !==========================================

//5 Сортування чисел: Напишіть функцію sortNumbers(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна відсортувати числа в масиві за зростанням та передати відсортований масив у колбек.

// const sortNumbers = (numbers, callback) => callback(numbers.toSorted((a,b) => a-b));

// function logToConsole(arg){
//     console.log(arg);    
// }

// sortNumbers([0,1,10,3,9,48,-3,31],logToConsole);

// !==========================================

// 6 Пошук максимуму: Напишіть функцію findMax(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна знайти максимальне число в масиві та передати його в колбек.

// const findMax = (numbers, callback) => callback(Math.max(...numbers));

// function logToConsole(arg){
//     console.log(arg);    
// }

// findMax([0,1,10,3,9,48,-3,31],logToConsole);

// !==========================================
// 7 Перевірка на парність: Напишіть функцію checkEven(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна перевірити, чи всі числа в масиві парні, і передати результат перевірки колбек.

// const checkEven = (numbers, callback) => callback(numbers.every(number => number % 2 === 0));

// function logToConsole(arg){
//     console.log(arg);    
// }

// checkEven([0,1,10,3,9,48,-3,31],logToConsole);
// checkEven([0,2,6,48,102,4],logToConsole);

// !==========================================

// 8 Об'єднання рядків: Напишіть функцію concatStrings(strings, separator, callback), яка приймає масив рядків strings, рядок separator та колбек callback. Функція повинна об'єднати рядки з масиву, розділяючи їх переданим роздільником, і передати рядок, що вийшов, в колбек.

// const concatStrings = (strings, separator, callback) => callback(strings.join(separator));

// function logToConsole(arg){
//     console.log(arg);    
// }

// concatStrings(['user','can','read','this','text','(Maybe)'],'!---!',logToConsole);

// !==========================================

// 9 Перетворення в числа: Напишіть функцію parseNumbers(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна перетворити кожен рядок з масиву на число і передати новий масив чисел в колбек.

// const parseNumbers = (strings, callback) => callback(strings.map(string => Number(string)));

// function logToConsole(arg){
//     console.log(arg);    
// }

// parseNumbers(['1','2','56','-3468','3','65.2'],logToConsole);

// !==========================================

// 10 Підрахунок символів: Напишіть функцію countCharacters(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна підрахувати загальну кількість символів у всіх рядках масиву та передати результат у колбек.

// const countCharacters = (strings, callback) => callback(strings.reduce((sum, string) => sum + string.length,0));

// function logToConsole(arg){
//     console.log(arg);    
// }

// countCharacters(['hello','world'],logToConsole);