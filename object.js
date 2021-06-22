function objec(par) {
    return new Promise((resolve,reject)=>{
        par.name="jyoti"
        par.age=12
        resolve(par)
    })
    
    
}
var e={
    name:"tannu",
    age:13,
    hobby:"reading"
}
async function sy() {
    let data=await objec(e)
    console.log(data)
}
sy()
