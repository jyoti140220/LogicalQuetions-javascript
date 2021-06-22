const readlinesync=require('readline-sync').question
const num=parseInt(readlinesync("enter the number :"))
var i=1,dic={}
while (i<=num){
    j=1
    a=[]
    while (j<=10){
        a.push(i*j)
        j++;

    }
    dic[i]=a
    i++;

}
console.log(dic)

