function secondMax(fNumber,sNumber,tNumber) {
    return new Promise((resolve,reject)=>{
        if (fNumber>sNumber && fNumber<tNumber || fNumber<sNumber && fNumber>tNumber){
            resolve(`second maximum number is ${fNumber}`)
        }else if (sNumber>fNumber && sNumber<tNumber ||sNumber<fNumber && sNumber>tNumber){
            resolve(`second maximum number is ${sNumber}`)
        }else{
            reject(`second maximum number is ${tNumber}`)
        }
    })
    
}
secondMax(322,132,34).then(a=>{
    console.log(a)
}).catch(s=>{
    console.log(s)
})

