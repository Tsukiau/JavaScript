/* //随机 颜色
function Color(flag = true) {
    let str = '#'
    let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f',]
    if (flag) {
        for(let i =0; i<6;i++){
        let random = Math.floor(Math.random() * arr.length)
        str += arr[random]
        }
        return str
            
    }else{
       rgb = Math.floor(Math.random() * 255 +1)+','
       + Math.floor(Math.random() *255 +1)+','
       + Math.floor(Math.random() *255 +1)
       return rgb
    }
}
console.log(Color(true))
console.log(Color(false))
 */
function color(flag){
    let str ='#'
    let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f',]
    if(flag){
        for(let i =0; i <6; i++){
            let random = Math.floor(Math.random() * arr.length)
            str += arr[random]
        }
        return str
    }else{
        rgb = Math.floor(Math.random() * 255 +1)+','
        + Math.floor(Math.random() *255 +1)+','
        + Math.floor(Math.random() *255 +1)

        return rgb
    }
}
console.log(color(true))
console.log(color(false))
//冒泡  复习
const arr=[4,6,3,4,2,1]
for( let i = 0; i< arr.length -1; i++){
    for(let j = 0; j <arr.length- 1 -i; j++){
        if(arr[j] > arr[j +1]){
            let temp = arr[j]
            arr[j] = arr[ j+1]
            arr[j+1] = temp
        }
    }
}
console.log(arr);