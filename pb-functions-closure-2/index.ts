const l = (...args: any) => console.log(...args);
const line = (() => {
  let num = 1;
  return () => l(`_______________${num++}_______________`);
})();

/*1. What’s the result of executing this code and why.
function test() {
   console.log(a);
   console.log(foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test(); 

Logging to Console:
undefined
2
*/

function test() {
  console.log(a);
  console.log(foo());
  
  var a = 1;
  function foo() {
     return 2;
  }
}

test(); 

/* 2 What is result?
var a = 1; 

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  
  a = 5;
  
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2); 

result = 5
*/

var a = 1; 

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  
  a = 5;
  
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2); 
console.log(result);

/* 
3 What is the result of the following code? Explain your answer.
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()) <- 'Aurelio De Rosa' ;

var test = obj.prop.getFullname;

console.log(test()); <- depends In Strict Mode it's a runtime error, otherwise undefined*/

var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()) ;

var test = obj.prop.getFullname;

//console.log(test())


/* 4. What will you see in the console for the following example?
var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b(); 
console.log(a); //1

*/

var a = 1; 
function b() { 
    a = 10;    
    return; 
    function a() {} 
} 
b(); 
console.log(a); //1