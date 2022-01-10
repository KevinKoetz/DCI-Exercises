"use strict";
const l = (...args) => console.log(...args);
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
        getFullname: function () {
            return this.fullname;
        }
    }
};
console.log(obj.prop.getFullname());
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
    function a() { }
}
b();
console.log(a); //1
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQVMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pELE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFO0lBQ2pCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUMzRCxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7QUFFRixTQUFTLElBQUk7SUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBRW5CLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLFNBQVMsR0FBRztRQUNULE9BQU8sQ0FBQyxDQUFDO0lBQ1osQ0FBQztBQUNILENBQUM7QUFFRCxJQUFJLEVBQUUsQ0FBQztBQUVQOzs7Ozs7Ozs7Ozs7Ozs7OztFQWlCRTtBQUVGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVWLFNBQVMsWUFBWSxDQUFDLE1BQU07SUFDMUIsU0FBUyxhQUFhLENBQUMsS0FBSztRQUMxQixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRU4sT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQztBQUVELElBQUksV0FBVyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEZBaUIwRjtBQUUxRixJQUFJLFFBQVEsR0FBRyxVQUFVLENBQUM7QUFDMUIsSUFBSSxHQUFHLEdBQUc7SUFDUCxRQUFRLEVBQUUsYUFBYTtJQUN2QixJQUFJLEVBQUU7UUFDSCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFdBQVcsRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN4QixDQUFDO0tBQ0g7Q0FDSCxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUU7QUFFckMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7QUFFaEMscUJBQXFCO0FBR3JCOzs7Ozs7Ozs7O0VBVUU7QUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDVixTQUFTLENBQUM7SUFDTixDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1AsT0FBTztJQUNQLFNBQVMsQ0FBQyxLQUFJLENBQUM7QUFDbkIsQ0FBQztBQUNELENBQUMsRUFBRSxDQUFDO0FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcifQ==