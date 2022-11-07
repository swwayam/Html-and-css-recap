/*var me = {
    name: "Ahaan",
    grade: "8",
    age: "13",
    isStudying: function(){
        console.log("Ahaan is not studying")
    },
    isPayingAttention: function(){
        console.log("Ahaan is not paying attention")
    },
    likes: ["soccer", "sleep", "food"]
}
    console.log(me.name);
console.log(me.isStudying())
console.log(me.isPayingAttention())
console.log(me.likes[0])
console.log(me.grade)
console.log(me.age)
*/

var him = {
    name: "Thorfinn",
    show: "Vinland Saga",
    sleep: function(){
        alert("He is sleeping")
    },
    walk: function(){
        alert("He is walking")
    },
    talk: function(){
        alert("He is talking")
    },
    likes: ["walking", "talking", "sleeping"]
    
}

console.log(him.name)
console.log(him.show)
him.sleep()
him.walk()
him.talk()
console.log(him.likes[0])