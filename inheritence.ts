class Animal {
    public name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
        console.log(this.name + ' moved ' + distanceInMeters + 'm.');
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering..." + this.name);
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");

sam.move(10);
console.log(sam.name);
