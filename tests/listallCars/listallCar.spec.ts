import { Postgresingle } from "../../src/infra/Postgres/Postgresingle";
import { newcar } from "../../src/usecases/admin/newCar";
import { listallcar } from "../../src/usecases/listallCars";

const db = Postgresingle.getInstance.getStore();
afterAll(() => {
  db.destroy();
});

beforeEach(async () => {
  await db("car").del();
});

describe("### List All Cars ###", () => {
  test("Should return list of the cars", async () => {
    await newcar.createNewCar({
      id: "aa0d261b-20e2-475a-bd21-657a296ed6b7",
      brand: "beatle",
      model: "volkswagen",
    });
    await newcar.createNewCar({
      id: "aa0d261b-20e2-475a-bd21-657a296ed777",
      brand: "Suburban",
      model: "Chevrolet",
    });

    const list_car = await listallcar.listAllCars();
    expect(list_car).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: "aa0d261b-20e2-475a-bd21-657a296ed6b7",
          brand: "beatle",
          model: "volkswagen",
        }),
        expect.objectContaining({
          id: "aa0d261b-20e2-475a-bd21-657a296ed777",
          brand: "Suburban",
          model: "Chevrolet",
        }),
      ])
    );
  });

  test("Should return empty list of the cars", async () => {
    const list_car = await listallcar.listAllCars();
    expect(list_car).toStrictEqual("There are no cars!!!");
  });
});
