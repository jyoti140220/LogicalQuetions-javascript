// * asterisk
// function* number(){
//     return "Jyoti"
// }
// var main=number()
// console.log(main.next());



function* number(){
    // yield 1
    // yield 2
    let i=0;
    while(i<=4){
        yield i++;
    }
    return "Completed"

}
var main=number()
console.log(main.next());
console.log(main.next());
console.log(main.next());
console.log(main.next());
console.log(main.next());
console.log(main.next());






