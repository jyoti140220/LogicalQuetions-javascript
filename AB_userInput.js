const readlinesync=require('readline-sync').question
const num=readlinesync("enter the number :");
const array=["A","B"]
var arr=[]
i=1
while (i<=num){
    j=0
    while (j<array.length){
        arr.push(array[j]+i)
        j++

    }
    i++
}
console.log(arr)