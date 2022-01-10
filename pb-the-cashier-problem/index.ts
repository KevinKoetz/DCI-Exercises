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
import readline from "readline";

class Cashier {
  constructor(
    notes: number[] = [10000, 5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1]
  ) {
    this.notes = notes;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.promptItemCost();
  }
  readonly notes;
  itemCost: undefined | number = undefined;
  customerGiven: undefined | number = undefined;
  private rl;
  promptItemCost() {
    this.rl.question("Please enter Item cost in €:", (input) => {
      const cost = Number.parseFloat(input);
      if (Number.isNaN(cost)) {
        console.log(
          "Malformed Input. Prompt is expecting either a whole number or a decimal number with up to two digits."
        );
        this.promptItemCost();
      } else {
        this.itemCost = Math.round(cost * 100);
        this.promptCustomerGiven();
      }
    });
  }
  promptCustomerGiven() {
    this.rl.question("Please enter Customer given in €:", (input) => {
      const cost = Number.parseFloat(input);
      if (Number.isNaN(cost)) {
        console.log(
          "Malformed Input. Prompt is expecting either a whole number or a decimal number with up to two digits."
        );
        this.promptCustomerGiven();
      } else {
        this.customerGiven = Math.round(cost * 100);
        this.printChange();
      }
    });
  }
  printChange() {
    if (this.customerGiven && this.itemCost) {
      console.log("You should provide the following change:");
      let remainder = this.customerGiven - this.itemCost;
      
      let change: { [key: number]: number } = {};
      let result = ""
      while (remainder > 0) {
        const note = this.notes.find((note) => note <= remainder);
        if (note) change[note] = change[note] ? ++change[note] : 1;
        remainder -= note ? note : remainder;
      }
      for (const key in change) {
        const note = Number(key);
        result += `${change[key]}x ${note >= 100 ? (note / 100) + "€" : (note) + "Cent"}, `
      }
      console.log(result);
      
    }3
    
    this.promptItemCost();
  }
}

const cashier = new Cashier();

//replServer.defineCommand("cashier", cashier)
