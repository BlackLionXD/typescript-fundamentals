class Person {
    public name: string;
    private salary: number;
    protected gender: string;

    constructor(name: string, salary: number, gender: string) {
        this.name = name;
        this.salary = salary;
        this.gender = gender;
    }

    logInsideParent() {
        console.log(this.name, this.salary, this.gender);
    }
}

class Student extends Person {
    constructor(name: string, salary: number, gender: string) {
        super(name, salary, gender);
    }

    logInsideChild() {
        console.log(this.name, this.gender);
        // this.salary is not accessible here because it's private in the parent class
    }
}

let person3 = new Person('Alice', 25, 'Female');
let student = new Student('Bob', 20, 'Male');

person3.logInsideParent(); // Output: Alice 25 Female
student.logInsideChild();  // Output: Bob Male
