import readline from "readline";
import FoodCalculator from "./calculator";

const foodCalculator = new FoodCalculator();

const PROMPT = ">> ";

const HELPSTRING = `

Here are the items available for purchase:

${foodCalculator.printItems()}

Please enter the name of the item you would like to purchase.
Type 'help' to see this message again.
Type 'total' to see the total of your purchases.
Type 'member' to see the total of your purchases with membership.
Type 'exit' to exit the program.

`;

console.log(`
Welcome to the Food Calculator!
${HELPSTRING}`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const scanLine = () => {
  rl.question(PROMPT, (line) => {
    if (!line) {
      rl.close();
      return;
    }

    switch (line) {
      case "help":
        console.log(HELPSTRING);
        break;
      case "total":
        console.log(`Your total is: $${foodCalculator.calculateTotal()}`);
        break;
      case "member":
        console.log(
          `Your total with membership is: $${foodCalculator.calculateTotalWithMembership()}`,
        );
        break;
      case "exit":
        rl.close();
        return;
      default:
        const item = foodCalculator.getItemByName(line);
        if (item) {
          foodCalculator.addOrder(item.name);
          console.log(`You have added 1 ${item.name} to your cart.`);
        } else {
          console.log("\nItem not found. Please try again.\n");
        }
        break;
    }

    // Repeat scanning
    scanLine();
  });
};

scanLine();
