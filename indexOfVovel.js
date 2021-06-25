const readlinesync=require('readline-sync').question
var str=readlinesync("enetr the string :---- ")
arr1=[]
for (i in str){
    if (str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
        var index=str.indexOf(str[i])
        arr1.push(`Letter :- ${str[i]} Index :- ${index}`)
    
    }
}
console.log(arr1);



