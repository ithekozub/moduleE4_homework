function createEmptyObj(){
  
  return Object.create(null);
  
}


const someObj = createEmptyObj();

console.log(Object.getPrototypeOf(someObj));
