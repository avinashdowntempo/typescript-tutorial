export class Animal {
    public name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
        console.log(this.name + ' moved ' + distanceInMeters + 'm.');
    }
}