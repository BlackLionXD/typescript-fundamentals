var person1 = {
    name: 'Ibro',
    age: 25,
    salary: 10000,
    isAdult: true
};
var person2 = {
    name: 'Charlie',
    age: 38
};
var dog = {
    name: 'Buddy',
    breed: 'Labrador'
};
var Calculate = {
    x: 10,
    y: 5,
    add: function () {
        console.log(this.x + this.y);
    }
};
Calculate.add(); // Output: 15
