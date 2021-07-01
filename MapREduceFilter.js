// fill method 

a=[12,34,25,67,66,78,45]
a.fill("jyoti",2,5)         // 1st is what you want to fill 2nd is start and 3rd is for ending
console.log(a);             // start is incusive and end is exclusive



// filter method 
// this method is using for filtering the Array......
// filter method origenal Array ko change nhi krta h dusre variable m return krta h new Array

a=[12,13,14,15,16,2,1,1,89]
var e=a.filter((v,i,a)=>{
    return v%2==0
})
console.log(e);


// map method  modify the array ye arrtithmethic operatpre k sath kam krta h

ab=[1,2,3,4,5,6]
var e=ab.map((item)=>item+2)
console.log(e);



// reduce method reduce krke deta h  

sd=[1,2,3,4]
var sum=sd.reduce((first,item)=>{
    return first*item
})
console.log(sum);