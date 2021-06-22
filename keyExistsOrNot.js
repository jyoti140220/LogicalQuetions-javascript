const readlinesync=require('readline-sync').question
var key=readlinesync("enter the key :--")

var a={
    name:"jyoti",
    age:23

}
var count=0
for (i in a){
    if(i==key){
        count++;
    }


}
if (count==0){
    var value=readlinesync("enter the value for key :-- ")
    a[key]=value
    console.log(a)
}else{
    console.log("Aleredy exists")

    
}