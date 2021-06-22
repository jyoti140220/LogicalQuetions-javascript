var a=[[-12,-34,-5,-1],[56,65,3,4,33],[45,67,45,33,222]]
var i=0,arr=[]
while (i<a.length){
    var j=0,max=a[i][j]
    while (j<a[i].length){
        if (a[i][j]>max){
            max=a[i][j]
        }
        j++
    }
    arr.push(max)
    i++
}
console.log(arr);