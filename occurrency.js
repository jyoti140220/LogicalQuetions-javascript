var str="MISSISSIPPI",str1=""

for (i in str){
    if (str1.includes(str[i])==false){
        str1=str1+str[i]
    }
}
dic={}
for (j in str1){
    var count=0
    for (k in str){
        if (str1[j]==str[k]){
            count++;
        }
    }
    dic[str1[j]]=count
}
console.log(dic)









// output
// {M:1,I:4,S:4,P:2} 