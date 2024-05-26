

interface Person{
    name: string,
    age: number,
    salary?: number,
    isAdult?: boolean
}

var person1: Person = {
    name: 'Ibro',
    age: 25,
    salary: 10000,
    isAdult: true
}

var person2: Person = {
    name: 'Charlie',
    age: 38
}

interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

var dog: Dog = {
    name: 'Buddy',
    breed: 'Labrador'
};

interface Sum {
    x: number;
    y: number;
    add: () => void;
}

var Calculate: Sum = {
    x: 10,
    y: 5,
    add: function() {
        console.log(this.x + this.y);
    }
};

Calculate.add(); // Output: 15
