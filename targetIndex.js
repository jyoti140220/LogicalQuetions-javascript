const readlinesync = require('readline-sync').question
function sy(array, target) {
    var b=array.length
    for (i in array) {
        if (array[i] == target) {
            console.log(array.indexOf(array[i]))
            break
        }
        else if (target < array[i]) {
                console.log(array.indexOf(array[i]))
                break

        }else if(b-1==i && array[i]<target){
            n=array.indexOf(array[i])
            console.log(n+1)
        }
    }


}
var nums=[1,3,5,6], target = 7
sy(nums, target)