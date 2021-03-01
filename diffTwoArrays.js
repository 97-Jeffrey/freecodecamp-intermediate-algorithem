function diffArray(arr1, arr2) {
  let output = [];
  for(let each of arr1){
    if(!arr2.includes(each)){
      output.push(each)
    }
  }
  for(let each of arr2){
    if(!arr1.includes(each)){
      output.push(each)
    }
  }
  return output
}

console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]))

// this algorithem is very important!