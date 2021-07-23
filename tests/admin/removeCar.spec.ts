import { removeCar } from "../../src/usecases/admin/removecar";
import { newcar } from "../../src/usecases/admin/newCar";

describe("### Remove Car ###", () => {
  test("Should remove a car by Id", async () => {
    await newcar.createNewCar({
      id: "d021afd1-2cf0-4c76-b0d0-61a730797bf1",
      brand: "beatle",
      model: "volkswagen",
    });
    const remove_car = await removeCar.removeCars(
      "d021afd1-2cf0-4c76-b0d0-61a730797bf1"
    );
    expect(remove_car).toStrictEqual({
      message: "Car has been removed!"
    });
  });
});
