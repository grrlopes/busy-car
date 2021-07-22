import { login } from "../../src/usecases/login";

describe("### Login ###", () => {
  test("Should evaluate whether login auth successfull", async () => {
    const auth = await login.loginUp({
      login: "gabriel",
      password: "123456",
    });
    expect(auth).toBeTruthy();
  });

  test("Should evaluate whether login auth failed!", async () => {
    const message = await login.loginUp({
      login: "gabriel",
      password: "_123456_",
    });
    expect(message).toStrictEqual({
      message: "Authentication failed!!!",
    });
  });
});
