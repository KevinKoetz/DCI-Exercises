"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
/* Write pseudo-code for the following exercises on pen and paper.

1. Lowest to Highest
Given an array of numbers from 1-9:

[4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
Sort the array from lowest value to highest. */
var randomNumbers = Array(100000).fill(null).map(function () { return Math.random() * 10000; });
function sortNumbersBubble(arr) {
    var sortedArray = __spreadArray([], arr, true);
    var swappedItems = false;
    do {
        swappedItems = false;
        for (var i = 0; i < sortedArray.length; i++) {
            if (sortedArray[i] > sortedArray[i + 1]) {
                var tmp = sortedArray[i + 1];
                sortedArray[i + 1] = sortedArray[i];
                sortedArray[i] = tmp;
                swappedItems = true;
            }
        }
    } while (swappedItems);
    return sortedArray;
}
function sortNumbers(arr) {
    var sortedArray = [];
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        insertNumberInSortedArray(sortedArray, element);
    }
    return sortedArray;
}
function sortNumbersBinary(arr) {
    var sortedArray = [];
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        insertNumberInSortedArrayBinary(sortedArray, element);
    }
    return sortedArray;
}
function insertNumberInSortedArrayBinary(sortedArr, number) {
    var lowerBound = 0;
    var upperBound = sortedArr.length;
    var indexToInsert = lowerBound;
    while (lowerBound !== upperBound) {
        if (sortedArr[lowerBound] <= number) {
            lowerBound += Math.ceil((upperBound - lowerBound) / 2);
        }
        else {
            upperBound = lowerBound;
            lowerBound -= Math.ceil(upperBound / 2);
        }
        indexToInsert = lowerBound;
    }
    /* for (let index = 0; index < sortedArr.length; index++) {
      const element = sortedArr[index];
      if(element <= number) indexToInsert = index+1;
      if(element > number) break;
    } */
    sortedArr.splice(indexToInsert, 0, number);
    return sortedArr;
}
function insertNumberInSortedArray(sortedArr, number) {
    var lowerBound = 0;
    var upperBound = sortedArr.length;
    var indexToInsert = lowerBound;
    for (var index = 0; index < sortedArr.length; index++) {
        var element = sortedArr[index];
        if (element <= number)
            indexToInsert = index + 1;
        if (element > number)
            break;
    }
    sortedArr.splice(indexToInsert, 0, number);
    return sortedArr;
}
console.time("sortNumbers");
var arr1 = sortNumbers(randomNumbers);
console.timeEnd("sortNumbers");
console.time("sortNumbersBinary");
var arr2 = sortNumbersBinary(randomNumbers);
console.timeEnd("sortNumbersBinary");
console.time("sortNumbersBubble");
var arr3 = sortNumbersBubble(randomNumbers);
console.timeEnd("sortNumbersBubble");
console.time("sort Method");
var newarr = __spreadArray([], randomNumbers, true);
var arr4 = newarr.sort(function (a, b) { return a - b; });
console.timeEnd("sort Method");
function checkAllEqual() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var allEqual = true;
    var first = arrays[0];
    for (var index = 0; index < first.length; index++) {
        var element = first[index];
        for (var j = 1; j < arrays.length; j++) {
            if (element !== arrays[j][index]) {
                allEqual = false;
                break;
            }
        }
        if (!allEqual)
            break;
    }
    return allEqual;
}
console.log(checkAllEqual(arr1, arr2, arr3, arr4));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTSxDQUFDLEdBQUc7SUFBQyxjQUFZO1NBQVosVUFBWSxFQUFaLHFCQUFZLEVBQVosSUFBWTtRQUFaLHlCQUFZOztJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsT0FBWCxPQUFPLEVBQVEsSUFBSTtBQUFuQixDQUFvQixDQUFDO0FBQ2pELElBQU0sSUFBSSxHQUFHLENBQUM7SUFDWixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixPQUFPLGNBQU0sT0FBQSxDQUFDLENBQUMsb0JBQWtCLEdBQUcsRUFBRSxvQkFBaUIsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDO0FBQzNELENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFTDs7Ozs7OytDQU0rQztBQUUvQyxJQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFJLE9BQUEsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssRUFBckIsQ0FBcUIsQ0FBQyxDQUFBO0FBRTdFLFNBQVMsaUJBQWlCLENBQUMsR0FBYTtJQUN0QyxJQUFNLFdBQVcscUJBQWlCLEdBQUcsT0FBQyxDQUFDO0lBQ3ZDLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQTtJQUN4QixHQUFFO1FBQ0EsWUFBWSxHQUFHLEtBQUssQ0FBQTtRQUNwQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUN6QyxJQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDO2dCQUNuQyxJQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFBO2dC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