const readlinesync=require('readline-sync').question
var num=parseInt(readlinesync("enter the number :-- "))
let i=2,my=true
while (i<num){
    if(num%i==0){
        my=false
        break
    }
    i++;
}
if(my){
    console.log(`${num}  is a prime number `);
}else{
    console.log(`${num}  is not a prime number `);
}


// var a=[23,34,32,45,4,56,67,87,54]
// a.splice(1,0,"hj","kl")
// console.log(a);

// var a="jyoti"
// console.log(a.charAt(1));

