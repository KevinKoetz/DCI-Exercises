"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    const l = (...args) => console.log(...args);
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
        const result = Object.assign({}, obj); //Create new Object
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
            if (obj[key] !== undefined)
                return false;
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
        if (Object.keys(obj1).length !== Object.keys(obj2).length)
            return false;
        for (const key in obj1) {
            if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key])
                return false;
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
        }
        else {
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
        if (obj === "" ||
            obj === null ||
            Number.isNaN(obj) ||
            obj === undefined ||
            (Array.isArray(obj) && obj.length === 0) ||
            (typeof obj === "object" && Object.entries(obj).length === 0)) {
            return true;
        }
        //obj can be: A nonempty String "as", Number 4, a boolean true/false
        //nonempty Array [a,d], nonemptyobject {a:2}
        else if (typeof obj === "object") {
            //obj must be nonempty Array [a,d], nonemptyobject {a:2}
            //Here we want to check all values inside the
            //object if any of those is not an Empty Value
            for (const key in obj) {
                if (!isEmptyDeep(obj[key]))
                    return false;
            }
            return true;
        }
        else {
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
        if (thing1 === thing2 ||
            (typeof thing1 === "object" &&
                Object.entries(thing1).length === 0 &&
                typeof thing2 === "object" &&
                Object.entries(thing2).length === 0) ||
            (Number.isNaN(thing1) && Number.isNaN(thing2))) {
            return true;
        }
        //things can be: A different Strings "as", different Number 4, a different boolean true/false
        //nonempty Array [a,d], nonemptyobject {a:2}
        else if (typeof thing1 === "object" && typeof thing2 === "object") {
            //things must be nonempty Arrays [a,d], nonemptyobjects {a:2}
            //Here we want to check all values inside the both
            //objects if any of those are different
            for (const key in Object.assign(Object.assign({}, thing1), thing2)) {
                if (!(thing1.hasOwnProperty(key) &&
                    thing2.hasOwnProperty(key) &&
                    isEqualDeep(thing1[key], thing2[key])))
                    return false;
            }
            return true;
        }
        else {
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
            if (obj1[key] === obj2[key])
                result[key] = obj2[key];
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
        if ((Array.isArray(obj1) && !Array.isArray(obj2)) ||
            (!Array.isArray(obj1) && Array.isArray(obj2)))
            return {};
        //Get all the keys from both objects
        const allKeys = Object.assign(Object.assign({}, obj1), obj2);
        let result = {};
        for (const key in allKeys) {
            //If the values are completely equal assign the value to the key on result
            if (isEqualDeep(obj1[key], obj2[key]))
                result[key] = obj2[key];
            else 
            //If they are both object they could have an intersection. So check them aswell.
            if (typeof obj1[key] === "object" &&
                typeof obj2[key] === "object") {
                //obj1[key] can only be non-equal array, or non-equal object, but the could have intersections
                result[key] = intersectionDeep(obj1[key], obj2[key]);
            }
        }
        //If both obj1 and obj2 are Arrays we want to return an Array
        if (Array.isArray(obj1) && Array.isArray(obj2))
            result = Object.values(result);
        return result;
    }
    l(isEqualDeep(intersectionDeep({ a: 2, b: { c: 3 } }, { a: 4, b: { c: 3 } }), { b: { c: 3 } }));
    l(isEqualDeep(intersectionDeep({ a: 2, b: [2, 5, 8, 9], c: NaN }, { a: 4, b: [1, 5, 8, 10], c: NaN }), { b: [5, 8], c: NaN }));
    l(isEqualDeep(intersectionDeep({ a: 2, b: [2, {}, 8, 9], c: NaN }, { a: 4, b: [1, {}, 8, 10], c: NaN }), { b: [{}, 8], c: NaN }));
    l(isEqualDeep(intersectionDeep({ a: 2, b: [2, { a: 5 }, 8, 9], c: NaN }, { a: 4, b: [1, { a: 5, c: 8 }, 8, 10], c: NaN }), { b: [{ a: 5 }, 8], c: NaN }));
    const intersectionDeepSolution = (firstObj, secondObj) => {
        const firstObjKeys = Object.keys(firstObj);
        return firstObjKeys.reduce((acc, key) => {
            if (firstObj[key] === secondObj[key]) {
                acc = Object.assign(Object.assign({}, acc), { [key]: firstObj[key] });
            }
            if (Array.isArray(firstObj[key]) && Array.isArray(secondObj[key])) {
                const isEqualArrays = isEqualDeep(firstObj[key], secondObj[key]);
                if (isEqualArrays) {
                    acc = Object.assign(Object.assign({}, acc), { [key]: firstObj[key] });
                }
            }
            else if (typeof firstObj[key] === "object" &&
                typeof secondObj[key] === "object") {
                const hasIntersection = intersectionDeepSolution(firstObj[key], secondObj[key]);
                if (Object.keys(hasIntersection).length !== 0) {
                    acc = Object.assign(Object.assign({}, acc), { [key]: hasIntersection });
                }
            }
            return acc;
        }, {});
    };
    l(intersectionDeepSolution({ a: 2, c: 5, d: NaN }, { a: 4, c: {}, d: NaN }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudG9yaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVudG9yaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBUyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDakQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUU7UUFDakIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFTDs7Ozs7O2lEQU02QztJQUM3QyxJQUFJLEVBQUUsQ0FBQztJQUVQLFNBQVMsYUFBYSxDQUFDLEdBQUc7UUFDeEIsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUM7SUFDeEUsQ0FBQztJQUVELENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFM0I7Ozs7OzsrREFNMkQ7SUFFM0QsSUFBSSxFQUFFLENBQUM7SUFFUCxTQUFTLFNBQVMsQ0FBQyxHQUFHO1FBQ3BCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsQ0FBQyxDQUFDLFNBQVMs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RSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQ2pDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQ25DLEVBQ0QsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUN0QixDQUNGLENBQUM7SUFDRixDQUFDLENBQ0MsV0FBVyxDQUNULGdCQUFnQixDQUNkLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQ2xDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQ3BDLEVBQ0QsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUN2QixDQUNGLENBQUM7SUFDRixDQUFDLENBQ0MsV0FBVyxDQUNULGdCQUFnQixDQUNkLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQ2hELEVBQ0QsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQzdCLENBQ0YsQ0FBQztJQUVGLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLEVBQUU7UUFDdkQsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUzQyxPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQyxHQUFHLG1DQUNFLEdBQUcsS0FDTixDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FDckIsQ0FBQzthQUNIO1lBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pFLE1BQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBRWpFLElBQUksYUFBYSxFQUFFO29CQUNqQixHQUFHLG1DQUNFLEdBQUcsS0FDTixDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FDckIsQ0FBQztpQkFDSDthQUNGO2lCQUFNLElBQ0wsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUTtnQkFDakMsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxFQUNsQztnQkFDQSxNQUFNLGVBQWUsR0FBRyx3QkFBd0IsQ0FDOUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUNiLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FDZixDQUFDO2dCQUVGLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUM3QyxHQUFHLG1DQUNFLEdBQUcsS0FDTixDQUFDLEdBQUcsQ0FBQyxFQUFFLGVBQWUsR0FDdkIsQ0FBQztpQkFDSDthQUNGO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUM7SUFFRixDQUFDLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDOUUifQ==