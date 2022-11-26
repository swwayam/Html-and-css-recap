//console.log("Hello World!")

// var number = 50;
// var name = "Rahul";

// console.log(number);
// console.log(name);

// console.log(name +" has scored " + number);

// // Task 1 
// // name, age , profession, salary

//var age = 45;
//var name = "Benjaman";
//var profession = "McDonalds Worker";
//var salary = 10000;
//console.log(name+" is "+age+" years old, and he is a "+profession+" and makes "+salary+" dollars every year.")

// var num1 = 10
// var num2 = 20

// console.log("The addition is ", num1 % num2);
// console.log(Math.PI);

// Task 2
// Calculate the BMI create a var kg and h  var bmi = (BMI = kg/h) 

//var kg = 50
//var h = 1.74
//var bmi = kg/h

//console.log(name+" has a bmi of "+bmi)

// Task 3 
// Make the formula as weight / height square

//var bmi2 = kg/(h*h)

//console.log(name+" has a bmi of "+bmi2)


// Task 4
// Modify Your Existing Bmi calculator

//var kg = prompt("Enter your weight in kg's")
//var h = prompt("Enter your height in meters")
//var bmi = kg/(h*h)
//alert(bmi)

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

//var taskName = "Apple Iphone 12"
//var cost = "900"
//var tax = "100"
//var totalCost;

// Given are the above variables console log the total cost
// select the i and 1 from the taskName and log them to the console
// find out the reminder of cost / tax

//console.log(parseInt(cost) + parseInt(tax))
//console.log(taskName[6])
//console.log(tax[0])
//console.log(cost % tax)

// Task 6 

// Do the following
// 1. Take Input from the user
// 2. Convert the input to a string
// 3. Make the string lower case and uppercase
// 4. Find the length of the string

//var input = prompt("raghh")


//var methods;

//methods = input.toUpperCase();
//console.log(methods);

//methods = input.toLowerCase();
//console.log(methods);

//methods = input.length;
//console.log(methods);
//Task 7


//for( var x = 2; x <= 100; x +=2){
 //   console.log(x);
//}
// Task 8
// Take input from the user and check if the input contains 1 log to console the input constains 1 else alert there is no number.

// IF Else Statements 9-30-2022 EST

//var username = prompt("Enter The username")

//var ahhh = prompt("enter a sequence of numbers")

    //if(ahhh == 1){
       //console.log(ahhh)
   //}
    //else{
      //alert("There is no 1")
    //}

   //Task 9
   /*function add(num1, num2){
      var sum = num1 + num2
      console.log(sum)
   }
   add(4, 8)
   function subtract(num3, num4){
    var difference = num3 - num4
    console.log(difference)
   }
   subtract(5,2)
   function multiply(num5, num6){
   var product = num5*num6
   console.log(product)
   }
   multiply(3, 7)
   function divide(num7, num8){
   var quotient = num7/num8
   console.log(quotient)
   }
   divide(15, 5)*/

 //Task 10
 //var array = [];
 //for(var inputNumber = 0; inputNumber <= 10; inputNumber++){
  // var input = prompt("Enter any input");
  // array.push(input)
 //}

 // for(var i = 0; i < array.length; i++){
 //   console.log(array[i]);
// } 

 //Hw

  //var array = [];
 //for(var inputNumber = 0; inputNumber <= 5; inputNumber++){
   //var input = prompt("Enter any input");
   //array.push(input)
 //}

 //for(var i = 0; i < array.length; i++){
    // console.log(array[i]);
 //}
 
 //array.shift()
 //array.shift()
 //array.shift()
 //array.pop();

// Task 10
// 1. Create a class of car
// 2. name,color,company,cost.
// 3. Speed, Average, playmusic
// 4. you need to create 3 car objects.
  class car{
    constructor(name, colour, company, cost, speed, average, music){
        this.name = name;
        this.colour = colour;
        this.company = company;
        this.cost = cost;
        this.speed = speed;
        this.average = average;
        this.music = music;
    }

    speed(){
      alert(this.speed)
    }
    average(){
      alert(this.average)
    }
    music(){
      alert(this.music)
    }
  }


  
  var car1 =  new car("ford1520987", "black", "ford", "$2507893", "148970km/h", "-905423km", "yes")
  var car2 =  new car("toyota43895-0", "red", "toyota", "$2689403", "548902km/h", "35643564km", "no")
  var car3 =  new car("nissan159870", "blue", "nissan", "$19027583", "452324352km/h", "24378590km", "depends")

  car1.speed()
  car3.average()
  car2.music()