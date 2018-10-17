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
