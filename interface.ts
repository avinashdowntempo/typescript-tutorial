interface IPerson {
    firstName: string;
    lastName: string;
}

function greeter(person: IPerson) {
    return "Hello, " + person.firstName + " " + person.lastName + person.gender;
}

let user = { firstName: "Jane", lastName: "User", gender: "User" };

console.log(greeter(user));
