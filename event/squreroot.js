// function squareroot(number) {
//     var number;
//     for (var i = number; i >= 1; i--) {
//         if (i * i === number) {
//             number = i;
//             break;
//        }
//    }
//    return number;
// }

// console.log(squareroot(9))




const readlinesync = require('readline-sync').question
const num = parseInt(readlinesync("enter the number :"))
var i = num;
var number;
while (i >= 1) {
    if (i * i == num) {
        number= i
        break
    }
    i=i-1;
}
console.log(number)