/// <reference path="pricedetector.ts" />
/// <reference path="namespace1.ts" />
/// <reference path="namespace2.ts" />

let pinkpot = new crackers.Flowerpot("pink");
console.log("color           ------------>" + pinkpot.color);
console.log("safety level    ------------>" + pinkpot.safetyLevel);
console.log("type            ------------>" + pinkpot.type);
console.log("baseprice       ------------>" + pinkpot.baseprice);
console.log("final price     ------------>" + pinkpot.getPrice()+'\n');

let pinkspark = new crackers.Sparklers("pink");
console.log("color           ------------>" + pinkspark.color);
console.log("safety level    ------------>" + pinkspark.safetyLevel);
console.log("type            ------------>" + pinkspark.type);
console.log("baseprice       ------------>" + pinkspark.baseprice);
console.log("final price     ------------>" + pinkspark.getPrice()+'\n');

let greenRocket = new crackers.Sparklers("green");
console.log("color           ------------>" + greenRocket.color);
console.log("safety level    ------------>" + greenRocket.safetyLevel);
console.log("type            ------------>" + greenRocket.type);
console.log("baseprice       ------------>" + greenRocket.baseprice);
console.log("final price     ------------>" + greenRocket.getPrice()+'\n');
