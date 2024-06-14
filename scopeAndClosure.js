function outer(){
  let a = "string"
  let b = {objectWord : "objection!"}
  console.log(a,b)
  
    function inner(a,b) {
        a = "newString"
        b = {newObject : "GREAT SCOTTS!"}
        console.log(a,b)
        b.newObject = "I'm updated!"
    }
  
    inner(a,b);
    console.log(a,b)
  }
  
  outer();