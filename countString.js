var string="w3resource",str1=""
for (i in string){
    if(!str1.includes(string[i])){
        str1+=string[i]
    
    }
}
dic={}
for (i in str1){
    var count=0
    for(j in string){
        if(str1[i]==string[j]){
            count++;
        }

    }
    dic[str1[i]]=count
}
console.log(dic);
