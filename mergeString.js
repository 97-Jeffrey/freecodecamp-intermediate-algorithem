function mergeString(str1, str2){
   let output = "";
   str1Arr = str1.split("");
   str2Arr = str2.split("");
   while(str1Arr.length && str2Arr.length){
     output += str1Arr.shift();
     output += str2Arr.shift();
   }

   if(str1Arr.length){
    output += str1Arr.join("")
   }else if(str2Arr.length){
    output += str2Arr.join("")
   }

  return output;

}

console.log(mergeString("America","bbb"))