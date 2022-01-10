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
function isPlainObject(data) {
    if (data === null)
        return false;
    if (Array.isArray(data))
        return false;
    if (typeof data !== "object")
        return false;
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
function makePairs(obj) {
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
function without(obj, removedKey) {
    const res = {};
    for (const key in obj) {
        if (key !== removedKey)
            res[key] = obj[key];
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
function checkIfEmpty(obj) {
    for (const key in obj) {
        if (obj[key] !== undefined)
            return false;
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
function isEqual(obj1, obj2) {
    if (!(
    //Both parameters are equal based on strict equality or
    (obj1 === obj2 ||
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
            obj2.length === 0))))
        return false;
    //Check if all the values within the object or array are the same using strict equality
    for (const key in Object.assign(Object.assign({}, obj1), obj2)) {
        if (obj1[key] !== obj2[key])
            return false;
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
function invoke(obj, path, method, ...methodArgs) {
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
let arrrr = [1, 2, 3];
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
function isEmptyDeep(obj) {
    let result = false;
    if (obj === "" ||
        obj === null ||
        obj === undefined ||
        Number.isNaN(obj) ||
        (typeof obj === "object" && Object.keys(obj).length === 0) ||
        (Array.isArray(obj) && obj.length === 0)) {
        return true;
    }
    for (const key in obj) {
        result = isEmptyDeep(obj[key]);
        if (!result)
            break;
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
function isEqualDeep(obj1, obj2) {
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
            obj2.length === 0))
        return true;
    //For everything else go through all the keys of the object and check if
    //they satisfy the definition of Equality above
    if (typeof obj1 === "object" && typeof obj2 === "object") {
        for (const key in Object.assign(Object.assign({}, obj1), obj2)) {
            result = isEqualDeep(obj1[key], obj2[key]);
            if (!result)
                break;
        }
    }
    return result;
}
data = { a: 1, b: { c: 1 } };
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
function intersection(obj1, obj2) {
    const res = {};
    const commonKeys = Object.keys(obj1).reduce((commonKeys, key) => {
        if (Object.keys(obj2).includes(key))
            commonKeys.push(key);
        return commonKeys;
    }, []);
    for (const key of commonKeys) {
        if (isEqual(obj1[key], obj2[key]))
            res[key] = obj1[key];
    }
    return res;
}
data = { a: 1, b: 2 };
data2 = { c: 1, b: 2 };
console.log(intersection({ a: 1, b: [undefined] }, { c: 1, b: undefined })); // { b: 2 }
/* 10. IntersectionDeep - Write a method that finds all intersections of objects
Task description: Write a method that finds all intersections of objects

Expected Result: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }

    const data = { a: 1, b: { c: 3 } };
    const data2 = { c: 1, b: { c: 3 } };
    console.log(intersectionDeep(data, data2)); // { b: { c: 3 } } */
line();
function intersectionDeep(obj1, obj2) {
    let res = {};
    const commonKeys = Object.keys(obj1).reduce((commonKeys, key) => {
        if (Object.keys(obj2).includes(key))
            commonKeys.push(key);
        return commonKeys;
    }, []);
    for (const key of commonKeys) {
        if (isEqual(obj1[key], obj2[key])) {
            res[key] = obj1[key];
        }
        else if (isPlainObject(obj1[key]) && isPlainObject(obj2[key])) {
            let tmpObj = {};
            tmpObj[key] = intersectionDeep(obj1[key], obj2[key]);
            res = Object.assign(res, tmpObj);
        }
        else if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
            let tmpObj = {};
            const intersectionValues = Object.values(intersectionDeep(obj1[key], obj2[key]));
            if (intersectionValues.length) {
                tmpObj[key] = [...intersectionValues];
                res = Object.assign(res, tmpObj);
            }
        }
    }
    return res;
}
data = { a: 1, b: { c: 3 } };
data2 = { c: 1, b: { c: 3 } };
console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }
line();
let x = { a: 1, b: [] };
let y = { c: 1, b: [] };
let intersect = Object.keys(x)
    .filter((c) => Object.keys(y).indexOf(c) !== -1)
    .reduce((a, b) => {
    let b1 = {};
    if (isEqual(x[b], y[b]))
        b1[b] = x[b];
    return Object.assign(Object.assign({}, a), b1);
}, {});
console.log(intersect);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBUyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDakQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUU7SUFDakIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQzNELENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFTDs7Ozs7OytDQU0rQztBQUMvQyxJQUFJLEVBQUUsQ0FBQztBQUNQLFNBQVMsYUFBYSxDQUFDLElBQUk7SUFDekIsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2hDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUN0QyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVE7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUMzQyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBRWpDOzs7Ozs7NkRBTTZEO0FBRTdELElBQUksRUFBRSxDQUFDO0FBRVAsU0FBUyxTQUFTLENBQUMsR0FBVztJQUM1QixNQUFNLElBQUksR0FBRyxN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