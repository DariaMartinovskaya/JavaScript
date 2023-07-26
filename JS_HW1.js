// var item_1 = 5;
// console.log(item_1)
// var item_2 = 3;
// console.log(item_2);
// var item_3 = item_1+item_2;
// console.log(item_3);
// var item_4 = "Yolochka";
// console.log(item_4);
// console.log(item_3 + item_4);
// console.log(item_3 * item_4);
// var item_5 = item_3;
// var item_6 =15;
// var item_6_type = typeof (item_6);
// console.log('item_6 == '+item_6, 'item_6_type == '+item_6_type);
// var item_7 = 'item_6';
// var item_7_type = typeof (item_7);
// console.log('item_7 == '+item_7, 'item_7_type == '+item_7_type);

// const age_1 = 10;
// const age_2 = 18;
// const age_3 = 60;

// if (age_1<age_2){
//     console.log("You don't have access cause your age is "+age_1+" It's less then " + age_2)
// } else if (age_1 >=  age_2 && age_1 <  age_3){
//     console.log ("Welcome!")
// } else if (age_1  > age_3){
//     console.log ("Keep calm and look Culture channel")
// } else {
//     console.log ("Technical work")
// }


// 1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.  
// Пример: const checkAge = function(age) {  
// Ваши преобразования  
// }  
// Вывести в консоль результат работы функции с возрастами 17, 18, 61  

// const age_1 = 10;
// const age_2 = 18;
// const age_3 = 60;

// const CheckAge = function(age){
//     if (age<age_2){
//     return ('You do not have access cause your age is '+age+' It is less then ' + age_2)
//     } else if (age >= age_2 && age < age_3) {
//         return ('Welcome!')
//     } else if (age  > age_3) {
//         return ('Keep calm and look Culture channel')
//     } else {
//         return ('Technical work')
//     }
//     }
    
//     console.log(CheckAge(17))
//     console.log(CheckAge(18))
//     console.log(CheckAge(61))
  
// 2*:  Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.  
        
// const age_1 = 10;
// const age_2 = 18;
// const age_3 = 60;

// const CheckAge = function(age) {
//     if (typeof age == 'number'){
//     if (age<age_2) {
//     return ('You do not have access cause your age is '+age+' It is less then ' + age_2)
//     } else if (age >= age_2 && age < age_3) {
//         return ('Welcome!')
//     } else if (age  > age_3) {
//         return ('Keep calm and look Culture channel')
//     } else {
//         return ('Technical work')
//     } 
// } else console.log('Not integer value')
// }
    
// console.log(CheckAge(17))
// console.log(CheckAge(18))
// console.log(CheckAge(61))
// console.log(CheckAge('test'))
  
// 3**: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number  

// const age_1 = 10;
// const age_2 = 18;
// const age_3 = 60;

// const CheckAge = function(age) {

//     age = Number(age)

//     if(!isNaN(age)) {

//     if (age<age_2) {
//     return ('You do not have access cause your age is '+age+' It is less then ' + age_2)
//     } else if (age >= age_2 && age < age_3) {
//         return ('Welcome!')
//     } else if (age  > age_3) {
//         return ('Keep calm and look Culture channel')
//     } else {
//         return ('Technical work')
//     } 
// } else console.log('Not integer value')}
    
// console.log(CheckAge(17))
// console.log(CheckAge(18))
// console.log(CheckAge(61))
// console.log(CheckAge('2'))
// console.log(CheckAge('test'))
// console.log(CheckAge('22test'))

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

const age_1 = 10;
const age_2 = 18;
const age_3 = 60;

const CheckAge = function(age) {

    age = Number(age)

    if(!isNaN(age)) {

    if (age<age_2) {
    return ('You do not have access cause your age is '+age+' It is less then ' + age_2)
    } else if (age >= age_2 && age < age_3) {
        return ('Welcome!')
    } else if (age  > age_3) {
        return ('Keep calm and look Culture channel')
    } else {
        return ('Technical work')
    } 
} else console.log('Not integer value')}
    
console.log(CheckAge(17))
console.log(CheckAge(18))
console.log(CheckAge(61))
console.log(CheckAge('2'))
console.log(CheckAge('test'))
console.log(CheckAge('22test'))

let agePrompt = prompt('Enter age')
CheckAge(agePrompt)