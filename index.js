"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var l = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return console.log.apply(console, args);
};
var line = (function () {
    var num = 1;
    return function () { return l("_______________" + num++ + "_______________"); };
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
    var keys = Object.keys(obj);
    var values = Object.values(obj);
    var res = [];
    for (var index = 0; index < keys.length; index++) {
        var key = keys[index];
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
    var res = {};
    for (var key in obj) {
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
    for (var key in obj) {
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
    for (var key in obj1) {
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
function invoke(obj, path, method) {
    var methodArgs = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        methodArgs[_i - 3] = arguments[_i];
    }
    var splitPath = path.split(".");
    var subObj = obj;
    for (var _a = 0, splitPath_1 = splitPath; _a < splitPath_1.length; _a++) {
        var step = splitPath_1[_a];
        subObj = subObj[step];
    }
    return subObj[method].apply(subObj, methodArgs);
}
var data = { a: { b: [1, 2, 3] } };
console.log(invoke(data, "a.b", "splice", 1, 2));
console.log(data);
console.log(invoke(data, "a.b", "concat", [1, 5, 3]));
var arrrr = [1, 2, 3];
var method = "splice";
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
    var result = false;
    if (obj === "" ||
        obj === null ||
        obj === undefined ||
        Number.isNaN(obj) ||
        (typeof obj === "object" && Object.keys(obj).length === 0) ||
        (Array.isArray(obj) && obj.length === 0)) {
        return true;
    }
    for (var key in obj) {
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
    var result = false;
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
        for (var key in obj1) {
            result = isEqualDeep(obj1[key], obj2[key]);
            if (!result)
                break;
        }
    }
    return result;
}
data = { a: 1, b: { c: 1 } };
var data2 = { a: 1, b: { c: 1 } };
var data3 = { a: 1, b: { c: 2 } };
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
    var res = {};
    var commonKeys = Object.keys(obj1).reduce(function (commonKeys, key) {
        if (Object.keys(obj2).includes(key))
            commonKeys.push(key);
        return commonKeys;
    }, []);
    for (var _i = 0, commonKeys_1 = commonKeys; _i < commonKeys_1.length; _i++) {
        var key = commonKeys_1[_i];
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
function intersectionDeep(obj1, obj2) {
    var res = {};
    var commonKeys = Object.keys(obj1).reduce(function (commonKeys, key) {
        if (Object.keys(obj2).includes(key))
            commonKeys.push(key);
        return commonKeys;
    }, []);
    for (var _i = 0, commonKeys_2 = commonKeys; _i < commonKeys_2.length; _i++) {
        var key = commonKeys_2[_i];
        if (isEqual(obj1[key], obj2[key])) {
            res[key] = obj1[key];
        }
        else if (isPlainObject(obj1[key]) && isPlainObject(obj2[key])) {
            var tmpObj = {};
            tmpObj[key] = intersectionDeep(obj1[key], obj2[key]);
            res = Object.assign(res, tmpObj);
        }
    }
    return res;
}
data = { a: 1, b: { c: 3 } };
data2 = { c: 1, b: { c: 3 } };
console.log(intersectionDeep({ a: 1, b: { c: 3, d: { e: 8, f: 9 } } }, { c: 1, b: { c: 3, d: { e: 8, f: 10 } } })); // { b: { c: 3 } }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQU0sQ0FBQyxHQUFHO0lBQUMsY0FBWTtTQUFaLFVBQVksRUFBWixxQkFBWSxFQUFaLElBQVk7UUFBWix5QkFBWTs7SUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLE9BQVgsT0FBTyxFQUFRLElBQUk7QUFBbkIsQ0FBb0IsQ0FBQztBQUNqRCxJQUFNLElBQUksR0FBRyxDQUFDO0lBQ1osSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osT0FBTyxjQUFNLE9BQUEsQ0FBQyxDQUFDLG9CQUFrQixHQUFHLEVBQUUsb0JBQWlCLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQztBQUMzRCxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUw7Ozs7OzsrQ0FNK0M7QUFDL0MsSUFBSSxFQUFFLENBQUM7QUFDUCxTQUFTLGFBQWEsQ0FBQyxJQUFJO0lBQ3pCLElBQUksSUFBSSxLQUFLLElBQUk7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNoQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDdEMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDM0MsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUVqQzs7Ozs7OzZEQU02RDtBQUU3RCxJQUFJLEVBQUUsQ0FBQztBQUVQ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