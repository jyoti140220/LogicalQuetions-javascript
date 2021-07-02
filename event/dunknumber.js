const EventEmitter=require('events');
const event=new EventEmitter();

event.on("CheckDunkNumber",(num)=>{
    if (num.includes(0)==true && num[0]!=0){
        console.log("it is dunk number")
    }
    else{
        console.log("it is not a dunk number")
    }
})

const readlinesync=require('readline-sync').question
const num=readlinesync("enter the number :")

event.emit("CheckDunkNumber",num)