function checkProperty(str, obj){
  
  return str in obj;
  
}


let someStr = "prop7";
let someObj = {prop1: 1, prop2:2, prop3: "3"};

console.log(checkProperty(someStr, someObj));
