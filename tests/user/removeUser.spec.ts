import { Postgresingle } from "../../src/infra/Postgres/Postgresingle";
import { newuser } from "../../src/usecases/newUser";
import { removeuser } from "../../src/usecases/removeUser";

const db = Postgresingle.getInstance.getStore();
afterAll(() => {
  db.destroy();
});

beforeAll(async () => {
  await db("users").del();
});

describe("### Remove User ###", () => {
  test("Should remove an user", async () => {
    await newuser.createNewUser({
      id: "3bbac591-103b-4292-9805-7175e5692fb8",
      user: "gabriel",
      password: "123456",
    });

    const remove_user = await removeuser.removeUser({
      id: "3bbac591-103b-4292-9805-7175e5692fb8",
    });
    expect(remove_user).toEqual({ message: "User has been removed!" });
  });
});
