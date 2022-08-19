// js是动态语言 变量的数据类型是可以变化的
var x = 10; // x 是数字型 
x = 'pink'; // x 字符串型
Number //数字型
Boolean // 布尔型  true(1) false(0)
String
undefined
//如果一个变量声明未赋值 就是 undefined 未定义数据类型
//和数字相加 最后的结果是 NaN

null //空值
// ----------------------
// 3. 数字型的最大值
console.log(Number.MAX_VALUE);
// 4. 数字型的最小值
console.log(Number.MIN_VALUE);
// 5. 无穷大
console.log(Number.MAX_VALUE * 2); // Infinity 无穷大  
// 6. 无穷小
console.log(-Number.MAX_VALUE * 2); // -Infinity 无穷大
// 7. 非数字
console.log('pink老师' - 100); // NaN

console.log(isNaN(12));
console.log(isNaN('AA'));
//-------------------------------------------------
var a = '12331asd';
console.log(a);
console.log(a.length);
//------------------------------------------------
//  typeo  检测是什么类型
var num = 10;
console.log(typeof num); // number
var str = 'pink';
console.log(typeof str); // string
var flag = true;
console.log(typeof flag); // boolean
var vari = undefined;
console.log(typeof vari); // undefined
var timer = null;
console.log(typeof timer); // object

// prompt 取过来的值是 字符型的
var age = prompt('请输入您的年龄');
console.log(age);