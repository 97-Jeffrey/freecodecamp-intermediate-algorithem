function isAnagram(num1, num2){

  if(num1.toString().length !== num2.toString().length) return false;

  if(num1.toString().split("").sort().join("") !== num2.toString().split("").sort().join("")) return false;

  return true
  
}

 console.log(isAnagram(304, 403))