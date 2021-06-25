var a=[
    {"first":"1"}, 
    {"second": "2"}, 
    {"third": "1"}, 
    {"four": "5"}, 
    {"five":"5"}, 
    {"six":"9"},
    {"seven":"7"}
]

arr=[]
for (i in a){
    for (j in a[i]){
        var num=Number(a[i][j])
        if (arr.includes(num)==false){     
            arr.push(num)
        }
    }
}
console.log(arr)



