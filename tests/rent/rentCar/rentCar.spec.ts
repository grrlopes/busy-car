import { Postgresingle } from "../../../src/infra/Postgres/Postgresingle";
import { newcar } from "../../../src/usecases/admin/newCar";
import { rentcar } from "../../../src/usecases/rent/rentCar";

const db = Postgresingle.getInstance.getStore();
afterAll(() => {
  db.destroy();
});

beforeAll(async () => {
  await db("users").del();
});

describe("### Rent a Car ###", () => {
  test("Should rent a car", async () => {
    await newcar.createNewCar({
      id: "aa0d261b-20e2-475a-bd21-657a296ed6b7",
      brand: "beatle",
      model: "volkswagen",
    });

    const rent_car = await rentcar.rentCar({
      car_id: "aa0d261b-20e2-475a-bd21-657a296ed6b7",
      model: "Volkwagen",
    });
    expect(rent_car).toStrictEqual({
      message: "Rent has been done!",
    });
  });

  test("Should check if rent was unable to be done", async () => {
    const rent_car = await rentcar.rentCar({
      car_id: "aa0d261b-20e2-475a-bd21-657a296ed6b7",
      model: "Volkswagen",
    });
    expect(rent_car).toStrictEqual({
      message: "Rent has not been done!",
    });
  });
});
