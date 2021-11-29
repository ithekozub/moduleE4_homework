function showOwnProperty(obj){
  
  for(let key in obj){
    
    if(obj.hasOwnProperty(key)){
      
      console.log(`Свойство ${key} : значение ${obj[key]}`);
    }
  }
  
}

let someObj = {prop1: 1, prop2:2, prop3: "3"};

showOwnProperty(someObj);
