//随机数
/* console.log(Math.random()); //生成随机数  0 -1

console.log( Math.floor(Math.random()* (10 + 1))) ; */
// let arr = ['red', 'green', 'blue']
// let random = Math.floor(Math.random()*arr.length)
// console.log(random);
// console.log(arr[random]);
console.log('-----------------------------------------------');

//n - m
/* function Random(n,m){
    return Math.floor(Math.random() * (m - n +1)) +n
}
console.log(Random(1,4)) */
console.log('-----------------------------------------------');

//随机点名  不重复
// splice(起始位置，删除几个元素)
let arr = ['张三1','张三2','张三3','张三4','张三5']
     let random = Math.floor(Math.random() * arr.length)
     console.log(arr[random]);
     arr.splice(random,1)
     console.log(arr);

     
console.log('-----------------------------------------------');
//猜数字  1-10
function getSum(n,m){
   return Math.floor(Math.random() * ( m -n +1)) +n
}
let Random = getSum(1,10)
console.log(Random);
while(true){
    let num =+prompt('请输入：')
    if(num > Random){
        alert('大了')
    }else if (num < Random){
        alert('小了')
    }else{
        alert("123")
        break
    }
}

console.log('-----------------------------------------------');
//猜数字  设定
function getSum(n,m){
    return Math.floor(Math.random() * ( m -n +1)) +n
 }
 let ran = getSum(1,10)

 let flag = true
 for (let i = 1; i <= 3; i++) {
     let num = +prompt("请输入")
     if (num > ran) {
         alert('大了')
     } else if (num < ran) {
         alert('小了')
     } else {
         flag = false
         alert('000')
         break
     }
 }
 if (flag) {
     alert("没了")
 }