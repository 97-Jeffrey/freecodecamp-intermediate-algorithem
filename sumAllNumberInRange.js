function sumAll(arr) {
  if(arr[0]>arr[1]){
    [arr[0], arr[1]]=[arr[1], arr[0]]
  }
  let newarr = [];
  
  for(let i=arr[0]; i<=arr[1]; i++){
    newarr.push(i)
  }
  let sum = 0;
  
  for(let num of newarr){
    sum += num
  }
  return sum;
}

console.log(sumAll([10,5]))