// 1. Using Different Variables store your details like - name, age, address, lastYearPercentage and log the information to the console with meaning full sentence
var name = " Sohan Adhikari"
age = " is 16 years old"
var grade = " and is in 12th Grade."
var gpa = " His GPA is a 4.0."
console.log(name + "," + age + grade +  gpa )





// 2. Generate two random numbers when you click on a button, and once the numbers are generated show their addition and multiplication,

        
function number(){
    var random = Math.round((Math.random() * 100));
    var randoma = Math.round((Math.random() * 100));
     document.querySelector('.a').innerHTML = (random + randoma);
     document.querySelector('.b').innerHTML = (random * randoma);
     
    
}

       
        
// 3.  var num = "5";
//     var num1 = "10"
// copy paste the above code, add the two numbers and show the result in console
var num = "5";
   var num1 = "10";
console.log(parseInt(num1) + parseInt(num));

 
// 4. var state = "Sansfaransisco" convert the followin string to upper case, lower case and get the character at the index 6.
var state = "Sansfaransisco"
var methods;
 methods = state.toUpperCase();
 console.log(methods);
 methods = state.toLowerCase();
 console.log(methods);
 console.log(state[6]);

// 5. Console log 1,2,3,4,6,8,10 using while loop.
var lineNumbera = 1;
 while(lineNumbera < 5) {
     lineNumbera = lineNumbera + 1
    console.log(lineNumbera)   
 }
 if(lineNumbera == 4){
    lineNumbera = lineNumbera + 2
    console.log(lineNumbera)   
 }

// 6. Console log 2,4,6,8 using for loop.
for (var lineNumber = 0; lineNumber < 101; lineNumber+ 2) {
         console.log(lineNumber);
    }
// 7. Using For loop console.log() the following array ["neha", "ahan", "sohan"]
var a1a = ["neha", "ahan", "sohan"]
for(var i = 0; i < 1; i++){
       console.log(a1a);
}
// 8. Create a class of family put in the names of your family members create a method - getName, which when called should alert the name.
class family{
    constructor(name){
        this.name = name;
    }

    getName(){
       alert(this.name)
        
       } 

        }
    

// 9. Create a form in html take the details of a persons credit card and his mobile number and show it as a h1 in the pasge
  function take(event){  
    
    var info1 = document.querySelector('a2')
    var info2 = document.querySelector('a3')
    document.querySelector('.value').innerHTML = (info1)
    document.querySelector('.value1').innerHTML = (info2)
}

