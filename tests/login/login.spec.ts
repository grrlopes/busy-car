import { Postgresingle } from "../../src/infra/Postgres/Postgresingle";
import { login } from "../../src/usecases/login";
import { newuser } from "../../src/usecases/newUser";
const db = Postgresingle.getInstance.getStore();
afterAll(() => {
  db.destroy();
});

beforeAll(async () => {
  await db("users").del();
});

describe("### Login ###", () => {
  test("Should evaluate whether login auth successfull", async () => {
    await newuser.createNewUser({
      user: "gabriel",
      password: "123456",
    });
    const auth = await login.loginUp({
      login: "gabriel",
      password: "123456",
    });
    expect(auth[0].login).toStrictEqual("gabriel");
  });

  test("Should evaluate whether login auth failed!", async () => {
    const message = await login.loginUp({
      login: "gabriel",
      password: "1234567",
    });
    expect(message).toStrictEqual({
      message: "Authentication failed!!!",
    });
  });
});
