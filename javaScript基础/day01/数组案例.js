
// var arr = [];
// for (var i = 0; i < 10; i++) {
//     arr[i] = i + 1;
// }
// console.log(arr);
//方法1
// var arr =[2,0,6,7,20,44,23,32,9,5];
// var newArr = [];
// var j =0;
// for ( var i = 0; i <arr.length; i++){
//     if (arr[i] >= 10){
//         newArr[j] = arr[i];
//         j++;
//     }
// }
// console.log(newArr);
//方法2
var arr =[2,0,6,7,20,44,23,32,9,5];
var newArr = [];
// 新数组索引号应该从0开始 依次递增
for ( var i = 0; i <arr.length; i++){
    if (arr[i] >= 10){
        newArr[newArr.length] = arr[i];
    }
}
console.log(newArr);
console.log("-------------------------------------------")
var arr1 = [2,0,6,1,77,0,53,45,0];
var newArr1=[];
for (var i =0; i < arr1.length; i++){
    if(arr1[i] > 0){
           newArr1[newArr1.length] = arr1[i]; 
    }
}
console.log(newArr1);
//反转
console.log("-------------------------------------------")
// var arr2 = [1,2,3,4,5];
// var newArr2 =[];
// for(var i = arr2.length-1; i>=0;i--){
//     newArr2[newArr2.length] = arr2[i];
// }
// console.log(newArr2);
var arr2 = [1,2,3,4,5];
var newArr2 = [];
for (var i = arr2.length-1; i >=0; i--){
    newArr2[newArr2.length] = arr2[i];
}
console.log(newArr2);
console.log("-------------------------------------------")

