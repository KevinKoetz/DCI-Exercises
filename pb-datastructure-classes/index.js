"use strict";
/* 1. Person Class
Create a class called Person which accepts the name of a person as a string,
and his/her age as a number. The Person class should have a method called
describe which returns a string with the following syntax: "name, age years old".
So, for example, if John is 19 years old, then the function
describe of his object will return "John, 19 years old". */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return `${this.name}, ${this.age} years old`;
    }
}
const john = new Person("John", 20);
console.log(john.describe());
/* 2. Volume
Write a JavaScript program to get the volume of a cylinder with four decimal places using a class.

Note: Volume of a cylinder : V = πr^2h - r is the radius and h is the height of the cylinder. */
class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    get volume() {
        return Math.PI * Math.pow(this.radius, 2) * this.height;
    }
}
const cyl = new Cylinder(1, 2);
console.log(cyl.volume);
/* 3. Tick Tock
Rewrite the following code to use the "class" syntax.

  function Clock({ template }) {
  
    let timer;
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };

  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start(); */
class Clock {
    constructor(template) {
        this.template = template;
    }
    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    }
    stop() {
        if (this.timer)
            clearInterval(this.timer);
    }
    render() {
        let date = new Date();
        let hours = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();
        let output = this.template
            .replace("h", String(hours < 10 ? "0" + hours : hours))
            .replace("m", String(mins < 10 ? "0" + mins : mins))
            .replace("s", String(secs < 10 ? "0" + secs : secs));
        console.log(output);
    }
}
const clock = new Clock("h:m:s");
clock.start();
setTimeout(clock.stop.bind(clock), 5000);
/*   4. TV Class
Create a TV class with properties like brand, channel and volume.
Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
Add a method to set the channel randomly. Let's say the TV has only 50 channels.
Add a method to reset TV so it goes back to channel 1 and volume 50.
It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75". */
class TV {
    constructor(brand, instance) {
        this.channel = TV.defaults.channel;
        this.volume = TV.defaults.volume;
        this.brand = brand;
    }
    static getInstance(brand) {
        if (TV.instance)
            return TV.instance;
        else {
            const instance = new TV(brand);
            TV.instance = instance;
            return instance;
        }
    }
    static deleteInstance() {
        if (TV.instance)
            TV.instance = undefined;
    }
    reset() {
        Object.assign(this, TV.defaults);
    }
    setRandomChannel() {
        this.channel = Math.floor(Math.random() * 51);
    }
    increaseVolume(stepSize = 1) {
        let newVolume = this.volume + stepSize;
        this.volume = newVolume > 100 ? 100 : newVolume;
    }
    decreaseVolume(stepSize = 1) {
        let newVolume = this.volume - stepSize;
        this.volume = newVolume < 0 ? 0 : newVolume;
    }
    get status() {
        return `Panasonic at channel ${this.channel}, volume ${this.volume}`;
    }
}
TV.defaults = { channel: 1, volume: 50 };
const Test = function (name) {
    this.name = name;
};
Test.prototype.getName = function () { return this.name; };
let obj = new Test("Kevin");
let obj2 = new Test("George");
console.log(obj.getName());
console.log(obj2.getName());
console.log(obj.getName === obj2.getName);
