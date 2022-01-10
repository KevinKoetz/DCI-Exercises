"use strict";
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
/* 1. Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
That is: removes all dashes, each word after dash becomes uppercased.
Examples:

console.log(camelize("background-color")) == 'backgroundColor';
console.log(camelize("list-style-image")) == 'listStyleImage';
console.log(camelize("-webkit-transition")) == 'WebkitTransition'; */
line();
var camelize = function (str) { return str.split("-").map(function (word, index) { return index >= 1 ? word[0].toUpperCase() + word.slice(1) : word; }).join(""); };
console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');
var john = { name: "John", surname: "Smith", id: 1 };
var pete = { name: "Pete", surname: "Hunt", id: 2 };
var mary = { name: "Mary", surname: "Key", id: 3 };
var users = [john, pete, mary];
var usersMapped = (function (users) { return users.map(function (user) { return { fullName: user.name + " " + user.surname, id: user.id }; }); })(users);
l(usersMapped);
