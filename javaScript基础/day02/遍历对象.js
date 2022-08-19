/* let arr =[1,2,3]
for(let k in arr){
    console.log(k);   //索引号  字符串
    console.log(arr[k]);
}  */
let obj = {
    uname: '西西',
    age:18,
    der:'object'

}
for( let k in obj){
    console.log(k)  // 属性名 'uname' 'agr' 'der'  k直接拿过来是字符串
    //重点： k是获取对象的属性名 k=='uname'  ， 对象名[k]是获取属性值
    // console.log(obj);
    console.log(obj[k]) //遍历属性值 obj[k]
}
console.log('------------------------------------------');
let students = [
    {uname:'小明1',age:18, gender:'男', hometown:'湖南1'},
    {uname:'小明2',age:19, gender:'男', hometown:'湖南2'},
    {uname:'小明3',age:20, gender:'男', hometown:'湖南3'}
]
for (let i = 0; i < students.length;i++){
        // console.log(i);    //索引号 
        // console.log(students[i]); //每个对象
        console.log(students[i].uname);
   }


console.log('------------------------------------------');
// 内置对象
// console.log(Math);
console.log(Math.random()); //生成随机数  0 -1

console.log( Math.floor(Math.random()* (10 + 1))) ;