// let a = 5;
// let b = a;
// console.log(a); // 5
// console.log(b); // 5
// // Присвоєння за значенням, у пам'яті буде створено ще
// // одну ячейку, в яку буде скопійовано значення 5
// // Змінимо значення a
// a = "10";
// console.log(a); // 10
// console.log(b); // 5 Значення b не змінилося, оскільки це окрема копія


// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]

// b[1] = "Jacob";
// console.log(a); // ["Mango", "Jacob"]
// console.log(b); // ["Mango", "Jacob"]
//!=============================================================
// Напиши функцію яка приймає масив чисел. Функція повинна видалити усі негативні(відємні числа) з масиву та повернути новий масив.

// function removeNegativeNumbers(arr) {
//     const res = [];
//     for (let i = 0; i <= arr.length - 1; i++){
//         if (arr[i] >= 0){
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
// console.log(removeNegativeNumbers([-1,2,3,4,5,-2,-6,-5,4,-10,50,50,50,-999]));
//!=============================================================
// Напиши функцію яка приймає масив рядочків. Потрібно змінити кожен елемент масиву наступним чином - якщо довжина рядочку менша за 6 до привести рядок до нижнього регістру, в іншому випадку привести до верхнього регістру.
// function editArr(arr){
//     // const tempArr = [];
//     for (let i = 0; i <= arr.length - 1; i++){
//         if (arr[i].length < 6){
//             // tempArr.push(arr[i].toLowerCase());
//             arr[i] = arr[i].toLowerCase();
//         }
//         else{
//             // tempArr.push(arr[i].toUpperCase());
//             arr[i] = arr[i].toUpperCase();
//         }
//     }
//     // return tempArr;
//     return arr;
// }
// console.log(editArr(['aAa','bBBBbb','CccCccCcCcCc','dddddDddd','eeEE','a','s']));
//!=============================================================
// Напиши функцію яка приймає масив та знаходить мінімальний елемент.
// function minVal(arr){
//     let min = arr[0];
//     for (let i = 0; i <= arr.length - 1; i++){
//         if (arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return min;
// }
// // console.log(minVal([-1,2,3,4,5,-2,-6,-5,4,-10,50,50,50,-999]));
// console.log(minVal([999,1,2,3,4,5,6,7,8,9]));
//!=============================================================
// Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за середнє значення всіх елементів масиву.
// function moreThanSer(arr){
//     let ser = 0;
//     let sum = 0;
//     for (let i = 0; i <= arr.length - 1; i++){
//         sum += arr[i];
//     }
//     ser = sum / arr.length;
//     console.log("Середнє:" + ser);
//     const res = [];
//     for (let i = 0; i <= arr.length - 1; i++){
//         if (arr[i] > ser){
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
// console.log(moreThanSer([1,2,3,4,5,6,7,8,9,1,1,-5]));
//!=============================================================
