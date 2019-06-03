// You get an array of numbers, return the sum of all of the positives ones.
// Example:
// [1,-4,7,12] => 1+7+12 = 20

// orig answer
// export function positiveSum(arr) {
//   let n = 0;
//   arr.forEach(num => {
//     if(num>=0){
//       n += num;
//     }
//   });
//   return Number(n);
// }

export function positiveSum(arr){
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}