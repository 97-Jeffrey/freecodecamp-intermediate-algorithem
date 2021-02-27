function destroyer(arr) {
  let result = [...arguments[0]]

  for(let i =1; i<arguments.length; i++){
    if(result.includes(arguments[i])){
      result = result.filter(n=>n!==arguments[i])
    }
  }
  return result
}

console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));