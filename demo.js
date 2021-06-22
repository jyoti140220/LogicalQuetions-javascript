function myFun(para1,para2) {
    return new Promise((resolve,reject)=>{
        if (para1>=para2){
            resolve(`Highest number is ${para1}`)
        }else{
            reject(`Highest number is ${para2}`)
        }
    })
    
}
myFun(231,45).then((res)=>{
    console.log(res)
}).catch(err=>console.log(err))