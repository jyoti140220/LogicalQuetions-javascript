const readlinesync=require('readline-sync').question
var num=parseInt(readlinesync("enter the number :"))
var obj=[
    {a:1},{b:2},{c:3},{d:4}
]
obj.splice(num,1)
console.log(obj);