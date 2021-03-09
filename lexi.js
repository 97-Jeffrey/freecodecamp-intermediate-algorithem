function lexiMutate(s, t){

  let ways = 0
  for(let i =0; i<s.length; i++){
    if(typeof Number(s[i])== "number"){
      let sArray = [...s.split("")]
      sArray.splice(i,1)
      if(sArray.join("")<t){
        ways ++
      }
    }
  }
  for(let i =0; i<t.length; i++){
    if(typeof Number(t[i])== "number"){
      let tArray = [...t.split("")]
      tArray.splice(i,1)
      if(tArray.join("")>s){
        ways ++
      }
    }
  }
  return ways;
}

console.log(lexiMutate("ab12c", "1zz456"))