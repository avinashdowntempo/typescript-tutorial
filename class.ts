class Car {
    //field 
    private engine: string;
    public carName = 'ford';
    public carData: ICarInfo = {
        mileage: 20,
        wheelBase: 170,
        manufacturer: 'tata'
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

carObj.disp();
