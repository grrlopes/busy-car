import { Postgresingle } from "../../../src/infra/Postgres/Postgresingle";
import { newcar } from "../../../src/usecases/admin/newCar";
import { rentcar } from "../../../src/usecases/rent/rentCar";
import { cancelrent } from "../../../src/usecases/rent/cancelRent";

const db = Postgresingle.getInstance.getStore();
afterAll(() => {
  db.destroy();
});

beforeAll(async () => {
  await db("car").del();
  await db("rent").del();
});

describe("### Cancel Rent ###", () => {
  test("Should cancel rent", async () => {
    await newcar.createNewCar({
      id: "aa0d261b-20e2-475a-bd21-657a296ed6b7",
      brand: "beatle",
      model: "volkswagen",
    });
     await rentcar.rentCar({
      car_id: "aa0d261b-20e2-475a-bd21-657a296ed6b7",
      model: "Volkwagen",
    });
    const cancel = await cancelrent.cancelRent(
      "aa0d261b-20e2-475a-bd21-657a296ed6b7"
    )
    expect(cancel).toStrictEqual({
      message: "Rent has been cancelled!",
    });
  });
});
