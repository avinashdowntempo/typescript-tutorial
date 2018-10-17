
let x = 1;
var y = 1;
let c: string = 'hello';

interface IPerson {
    firstName: string;
    lastName: string;
}

function greeter(person: IPerson) {
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

interface ICarInfo{
    mileage: number;
    wheelBase: number;
    manufacturer: string;
}

class Car {
    //field 
    private engine: string;
    public carName = 'ford';
    public carData: ICarInfo = {
        mileage: 20,
        wheelBase: 170,
        manufacturer:'tata'
    }

    //constructor 
    constructor(engine: string) {
        this.engine = engine
    }

    //function 
    disp(): void {
        console.log("Engine is  :   " + this.engine)
    }
}
var carObj = new Car("Engine 1");
console.log('carname' + carObj.carName);
console.log('carname' + carObj.engine);
