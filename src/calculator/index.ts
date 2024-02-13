type Food = Record<
  string,
  {
    name: string;
    price: number;
    quantity: number;
  }
>;

class FoodCalculator {
  public foods: Food;

  constructor() {
    // Initialize the foods
    this.foods = {
      RED: {
        name: "RED",
        price: 50,
        quantity: 0,
      },
      GREEN: {
        name: "GREEN",
        price: 40,
        quantity: 0,
      },
      BLUE: {
        name: "BLUE",
        price: 30,
        quantity: 0,
      },
      YELLOW: {
        name: "YELLOW",
        price: 50,
        quantity: 0,
      },
      PINK: {
        name: "PINK",
        price: 80,
        quantity: 0,
      },
      PURPLE: {
        name: "PURPLE",
        price: 90,
        quantity: 0,
      },
      ORANGE: {
        name: "ORANGE",
        price: 120,
        quantity: 0,
      },
    };
  }

  public addOrder(name: string) {
    this.foods[name].quantity++;
  }

  public calculateTotal() {
    let total = 0;
    for (let key in this.foods) {
      let food = this.foods[key];
      if (["ORANGE", "PINK", "GREEN"].includes(food.name)) {
        total += this.calculateBundle(food.quantity, food.price);
      } else {
        total += food.price * food.quantity;
      }
    }
    return total;
  }

  public calculateTotalWithMembership() {
    return this.calculateTotal() * 0.9;
  }

  public printItems() {
    let items = "";
    for (let key in this.foods) {
      let food = this.foods[key];
      items += `[${food.name.slice(0, 2)}]${food.name.slice(2)}: $${
        food.price
      }\n`;
    }
    return items;
  }

  public getItemByName(name: string) {
    switch (name) {
      case "RE":
        return this.foods.RED;
      case "GR":
        return this.foods.GREEN;
      case "BL":
        return this.foods.BLUE;
      case "YE":
        return this.foods.YELLOW;
      case "PI":
        return this.foods.PINK;
      case "PU":
        return this.foods.PURPLE;
      case "OR":
        return this.foods.ORANGE;
      default:
        return null;
    }
  }

  private calculateBundle(quantity: number, price: number) {
    let discounted = Math.floor(quantity / 2);
    let regular = Math.floor(quantity % 2);
    return discounted * 2 * (price * 0.95) + regular * price;
  }
}

export default FoodCalculator;
