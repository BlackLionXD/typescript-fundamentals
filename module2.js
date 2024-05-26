"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = require("./module");
var snake = new module_1.Animal("snake", 0);
var lion = new module_1.Animal("lion", 4);
console.log("".concat(snake.name, " has ").concat(snake.leg, " leg"));
console.log("".concat(lion.name, " has ").concat(lion.leg, " legs"));
