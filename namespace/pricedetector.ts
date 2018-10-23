namespace crackers {
    export class PriceDetector {
        public color;
        public baseprice;
        constructor(color, baseprice) {
            this.color = color;
            this.baseprice = baseprice;
        }
        getPrice() {
            if (this.color == 'pink') {
                return this.baseprice * 2;
            }
            else if (this.color = 'green') {
                return this.baseprice * 2.5;
            }
            else if (this.color = 'yellow') {
                return this.baseprice * 3;
            }

        }
    }
}
