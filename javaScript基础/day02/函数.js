/* function getSun(num1,num2){
    let sum = 0;
    for(var i =num1; i <=num2; i++){
        sum +=i;
    }
    console.log(sum);
 }
 getSun(1,100);
//   function 函数名（）{函数体}  
//   
function 函数名(形参1,形参2){// 在声明函数的小括号里面是 形参 （形式上的参数）
     console.log(函数名); //形参是接受实参的
}
函数名(实参1,实参2);// 在函数调用的小括号里面是实参（实际的参数） */
function getSun(num1, num2) {
    console.log(num1 + num2);
}
getSun(1, 3);
getSun(10, 3);
function getSums(s, e) {
    let sum = 0;
    for (let i = s; i <= e; i++) {
        sum += i;
    }
    console.log(sum);
}
getSums(1, 100);
console.log("-----------------------------------");
function s(s1,s2){
    //  console.log(s1,s2);
    return [s1,s2];
}
console.log(s(1,2));
console.log("-----------------------------------");
//两个数的最大值
function getMax(num11,num22){
    if (num11 > num22){
        return num11;
    }else {
        return num22;
    }
    // return num11 > num22 ? num11 : num22;
} 
console.log(getMax(1,3));



console.log("-----------------------------------");
function getM(arr){
    let max = arr[0];
    for( let i =1; i<=arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
// getM([1,2,3,4,5]);
let re = getM([1,2,3,4,5]);
console.log(re);





console.log("-----------------------------------");
//break 结束当前循环
//continue //跳出本次循环
//return 
// arguments an g men s
function fn(){
    //  console.log(arguments.length, arguments); 
    let max = arguments[0];
     for( let i =0; i<arguments.length; i++){
        if (max < arguments[i]){
            max =arguments[i];
        }
     }
     return max;
}
let re1 = fn((1,2,3,4,9));
console.log(re1);






console.log("-----------------------------------");
function reverse(){
     let newArr = [];
     for( let i=arguments.length -1;i>=0; i--){
         newArr[newArr.length] = arguments[i];
       
     }
     return newArr;
}
let arr1 = reverse(1,8,3,4,5);
console.log(arr1);
console.log("-----------------------------------");





function sort(arr){
    for( let i =0 ; i<arr.length; i++){
        for (let j =0; j<arr.length-1 -i; j++){
            if (arr[j] >arr[j +1]){
                let temp = arr[j];
                arr[j] = arr[j +1];
                arr[j +1] = temp;
            }
        }
    }
    return arr;
}
let re2 = sort([1,4,6,3,2]);
console.log(re2);