
      /*   var sum = prompt("请输入：")
        var str = '';
        for (var i = 1; i <= sum; i++) {
            str = str + '※'
        }
        console.log(str); */
        //--------------------------------------
        var sum = prompt("行");
        var a = '';
        for(var i =1; i <= sum; i++)  {
            for(var j = i; j<= sum; j++){
                a = a + '※';
        }
        a +='\n';
      }
    console.log(a);
    //--------------------------------------
var str = '';
for(var i =1; i <=9; i++){
  for(var j =1; j<=i; i++){
    str += j +'x'+i+'='+(i * j);
  }
  str +="\n";
}
console.log(str); 
