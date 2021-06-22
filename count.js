var a=['aba','bacasa','aaa','klhjk'];
var i=0,c=0
while (i<a.length){
    if (a[i].length>2 && a[i][0]==a[i][a[i].length-1]){
        c++;

    }
    i++;

}
console.log(c)