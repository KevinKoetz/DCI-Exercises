"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* The Cashier Problem
Create a program that helps a cashier give adequate change to customers. The program should return the amount of notes and coins for the customer's change.

Example: If the price is €3.75 and the paid amount is €50, then the client should receive €46.25 back in change.

The expected output should be:
2 x €20 // 2 twenty euro notes
1 x €5 // 1 five euro note
1 x €1 // 1 euro
1 x €0.2 // 1 twenty cent coin
1 x €0.05 // 1 five cent coin
Example: Price: €4.50, Paid amount: €20, Change: 15.50

Expected output:

1 x €10

1 x €5

1 x €0.5

Notes

Include outputs for exceptions e.g. price: €4, paid amount: €3. */
const readline_1 = __importDefault(require("readline"));
class Cashier {
    constructor(notes = [10000, 5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1]) {
        this.itemCost = undefined;
        this.customerGiven = undefined;
        this.notes = notes;
        this.rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        this.promptItemCost();
    }
    promptItemCost() {
        this.rl.question("Please enter Item cost in €:", (input) => {
            const cost = Number.parseFloat(input);
            if (Number.isNaN(cost)) {
                console.log("Malformed Input. Prompt is expecting either a whole number or a decimal number with up to two digits.");
                this.promptItemCost();
            }
            else {
                this.itemCost = Math.round(cost * 100);
                this.promptCustomerGiven();
            }
        });
    }
    promptCustomerGiven() {
        this.rl.question("Please enter Customer given in €:", (input) => {
            const cost = Number.parseFloat(input);
            if (Number.isNaN(cost)) {
                console.log("Malformed Input. Prompt is expecting either a whole number or a decimal number with up to two digits.");
                this.promptCustomerGiven();
            }
            else {
                this.customerGiven = Math.round(cost * 100);
                this.printChange();
            }
        });
    }
    printChange() {
        if (this.customerGiven && this.itemCost) {
            console.log("You should provide the following change:");
            let remainder = this.customerGiven - this.itemCost;
            let change = {};
            let result = "";
            while (remainder > 0) {
                const note = this.notes.find((note) => note <= remainder);
                if (note)
                    change[note] = change[note] ? ++change[note] : 1;
                remainder -= note ? note : remainder;
            }
            for (const key in change) {
                const note = Number(key);
                result += `${change[key]}x ${note >= 100 ? (note / 100) + "€" : (note) + "Cent"}, `;
            }
            console.log(result);
        }
        3;
        this.promptItemCost();
    }
}
const cashier = new Cashier();
//replServer.defineCommand("cashier", cashier)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrRUF1QmtFO0FBQ2xFLHdEQUFnQztBQUVoQyxNQUFNLE9BQU87SUFDWCxZQUNFLFFBQWtCLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQVV6RSxhQUFRLEdBQXVCLFNBQVMsQ0FBQztRQUN6QyxrQkFBYSxHQUF1QixTQUFTLENBQUM7UUFUNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxrQkFBUSxDQUFDLGVBQWUsQ0FBQztZQUNqQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1NBQ3ZCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBS0QsY0FBYztRQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLDhCQUE4QixFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDekQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQ1QsdUdBQXVHLENBQ3hHLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQzVCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLG1DQUFtQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDOUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQ1QsdUdBQXVHLENBQ3hHLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQztZQUN4RCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFFbkQsSUFBSSxNQUFNLEdBQThCLEVBQUUsQ0FBQztZQUMzQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUE7WUFDZixPQUFPLFNBQVMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3BCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLENBQUM7Z0JBQzFELElBQUksSUFBSTtvQkFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQzthQUN0QztZQUNELEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO2dCQUN4QixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUE7YUFDcEY7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBRXJCO1FBQUEsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFFOUIsOENBQThDIn0=