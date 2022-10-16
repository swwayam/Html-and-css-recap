function calculateBMI(){
    var height = document.getElementById("height");
    var weight = document.getElementById("weight");
    var bmi = weight.value/(height.value*height.value);
    console.log(bmi);
}