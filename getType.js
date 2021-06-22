// question ;   list=["5","rohini","6.5","15"]
var arr=["54","jyoti","12","-9","bharti","neha"]
i=0,a=[]
while (i<arr.length){
    if (Number(arr[i])>=0 || Number(arr[i])<=9 || Number(arr[i])<0){
        a.push("number")
    }else{
        a.push("string")

    }
    i++
}
console.log(a)
