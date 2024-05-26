

class Calculator2 {
    x :number;
    y: number;

    constructor(x?: number, y?:number){
        this.x = x;
        this.y = y;
    }
sum () {
    return this.x + this.y}

difference () {
    return this.x - this.y
}

multiply () {
    return this.x * this.y
}

divide () {
    return this.x / this.y
}

}

var t = new Calculator2(10,5);
console.log(t.divide())