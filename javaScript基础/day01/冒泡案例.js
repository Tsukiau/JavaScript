// let arr = [1,4,5,3,2];
// for (let i = 0; i<= arr.length -1; i++){
//      for (let j =0; j <=arr.length -i -1; j++){
//         if(arr[j] > arr[j + 1]){
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//      }
// }
// console.log(arr)
console.log('--------------------------------')
let arr = [2,4,5,3,1,];
 for( let i =0; i< arr.length-1;i++){
    for(let j =0; j < arr.length-1-i;j++){
        if(arr[j] >arr[j +1]){
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
 }
 console.log(arr);



