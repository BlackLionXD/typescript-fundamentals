

interface Person{
    name: string,
    age: number,
    salary?: number,
    isAdult?: boolean
}

let person1: Person = {
    name: 'Ibro',
    age: 25,
    salary: 10000,
    isAdult: true
}

let person2: Person = {
    name: 'Charlie',
    age: 38
}

interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

let dog: Dog = {
    name: 'Buddy',
    breed: 'Labrador'
};

interface Sum {
    x: number;
    y: number;
    add: () => void;
}

let Calculate: Sum = {
    x: 10,
    y: 5,
    add: function() {
        console.log(this.x + this.y);
    }
};

Calculate.add(); // Output: 15
