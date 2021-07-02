const EventEmitter=require('events');
const event=new EventEmitter();

event.on('say',(num)=>{
    if(num%2==0){
        console.log(`${num} is a even number`)

    }else{
        console.log(`${num} is a odd number`)
    }
})

const readlinesync=require('readline-sync').question
const num=parseInt(readlinesync("enetr the number :"))
event.emit("say",num)