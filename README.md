
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
