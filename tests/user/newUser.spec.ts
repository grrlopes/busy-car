import { Postgresingle } from "../../src/infra/Postgres/Postgresingle";
import { newuser } from "../../src/usecases/newUser";

const db = Postgresingle.getInstance.getStore();
afterAll(() => {
  db.destroy();
});

beforeAll(async () => {
  await db("users").del();
});

describe("### New User ###", () => {
  test("Should created a new user", async () => {
    const new_user = await newuser.createNewUser({
      user: "gabriel",
      password: "123456",
    });
    expect(new_user).toStrictEqual({
      message: "User has been created!",
    });
  });

  test("Should evaluate id invalid", async () => {
    const new_user = await newuser.createNewUser({
      id: "2fd58687-11bb-4902-afa7-9d5a86d0b0hh",
      user: "gabriel",
      password: "123456",
    });
    expect(new_user).toStrictEqual("id is not valid!");
  });
});
