var readlinesync=require('readline-sync').question;
var num=parseInt(readlinesync("enter the number of the word :"))


var a=[]
for (var i=1;i<=num;i++){
    var word=readlinesync("enter the words :")
    a.push(word)

}
console.log(a)
var i=0,s={}
while (i<a.length){
    var c=0,j=0;
    while (j<a.length){
        if (a[i]==a[j]){
            c=c+1
        }
        j++;

    }
    s[a[i]]=c
    i++
}
console.log(s)
