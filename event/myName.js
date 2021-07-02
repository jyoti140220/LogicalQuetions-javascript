const EventEmitter = require('events');
const event = new EventEmitter();

event.on('sayMyName',(name)=>{
    console.log(`My Name Is ${name}`)

})
event.emit('sayMyName',"Jyoti")