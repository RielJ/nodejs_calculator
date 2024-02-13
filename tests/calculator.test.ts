import FoodCalculator from "../src/calculator";

describe("Food Calculator Test", () => {
  test("Constructor Test", () => {
    const foodCalculator = new FoodCalculator();
    expect(foodCalculator).toBeInstanceOf(FoodCalculator);
    expect(Object.keys(foodCalculator.foods).length).toEqual(7);
  });

  test("Add Order Test", () => {
    const foodCalculator = new FoodCalculator();
    foodCalculator.addOrder("RED");
    foodCalculator.addOrder("ORANGE");
    foodCalculator.addOrder("PINK");

    expect(foodCalculator.foods.RED.quantity).toEqual(1);
    expect(foodCalculator.foods.ORANGE.quantity).toEqual(1);
    expect(foodCalculator.foods.PINK.quantity).toEqual(1);
    expect(foodCalculator.foods.GREEN.quantity).toEqual(0);
  });

  test("Calculate Total Test", () => {
    const foodCalculator = new FoodCalculator();
    foodCalculator.addOrder("RED");
    foodCalculator.addOrder("ORANGE");
    foodCalculator.addOrder("PINK");

    expect(foodCalculator.calculateTotal()).toEqual(250);
  });

  test("Calculate Total Test 2", () => {
    const foodCalculator = new FoodCalculator();
    // 50 + 50 = 100
    foodCalculator.addOrder("RED");
    foodCalculator.addOrder("RED");

    // 80 * 0.95 + 80 * 0.95 = 152
    foodCalculator.addOrder("PINK");
    foodCalculator.addOrder("PINK");

    // 120 * 0.95 = 114 * 2 = 228 + 120 = 348
    foodCalculator.addOrder("ORANGE");
    foodCalculator.addOrder("ORANGE");
    foodCalculator.addOrder("ORANGE");

    expect(foodCalculator.calculateTotal()).toEqual(600);
  });

  test("Calculate Total With Membership", () => {
    const foodCalculator = new FoodCalculator();
    foodCalculator.addOrder("RED");
    foodCalculator.addOrder("ORANGE");
    foodCalculator.addOrder("PINK");

    expect(foodCalculator.calculateTotalWithMembership()).toEqual(225);
  });

  test("Calculate Total With Membership 2", () => {
    const foodCalculator = new FoodCalculator();
    foodCalculator.addOrder("RED");
    foodCalculator.addOrder("RED");

    foodCalculator.addOrder("ORANGE");
    foodCalculator.addOrder("ORANGE");
    foodCalculator.addOrder("ORANGE");

    foodCalculator.addOrder("PINK");
    foodCalculator.addOrder("PINK");

    // 600 * 0.9 = 540
    expect(foodCalculator.calculateTotalWithMembership()).toEqual(540);
  });
});
