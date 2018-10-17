let x = 1;
var y = 1;
let c: string = 'hello';


if (x === 1) {
    let x = 2;
    var y = 2;
    console.log('x value within if' + x);
    console.log('y value within if' + y);
    // expected output: 2
}

console.log('x value outside if' + x);
console.log('y value outside if' + y);
