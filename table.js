//[[1,[1,2,3,4,5,6,7,8,9,10]],[2,[2,4,6,8,10,12,14,16,18,20]],[3,[3,6,9,12,15,18,21,24,27,30]]]


const readlinesync=require('readline-sync').question;
const num=parseInt(readlinesync("enter the number :"))
var arr=[],i=1
while (i<=num){
    arr.push(i)
    j=1,w=[]
    while(j<=10){
        w.push(i*j)
        j++
    }
    arr.push(w)
    i++
}
console.log(arr)


