/// <reference path="pricedetector.ts" />
namespace crackers {
    export class Sparklers extends PriceDetector {
        constructor(color) {
            super(color, 20);
        }
        type = "flamable";
        safetyLevel = "8+";
    }
    export class Rockets extends PriceDetector {
        constructor(color) {
            super(color, 30);
        }
        type = "highly flamable";
        safetyLevel = "18+";
    }
}
