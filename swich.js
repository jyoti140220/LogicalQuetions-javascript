const readlinesync = require('readline-sync').question
var num = parseInt(readlinesync("enter the number :"))
var answer = "as"
switch (num) {
    case 1:
    case 3:
        answer = "first"
        break
    case 2:
        answer = "second"
        break

}
console.log(answer);

