const EventEmitter=require('events');
const event=new EventEmitter();

event.on("oneToTenNumber",()=>{
    function sy(num){
        while (num<=10){
            console.log(num)
            // sy(num+1)
            
        }
        sy(1)
        
    }
    
})



event.emit("oneToTenNumber")



// function sy(num){
//     while (num<=10){
//         console.log(num)
//         sy(num+1)
//     }
// }
// sy(10)