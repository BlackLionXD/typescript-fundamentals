class Plant {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

let apple = new Plant('apple');
console.log(apple.name); // Accessing the getter

apple.name = 'banana'; // Using the setter to change the value
console.log(apple.name); // Accessing the getter to see the new value
