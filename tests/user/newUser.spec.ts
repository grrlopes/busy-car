import { newuser } from "../../src/usecases/newUser";

describe("### New User ###", () => {
  test("Should created a new user", async () => {
    const new_user = await newuser.createNewUser({
      user: "gabriel",
      password: "123456"
    });
    expect(new_user).toBeTruthy();
  });
});
