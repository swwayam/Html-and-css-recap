var name = "Neha";
var age = 10;
var address = "122 Apple Lane";
var lastYearPercentage = "98%";

console.log(name);
console.log(age);
console.log(address);
console.log(lastYearPercentage);

console.log(name + " is " + age + ", lives on " + address + ", and scored " + lastYearPercentage + " last year. ");




function generateNumber(){
    var num = document.getElementById("num");
    num.innerHTML = Math.round((Math.random() *100000));
}




function add(num, num2) {
    var sum = num + num2;
    console.log(sum);
}

add(5, 10)




var state = "sanfrancisco";
console.log(state);
var methods;

methods = state.toUpperCase();
console.log(methods);

methods = state.toLowerCase();
console.log(methods);

methods = state.charAt(1);
console.log(methods);




var number = 0;

while (number < 10) {
    console.log(number);
    number++;
}

for(var i=2; i<=8; i+=2){
    console.log(i)
}

class family{
    constructor(sister, mom, dad, brother){
        this.sister = sister;
        this.mom = mom;
        this.dad = dad;
        this.brother = brother;

    
}
getName(){
    alert(this.sister)
    alert(this.mom)
    alert(this.dad)
    alert(this.brother)
    
}
}
var fam1 = new family("neha", "kamala", "raj" ,"ryan")
fam1.getName()

var name = document.getElementById("name");
var cardno = document.getElementById("cardno");
var pin = document.getElementById("pin");
var phone = document.getElementById("phone")
function takeInputAndShowResult(event){
    event.preventDefault()}
    var userName = name.value;
    var userCardNo = cardno.value;
    var userPin = pin.value;
    var userPhone = phone.value;
    console.log(userName);
    console.log(userCardNo);
    console.log(userPin);
    console.log(userPhone);
      document.getElementById("name").value=""
      document.getElementById("cardno").value=""
      document.getElementById("pin").value=""
      document.getElementById("phone").value=""

