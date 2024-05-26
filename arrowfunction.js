// arrow funciton 
// arrow function with empty parameter 
var emptyArrow = function () {
    var msg = 'hello world';
    console.log(msg);
};
// arrow function with multiple parameters
var multArrow = function (name, age) {
    console.log('name:', name, 'age:', age);
};
// arrow function with one line block
var oneLineAarrow = function (name, age) { return console.log(name, age); };
// arrow function with one parameter 
var oneParameter = function (value) { return console.log(value); };
emptyArrow();
multArrow('Ibro', 25);
oneLineAarrow('Ibrahim', 25);
oneParameter('hello world');
