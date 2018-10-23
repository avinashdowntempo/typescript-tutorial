/// <reference path="pricedetector.ts" />
namespace crackers {
    export class Flowerpot extends PriceDetector {
        constructor(color) {
            super(color, 10);
        }
        type = "flamable";
        safetyLevel = "12+ age";
        color;
    }
}
