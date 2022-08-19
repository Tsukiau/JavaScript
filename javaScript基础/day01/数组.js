var s = 0;

var arr1 =[1,2,4,5,6];

for ( var i = 0; i < arr1.length; i++){
        s++;
        var sum = arr1[i];
        console.log(sum);
        
}
console.log("长度"+s);
console.log("------------------------");
var arr2 = [2,3,6,4,5];
var sum2 = 0;
for (var i =0; i < arr2.length; i++){
    a =  arr2[i];
    sum2 += arr2[i];
    console.log(a);
}
console.log('和'+sum2);
//
var max = arr2[0];
for (var i = 0; i < arr2.length; i++){
    if(max < arr2[i]) {
         max = arr2[i];
    }
}
console.log("最大"+max);
// 
var min = arr2[2];
for(var i = 0; i< arr2.length; i++){
    if( min > arr2[i]){
           min = arr2[i];
    }
}
console.log("最小"+min);
var p = (sum2 / arr2.length);
console.log("平均"+p);
//
console.log("-----------------------------------------")
var arr3 = ['abc','gdf','rsg','gdf'];
var str = '';
var sep = '|';
for ( var i = 0; i < arr3.length; i++){
    str +=arr3[i] + sep;

}
console.log(str);
//
console.log("----------------------------------------")
var arr4 = ['aaa','bbb','cccc'];
console.log(arr4.length);
arr4.length = 5;
console.log(arr4);//<2 empty items>
console.log(arr4[4]);//undefined

arr4[5] = '123123';  //追加
console.log(arr4)

arr4[0] = '123';  //替换
console.log(arr4)

console.log("----------------------------------------")
