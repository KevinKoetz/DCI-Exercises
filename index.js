"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var groupById = function (users) {
    return users.reduce(function (userById, user) {
        userById[user.id] = user;
        return userById;
    }, {});
};
var users = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
];
var usersById = groupById(users);
console.log(usersById);
function minMaxDifference(array) {
    var min = Math.min.apply(Math, array);
    var max = Math.max.apply(Math, array);
    return max - min;
}
var ARR = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
];
var matrex = function (arr) {
    var output = "";
    // for (let i = 0; i < arr.length; i++) {
    //     output += 'row ' + i + '\n'
    //     for (let j = 0; j < arr[i].length; j++) {
    //         output += arr[i][j]
    //         if ((arr[arr.length - 1])) output += '\n'
    //     }
    // }
    var lastIdx = arr.length - 1;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var array = arr_1[_i];
        output += "row " + arr.indexOf(array) + "\n";
        for (var _a = 0, array_1 = array; _a < array_1.length; _a++) {
            var element = array_1[_a];
            output += element + "\n";
            // if(arr.indexOf(array) === lastIdx && array )
        }
    }
    return output;
};
/* Q2. Given the following array:

const ARR = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Create the following output:

row 0
 1
 2
 1
 24
row 1
 8
 11
 9
 4
row 2
 ...
(and so on) */
ARR = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
];
function printArray(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
        var row = array[i];
        result += "row " + i + " \n";
        for (var j = 0; j < row.length; j++) {
            var item = row[j];
            result += " " + item;
            if (!(j === row.length - 1 && i === array.length - 1))
                result += "\n";
        }
    }
    return result;
}
console.log(printArray(ARR));
line();
var obj1 = {
    name: "aghy",
    grades: {
        math: 7,
        history: 90
    },
    avgGrade: function () {
        var grades = Object.values(this.grades);
        var total = 0;
        for (var _i = 0, grades_1 = grades; _i < grades_1.length; _i++) {
            var grade = grades_1[_i];
            total += grade;
        }
        return total / grades.length;
    }
};
function recursiveCopy(any) {
    if (typeof any === "object" && any !== null) {
        var copy = __assign({}, any);
        for (var key in copy) {
            if (typeof copy[key] === "object")
                copy[key] = recursiveCopy(copy[key]);
        }
        return copy;
    }
    else {
        return any;
    }
}
var objWithRecCopy = recursiveCopy(obj1);
var objWithJson = JSON.parse(JSON.stringify(obj1));
var objWithSpread = __assign({}, obj1);
var objAssign = Object.assign({}, obj1);
obj1.grades.math = 90;
console.log(obj1);
console.log(objWithSpread);
console.log(objWithJson);
console.log(objAssign);
console.log(objWithRecCopy);
