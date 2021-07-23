import { removeCar } from "../../src/usecases/admin/removecar";
import { newcar } from "../../src/usecases/admin/newCar";
import { Postgresingle } from "../../src/infra/Postgres/Postgresingle";

const db = Postgresingle.getInstance.getStore();
afterAll(() => {
  db.destroy();
});

beforeAll(async () => {
  await db("car").del();
});

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
