 // 1. Create the variable “item_1”
 // 2. Assign the variable item_1 the number 5.
 // 3. Output to the console item_1.
 // 4. Create the variable “item_2”
 // 5. Assign the variable item_2 the number 3.
 // 6. Output to the console item_2.
 // 7. Create the variable “item_3”
 // 8. Assign the variable item_3 sum of item_1 and item_2.
 // 9. Output to the console item_3.
 // 10. Create the variable “item_4”
 // 11. Assign the variable item_4 the string “Yolochka”
 // 12. Output to the console item_4.
 // 13. Output to the console the sum of item_3 and item_4.
 // 14. Output to the console multiplication ща item_3 and item_4.
 // 15. Create the variable “item_5”
 // 16. Assign the variable item_5 the variable item_3
 // 17. Create the variable item_6.
 // 18. Create the variable item_6_type
 // 19. Assign the variable item_6 the number 15
 // 20. Assign the variable item_6_type type of the variable item_6
 // 21. Output to the console the data type of item_6 in the form of  ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——  
 // 22. Create the variable item_7 and convert item_6 into String in it.
 // 23. Create the variable item_7_type
 // 24. Assign the variable item_7_type type of the variable item_7
 // 25. Output to the console the data type of item_7 in the form of ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  
 // 26. Create the variable “age_1” and assign the number 10 to it
 // 27. Create the variable “age_2” and assign the number 18 to it
 // 28. Create the variable “age_3” and assign the number 60 to it
 // 29. Create "if" in which the value of the variable age_1 will be checked
 // 30. If age_1 < age_2, output to the console “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
 // 31. If age_1 >=  age_2 and age_1 <  age_3, output to the console “Welcome  !”
 // 32. If age_1  > age_3, output to the console “Keep calm and look Culture channel”.
 // 33. Otherwise output to the console “Technical work”.
     
var item_1 = 5;
console.log(item_1)
var item_2 = 3;
console.log(item_2);
var item_3 = item_1+item_2;
console.log(item_3);
var item_4 = "Yolochka";
console.log(item_4);
console.log(item_3 + item_4);
console.log(item_3 * item_4);
var item_5 = item_3;
var item_6 =15;
var item_6_type = typeof (item_6);
console.log('item_6 == '+item_6, 'item_6_type == '+item_6_type);
var item_7 = 'item_6';
var item_7_type = typeof (item_7);
console.log('item_7 == '+item_7, 'item_7_type == '+item_7_type);

const age_1 = 10;
const age_2 = 18;
const age_3 = 60;

if (age_1<age_2){
console.log("You don't have access cause your age is "+age_1+" It's less then " + age_2)
} else if (age_1 >=  age_2 && age_1 <  age_3){
console.log ("Welcome!")
} else if (age_1  > age_3){
console.log ("Keep calm and look Culture channel")
} else {
console.log ("Technical work")
}

// 1*: Convert the code written in paragraphs 26-33 into a function that takes age as input.
// Example: const checkAge = function(age) {  
// Your convertations 
// }  
// Output to the console the result of the function with ages 17, 18, 61

const age_1 = 10;
const age_2 = 18;
const age_3 = 60;

const CheckAge = function(age){
if (age<age_2){
return ('You do not have access cause your age is '+age+' It is less then ' + age_2)
} else if (age >= age_2 && age < age_3) {
return ('Welcome!')
} else if (age  > age_3) {
return ('Keep calm and look Culture channel')
} else {
return ('Technical work')
}
}
    
console.log(CheckAge(17))
console.log(CheckAge(18))
console.log(CheckAge(61))
  
// 2*:  Convert task 1* so that the first thing you do in functions is check the data type. And if it is not Number, an error is thrown. 
        
const age_1 = 10;
const age_2 = 18;
const age_3 = 60;

const CheckAge = function(age) {
if (typeof age == 'number'){
if (age<age_2) {
return ('You do not have access cause your age is '+age+' It is less then ' + age_2)
} else if (age >= age_2 && age < age_3) {
return ('Welcome!')
} else if (age  > age_3) {
return ('Keep calm and look Culture channel')
} else {
return ('Technical work')
} 
} else console.log('Not integer value')
}
    
console.log(CheckAge(17))
console.log(CheckAge(18))
console.log(CheckAge(61))
console.log(CheckAge('test'))
  
// 3**: Convert 2* so that the value '2' (the string containing ONLY A DIGIT) is skipped, converted to number 

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

// 4***:
// Convert task 3* so that age is entered using the prompt function in the linked layout

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
