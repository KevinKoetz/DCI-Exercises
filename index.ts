const l = (...args: any) => console.log(...args);
const line = (() => {
  let num = 1;
  return () => l(`_______________${num++}_______________`);
})();

/*1. isPlainObject - Write a method that verifies an argument is a plain object, not an array or null
Task description: Write a method that verifies an argument is a plain object, not an array or null
Expected Result: True if object is plain, false otherwise.
({ a: 1 }) => true,
([1, 2, 3]) => false
   const data = { a: 1 };
   console.log(isPlainObject(data)); // true */
line();
function isPlainObject(data) {
  if (data === null) return false;
  if (Array.isArray(data)) return false;
  if (typeof data !== "object") return false;
  return true;
}
console.log(isPlainObject({ a: 1 }));
console.log(isPlainObject([1, 2, 3]));
console.log(isPlainObject(null));

/* 2.   MakePairs - Write a method that returns a deep array like [[key, value]]
Task description: Write a method that returns a deep array like [[key, value]]

Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

    const data = { a: 1, b: 2 };
    console.log(makePairs(data)); // [['a', 1], ['b', 2]]  */

line();

function makePairs(obj: object) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const res = [];
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    res.push([key, values[index]]);
  }
  return res;
}

console.log(makePairs({ a: 1, b: 2 }));

/* 3.Without - Write a method that returns a new object without provided properties
Task description: Write a method that returns new object without provided properties

Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 }

    const data = { a: 1, b: 2 };
    console.log(without(data, 'b')); // { a: 1 } */
line();

function without<T>(obj: T, removedKey: keyof T) {
  const res = {} as Partial<T>;
  for (const key in obj) {
    if (key !== removedKey) res[key] = obj[key];
  }
  return res;
}

console.log(without({ a: 1, b: 2 }, "b"));

/*4. IsEmpty - Write a method that makes a shallow check is object empty
Task description: Write a method that makes a shallow check is object empty

Expected Result: ({}) => true, ({ a: undefined }) => true,
({ a: 1 }) => false

    const data = { a: 1, b: undefined };
    const data2 = { a:undefined };
    console.log(isEmpty(data)); // false
    console.log(isEmpty(data2)); // true  */
line();

function checkIfEmpty(obj: { [key: string]: any }) {
  for (const key in obj) {
    if (obj[key] !== undefined) return false;
  }
  return true;
}

console.log(checkIfEmpty({ a: 1, b: undefined })); // false
console.log(checkIfEmpty({ a: undefined })); // true

/* 5. IsEqual - Write a method that makes a shallow compare of two objects
Task description: Write a method that makes a shallow compare of two objects

Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true

    const data = { a: 1, b: 1 };  
    const data2 = { a: 1, b: 1 };  
    const data3 = { a: 1, b: 2 };
    console.log(isEqual(data, data2)); // true  
    console.log(isEqual(data, data3)); // false */
line();
function isEqual<T>(obj1: T, obj2: T) {
  if (
    !(
      //Both parameters are equal based on strict equality or
      (
        obj1 === obj2 ||
        //Both of them are NaN or
        (Number.isNaN(obj1) && Number.isNaN(obj2)) ||
        //Both are Objects (but not Arrays) and have no keys inside
        (typeof obj1 === "object" &&
          !Array.isArray(obj1) &&
          Object.keys(obj1).length === 0 &&
          typeof obj2 === "object" &&
          !Array.isArray(obj2) &&
          Object.keys(obj2).length === 0) ||
        //Both are Empty arrays
        (Array.isArray(obj1) &&
          obj1.length === 0 &&
          Array.isArray(obj2) &&
          obj2.length === 0)
      )
    )
  )
    return false;

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 1 })); // true
console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 2 }));

/* 6. Invoke - Write a method that invokes an array method on a specific path
Task description: Write a method that invokes an array method on a specific path

Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]

    const data = { a: { b: [1, 2, 3] } }
    console.log(invoke(data, 'a.b', 
    'splice', [1, 2]));
     // [2, 3] */

line();
function invoke(obj: any, path: string, method: keyof [], ...methodArgs: any) {
  const splitPath = path.split(".");
  let subObj = obj;
  for (const step of splitPath) {
    subObj = subObj[step];
  }
  return subObj[method](...methodArgs);
}

let data = { a: { b: [1, 2, 3] } };
console.log(invoke(data, "a.b", "splice", 1, 2));
console.log(data);
console.log(invoke(data, "a.b", "concat", [1, 5, 3]));

let arrrr = [1, 2, 3] as any;
let method = "splice";
console.log(arrrr[method](1, 2));

/*7. IsEmptyDeep - Write a method that makes a deep check is an object empty
Task description: Write a method that makes a deep check is an object empty

Empty values: '', null, NaN, undefined, [], {}

Expected Result: ({}) => true,
({ a: { b: undefined } }) => true,
({ a: { b: [] } }) => true

      
    const data = { a: { b: undefined } };
    console.log(isEmptyDeep(data));
    //true*/
line();
function isEmptyDeep(obj: any): boolean {
  let result = false;

  if (
    obj === "" ||
    obj === null ||
    obj === undefined ||
    Number.isNaN(obj) ||
    (typeof obj === "object" && Object.keys(obj).length === 0) ||
    (Array.isArray(obj) && obj.length === 0)
  ) {
    return true;
  }

  for (const key in obj) {
    result = isEmptyDeep(obj[key]);
    if (!result) break;
  }

  return result;
}

console.log(isEmptyDeep({ a: undefined, b: { c: [[undefined], null] } }));

/* 8. IsEqualDeep - Write a method that makes a deep compare of two objects
Task description: Write a method that makes a deep compare of two objects

Expected Result: True if objects are equal, false if objects are different ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true

const data = { a: 1, b: { c: 1 } };  
const data2 = { a: 1, b: { c: 1 } };  
const data3 = { a: 1, b: { c: 2 } };
console.log(isEqualDeep(data, data2));// true  
console.log(isEqualDeep(data, data3)); // false */
line();
function isEqualDeep(obj1: any, obj2: any): boolean {
  let result = false;

  //Function should return true if:
  if (
    //Both parameters are equal based on strict equality or
    obj1 === obj2 ||
    //Both of them are NaN or
    (Number.isNaN(obj1) && Number.isNaN(obj2)) ||
    //Both are Objects (but not Arrays) and have no keys inside
    (typeof obj1 === "object" &&
      !Array.isArray(obj1) &&
      Object.keys(obj1).length === 0 &&
      typeof obj2 === "object" &&
      !Array.isArray(obj2) &&
      Object.keys(obj2).length === 0) ||
    //Both are Empty arrays
    (Array.isArray(obj1) &&
      obj1.length === 0 &&
      Array.isArray(obj2) &&
      obj2.length === 0)
  )
    return true;

  //For everything else go through all the keys of the object and check if
  //they satisfy the definition of Equality above
  if (typeof obj1 === "object" && typeof obj2 === "object") {
    for (const key in obj1) {
      result = isEqualDeep(obj1[key], obj2[key]);
      if (!result) break;
    }
  }

  return result;
}

data = { a: 1, b: { c: 1 } } as any;
let data2 = { a: 1, b: { c: 1 } };
let data3 = { a: 1, b: { c: 2 } };

console.log(isEqualDeep(data, data2)); // true
console.log(isEqualDeep(data, data3)); // false */
console.log(isEqualDeep([2, 3, 5], [2, 3, 5]));

/*9. Intersection - Write a method that finds shallow intersections of objects
Task description: Write a method that finds shallow intersections of objects

Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }

    const data = { a: 1, b: 2 };  
    const data2 = { c: 1, b: 2 };
    console.log(intersection(data, data2)); // { b: 2 } */

line();

function intersection(obj1: any, obj2: any) {
  const res = {} as any;
  const commonKeys = Object.keys(obj1).reduce((commonKeys, key) => {
    if (Object.keys(obj2).includes(key)) commonKeys.push(key);
    return commonKeys;
  }, [] as any);
  for (const key of commonKeys) {
    if (isEqual(obj1[key], obj2[key])) res[key] = obj1[key];
  }
  return res;
}

data = { a: 1, b: 2 } as any;
data2 = { c: 1, b: 2 } as any;
console.log(intersection({ a: 1, b: [undefined] }, { c: 1, b: undefined })); // { b: 2 }

/* 10. IntersectionDeep - Write a method that finds all intersections of objects
Task description: Write a method that finds all intersections of objects

Expected Result: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }

    const data = { a: 1, b: { c: 3 } };  
    const data2 = { c: 1, b: { c: 3 } };
    console.log(intersectionDeep(data, data2)); // { b: { c: 3 } } */
line()
function intersectionDeep(obj1: any, obj2: any) {
  let res = {} as any;
  const commonKeys = Object.keys(obj1).reduce((commonKeys, key) => {
    if (Object.keys(obj2).includes(key)) commonKeys.push(key);
    return commonKeys;
  }, [] as any);
  for (const key of commonKeys) {
    if (isEqual(obj1[key], obj2[key])) {
      res[key] = obj1[key];
    } else if (isPlainObject(obj1[key]) && isPlainObject(obj2[key])) {
      let tmpObj= {} as any
      tmpObj[key] = intersectionDeep(obj1[key], obj2[key])
      res = Object.assign(res, tmpObj)
    }
  }
  return res;
}

data = { a: 1, b: { c: 3 } } as any;
data2 = { c: 1, b: { c: 3 } } as any;
console.log(intersectionDeep({ a: 1, b: { c: 3, d:{e:8, f:9}},x:{}, y:[], z:null }, { c: 1, b: { c: 3, d:{e:8, f:10}},x:{}, y:[], z:null })); // { b: { c: 3 } }
