// function se(fNumber,sNumber,tNumber) {
//     return new Promise((resolve,reject)=>{
//         if (fNumber>sNumber && fNumber<tNumber || fNumber<sNumber && fNumber>tNumber){
//             resolve(`second maximum number is ${fNumber}`)
//         }else if (sNumber>fNumber && sNumber<tNumber ||sNumber<fNumber && sNumber>tNumber){
//             resolve(`second maximum number is ${sNumber}`)
//         }else{
//             reject(`second maximum number is ${tNumber}`)
//         }
//     })
    
// }
// async function sy(){
//     let secondMax=await se(12,34,13)
//     console.log(secondMax)

// }
// sy().catch((a)=>{
//     console.log(a)
// })


// function who() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve('🤡');
//     }, 200);
//   });
// }

// function what() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('lurks');
//     }, 300);
//   });
// }

// function where() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('in the shadows');
//     }, 500);
//   });
// }

// async function msg(){
//   let data1=await who()
//   let data2=await what()
//   let data3=await where()
//   console.log(data1,data2,data3)
// }
// msg()


// var fs = require("fs");

// // Asynchronous - Opening File
// console.log("Going to open file!");
// fs.open('input.txt', 'r+', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log(fd)
//    console.log("File opened successfully!");     
// });
// fs.stat('input.txt', (err,jk)=>{
//   if (err){
//     console.log(err)
//   }else{
//     console.log(jk)
//   }
// })


const readlinesync=require('readline-sync').question
var num=parseInt(readlinesync("enter the number :"))
g=num
console.log("even number........")
i=0
while(i>=0){
  if(i==3){
    break
  }
  else if (g%2==0){
    console.log(g)
    g=g-1
    i++
  }
  g=g-1
  
}
console.log("odd number.....")
i=0
while(i>=0){
  if(i==3){
    break
  }
  else if (num%2!=0){
    console.log(num)
    num=num+1
    i++
  }
  num=num+1
  
}