var Plant = /** @class */ (function () {
    function Plant(name) {
        this._name = name;
    }
    Object.defineProperty(Plant.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Plant;
}());
var apple = new Plant('apple');
console.log(apple.name); // Accessing the getter
apple.name = 'banana'; // Using the setter to change the value
console.log(apple.name); // Accessing the getter to see the new value
