const EventEmitter=require('events');
const event=new EventEmitter();

event.on('Armstrong',(number)=>{
    var power=number.length,i=0,sum=0
    while(i<power){
        var digit=parseInt(number[i]**power)
        sum=sum+digit
        i++
    }
    if (number==sum){
        console.log("It Is Armstrong Number")
    }else{
        console.log("It Is Not Armstrong Number")
    }

})

const readlinesync=require('readline-sync').question
const num=readlinesync("enter num :")

event.emit('Armstrong',num)

