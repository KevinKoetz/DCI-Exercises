import { type } from "os";

{
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

  function isPlainObject(obj) {
    return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
  }

  l(isPlainObject({}));
  l(isPlainObject(null));
  l(isPlainObject([]));
  l(isPlainObject(2));
  l(isPlainObject("string"));

  /* 2.   MakePairs - Write a method that returns a deep array like [[key, value]]
Task description: Write a method that returns a deep array like [[key, value]]

Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

    const data = { a: 1, b: 2 };
    console.log(makePairs(data)); // [['a', 1], ['b', 2]]  */

  line();

  function makePairs(obj) {
    return Object.entries(obj);
  }
  l(makePairs({ a: 1, b: 2 }));

  /* 3.Without - Write a method that returns a new object without provided properties
Task description: Write a method that returns new object without provided properties

Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 }

    const data = { a: 1, b: 2 };
    console.log(without(data, 'b')); // { a: 1 } */
  line();

  function without(obj, removedProp) {
    const result = {}; //Create new Object

    //Go through all keys inside obj: in example "a" "b"
    for (const key in obj) {
      if (key !== removedProp) {
        result[key] = obj[key];
      }
    }
    return result;
  }

  function withoutObjectAssign(obj, removedProp) {
    const result = { ...obj }; //Create new Object

    delete result[removedProp];

    return result;
  }

  l(without({ a: 1, b: 2 }, "b"));

  /*4. IsEmpty - Write a method that makes a shallow check is object empty
Task description: Write a method that makes a shallow check is object empty

Expected Result: ({}) => true, ({ a: undefined }) => true,
({ a: 1 }) => false

    const data = { a: 1, b: undefined };
    const data2 = { a:undefined };
    console.log(isEmpty(data)); // false
    console.log(isEmpty(data2)); // true  */
  line();

  function isEmpty(obj) {
    for (const key in obj) {
      if (obj[key] !== undefined) return false;
    }
    return true;
  }

  l(isEmpty({ a: 1, b: undefined }));
  l(isEmpty({ a: undefined, b: undefined }));
  l(isEmpty({}));

  /* 5. IsEqual - Write a method that makes a shallow compare of two objects
Task description: Write a method that makes a shallow compare of two objects

Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true

    const data = { a: 1, b: 1 };  
    const data2 = { a: 1, b: 1 };  
    const data3 = { a: 1, b: 2 };
    console.log(isEqual(data, data2)); // true  
    console.log(isEqual(data, data3)); // false */
  line();
  function isEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (const key in obj1) {
      if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) return false;
    }

    return true;
  }

  l(isEqual({ a: 1, b: 1 }, { a: 1, b: 1 }));
  l(isEqual({ a: 1, b: 1 }, { a: 1 }));
  l(isEqual({ a: 1, b: undefined }, { a: 1, c: 2 }));
  l(isEqual([2, 5], [2, 7]));

  /* 6. Invoke - Write a method that invokes an array method on a specific path
Task description: Write a method that invokes an array method on a specific path

Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]

    const data = { a: { b: [1, 2, 3] } }
    console.log(invoke(data, 'a.b', 
    'splice', [1, 2]));
     // [2, 3] */

  line();

  function invoke(obj, path /*'a.b'*/, method, args) {
    const splittedPath = path.split("."); // ["a","b"]
    let destination = obj; // this is what we start with: { a: { b: [1, 2, 3] } }
    for (const step of splittedPath) {
      // step will be "a" in first and "b" in second iteration
      destination = destination ? destination[step] : undefined; //for first iteration destination[step] will be { b: [1, 2, 3] }
      //for second iteration destination[step] is [1, 2, 3]
    }
    //here destination is [1, 2, 3]
    if (Array.isArray(destination) && destination[method] instanceof Function) {
      return destination[method](...args);
    } else {
      return undefined;
    }
  }

  l(invoke({ a: { b: [1, 2, 3] } }, "a.b", "splice", [1, 2]));
  l(invoke({ a: { b: [1, 2, 3] } }, "a", "splice", [1, 2]));
  l(invoke({ a: { b: [1, 2, 3] } }, "c.t.x", "splice", [1, 2]));
  l(invoke({ a: { b: [1, 2, 3] } }, "a.b", "unknown", [1, 2]));
  l(invoke({ a: { b: [1, 2, 3] } }, "a.b", "concat", [[4, 5, 6]]));

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

  function isEmptyDeep(obj) {
    if (
      obj === "" ||
      obj === null ||
      Number.isNaN(obj) ||
      obj === undefined ||
      (Array.isArray(obj) && obj.length === 0) ||
      (typeof obj === "object" && Object.entries(obj).length === 0)
    ) {
      return true;
    }
    //obj can be: A nonempty String "as", Number 4, a boolean true/false
    //nonempty Array [a,d], nonemptyobject {a:2}
    else if (typeof obj === "object") {
      //obj must be nonempty Array [a,d], nonemptyobject {a:2}
      //Here we want to check all values inside the
      //object if any of those is not an Empty Value
      for (const key in obj) {
        if (!isEmptyDeep(obj[key])) return false;
      }
      return true;
    } else {
      //obj must be A nonempty String "as", Number 4, a boolean true/false
      return false;
    }
  }

  l("epmtyString", isEmptyDeep("") === true);
  l("null", isEmptyDeep(null) === true);
  l("NaN", isEmptyDeep(NaN) === true);
  l("undefined", isEmptyDeep(undefined) === true);
  l(isEmptyDeep([]) === true);
  l(isEmptyDeep({}) === true);
  l(isEmptyDeep({ a: undefined }) === true);
  l(isEmptyDeep({ a: [{ c: 2 }, null] }) === false);
  l(isEmptyDeep({ a: [undefined, null], b: 1 }) === false);
  l(isEmptyDeep({ a: [undefined, null], b: { c: "hello" } }) === false);

  /* 8. IsEqualDeep - Write a method that makes a deep compare of two objects
Task description: Write a method that makes a deep compare of two objects

Expected Result: True if objects are equal, false if objects are different ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true

const data = { a: 1, b: { c: 1 } };  
const data2 = { a: 1, b: { c: 1 } };  
const data3 = { a: 1, b: { c: 2 } };
console.log(isEqualDeep(data, data2));// true  
console.log(isEqualDeep(data, data3)); // false */
  line();
  function isEqualDeep(thing1, thing2) {
    if (
      thing1 === thing2 ||
      (typeof thing1 === "object" &&
        Object.entries(thing1).length === 0 &&
        typeof thing2 === "object" &&
        Object.entries(thing2).length === 0) ||
      (Number.isNaN(thing1) && Number.isNaN(thing2))
    ) {
      return true;
    }
    //things can be: A different Strings "as", different Number 4, a different boolean true/false
    //nonempty Array [a,d], nonemptyobject {a:2}
    else if (typeof thing1 === "object" && typeof thing2 === "object") {
      //things must be nonempty Arrays [a,d], nonemptyobjects {a:2}
      //Here we want to check all values inside the both
      //objects if any of those are different
      for (const key in { ...thing1, ...thing2 }) {
        if (
          !(
            thing1.hasOwnProperty(key) &&
            thing2.hasOwnProperty(key) &&
            isEqualDeep(thing1[key], thing2[key])
          )
        )
          return false;
      }
      return true;
    } else {
      //things can be: A different Strings "as", different Number 4, a different boolean true/false
      return false;
    }
  }

  l(isEqualDeep("", "") === true);
  l(isEqualDeep(5, 5) === true);
  l(isEqualDeep(true, true) === true);
  l(isEqualDeep(null, null) === true);
  l(isEqualDeep(undefined, undefined) === true);
  l(isEqualDeep({}, {}) === true);
  l(isEqualDeep([], []) === true);
  l(isEqualDeep(NaN, NaN) === true);
  l(isEqualDeep({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) === true);
  l(isEqualDeep({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 2 } }) === false);
  l(isEqualDeep({ a: 1, b: { c: [] } }, { a: 1, b: { c: [] } }) === true);
  l(isEqualDeep({ c: undefined }, { d: undefined }) === false);
  l(isEqualDeep([2, 3, 5], [2, 3, 5]) === true);

  /*9. Intersection - Write a method that finds shallow intersections of objects
Task description: Write a method that finds shallow intersections of objects

Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }

    const data = { a: 1, b: 2 };  
    const data2 = { c: 1, b: 2 };
    console.log(intersection(data, data2)); // { b: 2 } */
  line();

  function intersection(obj1, obj2) {
    const allKeys = Object.keys(obj1).concat(Object.keys(obj2));
    let result = {};
    for (const key of allKeys) {
      if (obj1[key] === obj2[key]) result[key] = obj2[key];
    }
    return result;
  }

  l(intersection({ a: 1, b: 2 }, { c: 1, b: 2 }));
  l(intersection({ a: 1, b: { c: 3 } }, { a: 2, b: { c: 3 } }));
  l({ c: 3 } === { c: 3 });

  /* 10. IntersectionDeep - Write a method that finds all intersections of objects
Task description: Write a method that finds all intersections of objects

Expected Result: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }

    const data = { a: 1, b: { c: 3 } };  
    const data2 = { c: 1, b: { c: 3 } };
    console.log(intersectionDeep(data, data2)); // { b: { c: 3 } } */
  line();

  function intersectionDeep(obj1, obj2) {
    //If one is a Array and the other is an Object, return empty Object.
    //They can not have an intersection.
    if (
      (Array.isArray(obj1) && !Array.isArray(obj2)) ||
      (!Array.isArray(obj1) && Array.isArray(obj2))
    )
      return {};
    //Get all the keys from both objects
    const allKeys = { ...obj1, ...obj2 };
    let result = {};

    for (const key in allKeys) {
      //If the values are completely equal assign the value to the key on result
      if (isEqualDeep(obj1[key], obj2[key])) result[key] = obj2[key];
      else 
      //If they are both object they could have an intersection. So check them aswell.
      if (
        typeof obj1[key] === "object" &&
        typeof obj2[key] === "object"
      ) {
        //obj1[key] can only be non-equal array, or non-equal object, but the could have intersections
        result[key] = intersectionDeep(obj1[key], obj2[key]);
      }
    }
    //If both obj1 and obj2 are Arrays we want to return an Array
    if (Array.isArray(obj1) && Array.isArray(obj2))
      result = Object.values(result);

    return result;
  }

  l(
    isEqualDeep(
      intersectionDeep({ a: 2, b: { c: 3 } }, { a: 4, b: { c: 3 } }),
      { b: { c: 3 } }
    )
  );
  l(
    isEqualDeep(
      intersectionDeep(
        { a: 2, b: [2, 5, 8, 9], c: NaN },
        { a: 4, b: [1, 5, 8, 10], c: NaN }
      ),
      { b: [5, 8], c: NaN }
    )
  );
  l(
    isEqualDeep(
      intersectionDeep(
        { a: 2, b: [2, {}, 8, 9], c: NaN },
        { a: 4, b: [1, {}, 8, 10], c: NaN }
      ),
      { b: [{}, 8], c: NaN }
    )
  );
  l(
    isEqualDeep(
      intersectionDeep(
        { a: 2, b: [2, { a: 5 }, 8, 9], c: NaN },
        { a: 4, b: [1, { a: 5, c: 8 }, 8, 10], c: NaN }
      ),
      { b: [{ a: 5 }, 8], c: NaN }
    )
  );

  const intersectionDeepSolution = (firstObj, secondObj) => {
    const firstObjKeys = Object.keys(firstObj);

    return firstObjKeys.reduce((acc, key) => {
      if (firstObj[key] === secondObj[key]) {
        acc = {
          ...acc,
          [key]: firstObj[key],
        };
      }
      if (Array.isArray(firstObj[key]) && Array.isArray(secondObj[key])) {
        const isEqualArrays = isEqualDeep(firstObj[key], secondObj[key]);

        if (isEqualArrays) {
          acc = {
            ...acc,
            [key]: firstObj[key],
          };
        }
      } else if (
        typeof firstObj[key] === "object" &&
        typeof secondObj[key] === "object"
      ) {
        const hasIntersection = intersectionDeepSolution(
          firstObj[key],
          secondObj[key]
        );

        if (Object.keys(hasIntersection).length !== 0) {
          acc = {
            ...acc,
            [key]: hasIntersection,
          };
        }
      }
      return acc;
    }, {});
  };

  l(intersectionDeepSolution({ a: 2, c: 5, d: NaN }, { a: 4, c: {}, d: NaN }));
}
