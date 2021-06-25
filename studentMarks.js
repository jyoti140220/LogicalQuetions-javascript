// output

// {
//     'sonu':85,
//     'Kartik':90,
//     'Deepak':96,
//     'Aman':76,
//     'Somesh':60
// } 
let dic={}
const readlinesync=require('readline-sync').question
for (var i=1;i<=5;i++){
    var student=readlinesync("enter the student name :-- ")
    var marks=parseInt(readlinesync("enter the marks of students :-- "))
    dic[student]=marks

}
console.log(dic);
