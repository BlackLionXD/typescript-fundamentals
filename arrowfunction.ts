
// arrow funciton 

// arrow function with empty parameter 

var emptyArrow = () =>{
    let msg = 'hello world';
    console.log(msg);
}

// arrow function with multiple parameters
var multArrow = (name:string, age:number) =>{
    console.log('name:', name,'age:' , age);
}
// arrow function with one line block
var oneLineAarrow = (name, age) => console.log(name, age)

// arrow function with one parameter 
var oneParameter = value => console.log(value);


emptyArrow();
multArrow('Ibro',25);
oneLineAarrow('Ibrahim',25);
oneParameter('hello world');