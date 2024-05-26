var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, salary, gender) {
        this.name = name;
        this.salary = salary;
        this.gender = gender;
    }
    Person.prototype.logInsideParent = function () {
        console.log(this.name, this.salary, this.gender);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, salary, gender) {
        return _super.call(this, name, salary, gender) || this;
    }
    Student.prototype.logInsideChild = function () {
        console.log(this.name, this.gender);
        // this.salary is not accessible here because it's private in the parent class
    };
    return Student;
}(Person));
var person3 = new Person('Alice', 25, 'Female');
var student = new Student('Bob', 20, 'Male');
person3.logInsideParent(); // Output: Alice 25 Female
student.logInsideChild(); // Output: Bob Male
