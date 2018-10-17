
let x = 1;
var y = 1;
let c: string = 'hello';

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName + person.gender;
}

let user = { firstName: "Jane", lastName: "User", gender: "User" };

console.log(greeter(user));

if (x === 1) {
    let x = 2;
    var y = 2;
    console.log(x);
    console.log(y);
    // expected output: 2
}

console.log(x);
console.log(y);
function Person() {
    // The Person() constructor defines `this` as an instance of itself.
    this.age = 0;

    setInterval(function growUp() {
        this.age++;
        console.log('normal function age' + this.age);
    }, 1000);
}
function Person2() {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log('arrow function age' + this.age);
    }, 1000);
}

var p = new Person();

var p2 = new Person2();
