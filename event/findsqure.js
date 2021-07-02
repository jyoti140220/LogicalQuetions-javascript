const EventEmitter=require('events');
const event=new EventEmitter();

event.on("FindSqure",(num)=>{
    console.log(num**2)

})

const readlinesync=require('readline-sync').question
const number=parseInt(readlinesync("enter the number :"))

event.emit("FindSqure",number)