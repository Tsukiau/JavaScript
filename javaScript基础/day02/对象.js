/* let sum = new Object() //属性（名词） 方法（动词）
  let 对象名 = {
      属性名 : 属性值,
      方法名 : 函数
  }  */
  //---------------------------属性（名词
  let goods = {
    na:'小米',
    num: 100213132,
    weight:'0.55kg',
    address:'中国大陆'

  }
  console.log(goods.na)   //查
  console.log(goods['address']);  //查
  goods.na = '大米'         //改
  console.log(goods.na);     
  goods.a = '123'           //加
  console.log(goods);
  delete goods.a           //删
  console.log(goods);

//-------------------------------方法（动词）
let Object = {
    uname :'西西',
     //方法
    s:function(x,y){
        console.log('鱼1')
        console.log(x ,y);
    }
}
//方法调用
Object.s(1,2)
