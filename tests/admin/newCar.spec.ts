import { Postgresingle } from "../../src/infra/Postgres/Postgresingle";
import { newcar } from "../../src/usecases/admin/newCar";

const db = Postgresingle.getInstance.getStore();
afterAll(() => {
  db.destroy();
});

beforeAll(async () => {
  await db("car").del();
});

afterEach(async() => {
  await db("car").del();
})

describe("### New Car ###", () => {
  test("Should create a new car", async () => {
    const new_car = await newcar.createNewCar({
      id: "aa0d261b-20e2-475a-bd21-657a296ed6b7",
      brand: "beatle",
      model: "volkswagen",
    });

    expect(new_car).toStrictEqual({
      message: "Car has been created!",
    });
  });

  test("Should evaluate id not valid", async () => {
    const notvalidId = await newcar.createNewCar({
      id: "2fd58687-11bb-4902-afa7-9d5a86d0b0hh",
      brand: "beatle",
      model: "volkswagen",
    });
    expect(notvalidId).toStrictEqual("id is not valid!");
  });
});
