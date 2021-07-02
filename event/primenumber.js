const EventEmitter=require('events');
const event=new EventEmitter()
event.on("Say",()=>{
    var i=1,c=0
    while (i<=num){
        if (num%i==0){
            c++;
        }
        i++;
    }
    if (c==2){
        console.log(num,"it is prime number")
    }else{
        console.log(num,"it is not a prime number")
    }

})

const readlinesync=require('readline-sync').question
const num=parseInt(readlinesync("enetr the number :"))
event.emit("Say",num)