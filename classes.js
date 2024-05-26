var Calculator = /** @class */ (function () {
    function Calculator(x, y) {
        this.x = x;
        this.y = y;
    }
    Calculator.prototype.sum = function () {
        return this.x + this.y;
    };
    Calculator.prototype.difference = function () {
        return this.x - this.y;
    };
    Calculator.prototype.multiply = function () {
        return this.x * this.y;
    };
    Calculator.prototype.divide = function () {
        return this.x / this.y;
    };
    return Calculator;
}());
var t = new Calculator(10, 5);
console.log(t.divide());
