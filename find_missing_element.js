// var a=[2,4,8,10];
// i=0
// var s=a[0],d=a[1]
// var e=d-s
// while (i<a.length){
//     if (a[i]+e!=a[i+1]){
//         console.log(a[i]+e)
//         break
//     }
//     i++   
// }


// function findMissingElement(){
// const p=new Promise((resolve, reject) => {
//     var a = [2, 4, 6, 10, 12]
//     var i = 0, s = a[0], d = a[1], e = d - s
//     while (i < a.length) {
//         if (a[i] + e != a[i+1]) {
//             console.log(a[i] + e)
//             break
//         }
//         i++


//     }

function findMissingElement(){
    return new Promise((resolve,reject)=>{
        var a = [2, 4, 6, 10, 12]
    var i = 0, s = a[0], d = a[1], e = d - s
    while (i < a.length) {
        if (a[i] + e != a[i+1]) {
            resolve(a[i] + e)
            
        }
        i++


    }

    })
}
async function sy(){
    let data=await findMissingElement()
    console.log(data)
}
sy()