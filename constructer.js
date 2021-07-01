

// create object with constructer function
function person() {
    this.name="jyoti",
    this.age=12
    
}
var p=new person()
p.age=111
console.log(p);


// create object with object literals
var person={
    name:"jyoti",
    age:123
}
console.log(person);