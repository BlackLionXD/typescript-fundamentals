var Calculator2 = /** @class */ (function () {
    function Calculator2(x, y) {
    }
    Calculator2.prototype.sum = function () {
        return this.x + this.y;
    };
    Calculator2.prototype.difference = function () {
        return this.x - this.y;
    };
    Calculator2.prototype.multiply = function () {
        return this.x * this.y;
    };
    Calculator2.prototype.divide = function () {
        return this.x / this.y;
    };
    return Calculator2;
}());
var t = new Calculator2(10, 5);
console.log(t.divide());
