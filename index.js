// //console.log("Hello World!")

// var num = 1                      // Interger Data Type
// var num = 1.5                   // Float Data Type
// var name = "Good Morning"      // String Data Type
// var bool = true or false      // Boolean Data Type

// // var number = 50;
// // var name = "Rahul";

// // console.log(number);
// // console.log(name);

// // console.log(name +" has scored " + number);

// // // Task 1
// // // name, age , profession, salary

// var age = 45;
// var name = "Benjaman";
// var profession = "McDonalds Worker";
// var salary = 10000;
// console.log(
//   name +
//     " is " +
//     age +
//     " years old, and he is a " +
//     profession +
//     " and makes " +
//     salary +
//     " dollars every year."
// );

// // var num1 = 10
// // var num2 = 20

// // console.log("The addition is ", num1 % num2);
// // console.log(Math.PI);

// // Task 2
// // Calculate the BMI create a var kg and h  var bmi = (BMI = kg/h)

// var kg = 50;
// var h = 1.74;
// var bmi = kg / h;

// console.log(name + " has a bmi of " + bmi);

// // Task 3
// // Make the formula as weight / height square

// var bmi2 = kg / (h * h);

// console.log(name + " has a bmi of " + bmi2);

// // Task 4
// // Modify Your Existing Bmi calculator

// var kg = prompt("Enter your weight in kg's");
// var h = prompt("Enter your height in meters");
// var bmi = kg / (h * h);
// alert(bmi);

// Math Operations
// var num1 = 20;
// var num2 = 30;

// // Mod
// console.log(num2 % num1)

// // Strings
// var name = "Ahan"
// var num = "5";
// var num1 = "10"

// console.log(parseInt(num1) + parseInt(num))

// console.log(name[0]);

// Task 5

// var taskName = "Apple Iphone 12"
// var cost = "900"
// var tax = "100"
// var totalCost;

// Given are the above variables console log the total cost
// select the i and 1 from the taskName and log them to the console
// find out the reminder of cost / tax

// console.log(cost + tax)
// console.log(parseInt(cost) + parseInt(tax))
// console.log(parseInt(cost) % parseInt(tax))

// console.log(taskName[6])
// console.log(taskName[13])

// String Methods

// Strings are immutable in javascript

// var name = "Ahhan";
// console.log(name);

// String Methods
// var methods;

// methods = name.toUpperCase();
// console.log(methods);

// methods = name.toLowerCase();
// console.log(methods);

// methods = name.length;
// console.log(methods);

// returns the charater at the given index
// methods = name.charAt(1);
// console.log(methods);

// TO change a number to a string
// var int = 265;
// methods = int.toString();
// console.log(methods);

// Ahen Wins here (The Pro)
// console.log(5 + methods); // 5 + "265"

// Task 6

// Do the following
// 1. Take Input from the user
// 2. Convert the input to a string
// 3. Make the string lower case and uppercase
// 4. Find the length of the string

// Starting Loops

// While Loop 9-30-2022 EST

// var lineNumber = 1;
// while(lineNumber < 101){
//     console.log(lineNumber+ " I will do my homework");
//     lineNumber++;
// }

// For Loop
// for (var lineNumber = 4; lineNumber < 101; lineNumber++) {
//     console.log(lineNumber);
// }

// Task 7
// We have printed numbers form 1-100 now
//you guys need to print the number in following series - 0 2 4 6 .....

// var name = "Shohahn"

// for(var char = 0; char < name.length; char++){
//     if(name[char] == "h"){
//         console.log("H is at index " + char)
//     }
// }

// Task 8
// Take input from the user and check if the input contains 1 if the
//input contains 1 log to console the input constains
//1 else alert there is no number.

// IF Else Statements 9-30-2022 EST

//var username = prompt("Enter The username")

// function charmender(){
//     console.log('Fire ball');
// }

// charmender();
// charmender();
// charmender();

// function add(num1,num2){
//     var sum = num1 + num2;
//     console.log(sum);
// }

// add(10,2)
// add(2,2)
// add(3,24)
// add(6,56)
// add(100,2)

// Task 9
// You need to create 4 functions add(), sub(), multiply(), Divide()

// Arrays

// var name = "Ahan"
// var name1 = "Sohan"
// var name3 = "Neha"

//var student = ["Ahan", "Sohan", "Neha", "Ceo of codingzen"];

// console.log(student[0]);
// console.log(student[1]);

// student[2] = "Swayam";
// console.log(student[2]);

// To add element at the end of the array.
// student.push("New Student")
// student.push("New Student1")
// student.push("New Student2")

// To remove the last element of the array
// student.pop();
// student.pop();

// To add the element infornt of the array.
// student.unshift("Before Ahan")
// student.unshift("Before Ahan1")
// student.unshift("Before Ahan2")

// To remove the first element of the array
// student.shift()
// student.shift()

// Or Else use a for loop
// for(var i = 0; i < student.length; i++){
//     console.log(student[i]);
// }

// Task 10
// 1. You need to take 10 input from the user.
// 2. Store in the array
// 3. To log the whole array in the console.

// Solution 1 -

// var inputs = []

// var input1 = prompt("input1")
// var input2 = prompt("input1")
// var input3 = prompt("input1")
// var input4 = prompt("input1")
// var input5 = prompt("input1")
// var input6 = prompt("input1")
// var input7 = prompt("input1")
// var input8 = prompt("input1")
// var input9 = prompt("input1")
// var input10 = prompt("input1")

// inputs.push(input1);
// inputs.push(input2);
// inputs.push(input3);
// inputs.push(input4);
// inputs.push(input5);
// inputs.push(input6);
// inputs.push(input7);
// inputs.push(input8);
// inputs.push(input9);
// inputs.push(input10);

// console.log(inputs[0]);
// console.log(inputs[1]);
// console.log(inputs[2]);
// console.log(inputs[3]);
// console.log(inputs[4]);
// console.log(inputs[5]);
// console.log(inputs[6]);
// console.log(inputs[7]);
// console.log(inputs[8]);
// console.log(inputs[9]);

// Solution 2 -
// var inputs = [];

// for(var i = 0; i < 10; i++){
//     var input = prompt("Enter any input");
//     inputs.push(input);
// }

// for(var i = 0; i < inputs.length; i++){
//          console.log(inputs[i]);
//  }

// for(var inputNumber = 0; inputNumber <= 10; inputNumber++){
//     var input = prompt("Enter any input");
//     array.push(input)
// }

// var number = 0;

// while(number < 100){
//     console.log(number);
//     number++;
// }

// var nums = new Array(10);
// // iterate over each element and prompt for value
// for (var i = 0; i < nums.length; i++){
//   var input = prompt('Enter number ' + (i + 1) + ' of ' + (nums.length + 1));
//   // place value (as a number) into the array
//   nums[i] = new Number(input);
// }

// for(var i = 0; i < nums.length; i++){
//     console.log(nums[i]);
// }

//  var array = [];

// for(var inputNumber = 0; inputNumber <= 10; inputNumber++){
//     var input = prompt('Enter number ' + (inputNumber + 1) + ' of 10');
//     array.push(input)
// }

// for(var i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// var event = {
//     // object has key value pairs
//     name: "This is a demo item",
//     class: 10,
//     age: 50
// }

// var event1 = ["This is a demo item from event 1",10, 50];

// console.log(event.age)

// var student = {
//     fullName: "Ahan A",
//     grade: "8",
//     age: "14",
//     driver: false,
//     eats: function(){
//         console.log("Ahannn Is Drinking Alcohol")
//     },
//     hobbies: ["Danceing", "BasketBall", "Cricket"]
// }

// console.log(student.fullName);
// console.log(student.eats())
// console.log(student.hobbies[1])

// Create a object of your name
// it should have following -
// name, grade, age, two functions - isStudying, isPayingAttention in the class
// array inside the object - you need to put in three things that you like.

// Task 2
// Create a object of your favourite anime character
// it should have following -
// name, name of the show, two it should consisits of 3 functions of sleeping walking and talking and when the function is called it needs alerted.

// array inside the object - you need to put in three things that you like.

// array inside the object - you need to put in three things that you like.

// Classes and Objects

// var barbq = {
//     top: ["panner", "cheez", "extra sauce"],
//     cost: 10,
// }

// var barbq1 = {
//     top: ["panner", "tomato", "extra sauce"],
//     cost: 10,
// }

// var barbq2 = {
//     top: ["chilly", "cheez", "extra sauce"],
//     cost: 10,
// }

// class Pizza{
//     constructor(toppings, drinks, snacks, desert, speed){
//         this.toppings = toppings;
//         this.drinks = drinks;
//         this.snacks = snacks;
//         this.desert = desert;
//         this.speed = speed;
//     }

//     FeedBack(){
//        this.FeedBack = prompt("Did you like our Pizza");
//        this.DisplayFeedBackToTheCompany(this.FeedBack)
//     }

//     speedOfTheChef(){
//         alert(this.speed)
//     }

//     DisplayFeedBackToTheCompany(CustomerFeedBack){
//         alert(CustomerFeedBack)
//     }
// }

// var Ahan =  new Pizza(["cheez","chilly", "vegies"], "coke", "none", "ice-cream-cake")
// var Sohan =  new Pizza(["cheez","chilly", "vegies"], "coke", "none", "ice-cream-cake")
// var Neha =  new Pizza(["cheez","chilly", "vegies"], "coke", "none", "ice-cream-cake")
// var Swayam =  new Pizza(["cheez","chilly", "vegies"], "coke", "none", "ice-cream-cake")
// var sohanIsMilloiner =  new Pizza(["cheez","chilly", "vegies"], "coke", "none", "ice-cream-cake")

// Ahan.FeedBack()
// Sohan.FeedBack()

// class Students{
//     constructor(name,rollNo,address,math,science,history){
//         this.name = name;
//         this.rollNo = rollNo;
//         this.address = address;
//         this.math = math;
//         this.science = science;
//         this.history = history;
//     }

//     average(){
//         var avg = ( this.math + this.science + this.history ) / 3
//         console.log(this.name + " has an average of " + avg);
//     }

// }

// var student1 = new Students("Ahen",1,"Canada",13,17,20);

// student1.average();

// Task 10
// 1. Create a class of car
// 2. name,color,company,cost.
// 3. Speed, Average, playmusic
// 4. you need to create 3 car objects.

// Traditional Loops
//var names = ["ahen","sohan","neha","swayam"];

// for(var anything = 0; anything < arr2.length; anything++){
//     console.log(arr2[anything]);
// }

// For of loop
// for(var name of names){
//     console.log(name);
// }

// var nums = [3,2342,54,656,345,23,4,5,234]
// // for(var superman of nums){
// //     console.log(superman + 4);
// // }

// // Foreach loop
// names.forEach(function(element, index){
//     console.log(element + " is at " + index)
// })

// Task 12
// Read about foreach
// Using for of loop iterate through the array and log it to the console
// Using for each loop iterate throught the array and log it to the console
// using for each loop itereate thorugh the array and log the element as well as the index of the array.
// use a numbers array using for each loop iterate through the array and log the element as well as the index of the array and also incerement the element by its index

// Practice Session - PS 1
// 1. Calculate the users age using his birth year Write a function to tell the age of a person. Find out current year also take an input of the birth year using prompt.

// var year = prompt("Enter your birth year")
// var date = new Date();

// console.log(date);

// The output - Tue Nov 29 2022 05:42:20 GMT+0530 (India Standard Time)

// function calculateAge(){
//    console.log(date.getFullYear() - parseInt(year))
// }

// calculateAge()

// PS - 2
// 2. Write a function, which adds two numbers.
// 3. Using the same function i need to add the following.
// Example - 0, 1 | 1,2 | 2,3

// var num1 = 0;
// var num2 = 1;
// for (i = 0; i < 100; i++) {
//   console.log(num1 + num2);
//   num1 = num1 + 1;
//   num2 = num2 + 1;
// }

// function add(num1, num2){ 
//   var sum = num1 + num2;
//   console.log(sum);
// }

// for (i = 0; i < 100; i++) {
//   add(i , i + 1);
// }


// var age = 15

// if(age >= 16){
//     alert("Your are elidgible for the liscence")
// }else{
//     alert("You are not elidgible for the liscnce")
// }

// Comparision Operators -

/*
                Answer 
&&  true true   true
&&  true false  false

||  true true   true
||  true false  true
||  false false false

!true = false
!false = true  

*/


// var num1 = 12;
// var num2 = 6;

// if(num1 > 10 || num2 < 10 ){
//     console.log("Hi this is num1 and num2");
// }else{
//     console.log("Num1 faliled and Num2 was an disappointment")
// }


// if(!num1 > 10){
//     console.log("Hi this is num1 and num2");
// }else{
//     console.log("Num1 faliled and Num2 was an disappointment")
// }



// Task 13
// 1. a persons age is 20 years old you need to see if he is elidgible for marriage
// 2. there are two brothers sohan and ahhan wiith their teacher neha now miss neha tells both of them that if one of the brother fails she's gonna give zero to both of them. Write a condition to check this. sohan scored 20 ahhan scored 3.
// 3. there is a river which has a water level of 10 meter if the water stays below 20 meter the city is safe if it goes to 15 meter the city is in medium danger and if it dosent go 17 meters everyone is safe.

// if (num1 > 10) {
//     console.log("Hi i am an if case")
// }else if(num1 > 8){
//     console.log("Num1 is greater than 6")
// }else if(num1 > 6){
//     console.log("Num1 is greater than 6")
// }else if(num1 > 4){
//     console.log("Num1 is greater than 6")
// }else if(num1 > 2){
//     console.log("Num1 is greater than 6")
// }else{
//     console.log("Hi I am an else case")
// }


// Teranary operator / conditional statament
// var num4 = 20;

// num4 > 30 ? console.log("It is less") : console.log("it is more");

// Switch Case
//var grades = prompt("Enter your grades ex- A, A+, F+");

// 1. if the grades are a,aa,b,bb the student is excellent c,cc the student is average if the grades are f,ff then the student should be kicked of the school.

// Switch Case

// switch(grades){
//     case 'A':
//         console.log("Stud is exe");
//         break;
//     case 'B':
//         console.log("Stud is avg");
//         break;
//     case 'C':
//         console.log("Stud iis okay");
//         break;
//     default:
//         console.log("THe student is kicked")
// }

// Using switch case you need to check if a student's percent is good or avg if the value is > 75 excellent less than 75 avg.


// 4. Neha mam has changed a bit and she told both ahan and sohan that if one of them passes the test she will she won't complain to the parents. 


// var percent = 80

// switch(true){
//     case (percent > 75):
//         alert("Excellent");
//         break;
//     case (percent < 75):
//         alert("Avg");
//         break;
//     default:
//         alert("You should leave your kid!!!")
// }

// var ahhan = 10;
// var sohhan = 100;

// if(ahhan > 10 || sohhan > 10){
//     console.log("Neha wont complain")
// }else{
//     console.log("Neha is gonna give you some trauma");
// }

// Two String Methods

// var text = "Neha is in class 8 and Sohan is in class 7";

// var newText = text.split(" ");

// console.log(newText);

// var changedText = newText.join(",")

// console.log(changedText);

// var newText1 = text.slice(0,7)

// console.log(newText1);


// Array Methods

// var arr = ["neha", "sohan", "sohan sir", "ahhan", "sohan ceo codingzen"];

// console.log(arr.slice(1,4));

// const arr = ["neha", "sohan", "sohan sir", "ahhan", "sohan ceo codingzen"];

// arr.splice(1,0, "swayam") // Start Index, Delete Count, Insert 

// console.log(arr);