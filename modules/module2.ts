import { Animal } from "./module1";

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering..." + this.name);
        super.move(distanceInMeters);
    }
}

class Monkey extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("jumping..." + this.name);
        super.move(distanceInMeters);
    }
}

export { Snake as Frog, Monkey };
