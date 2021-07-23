import { Postgrestore } from "../../infra/Postgres/Postgresql";
import { INewUserDb } from "../../infra/Postgres/IPostgresql";
import { Auth } from "../../entities/auth";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

class LoginUseCase {
  constructor(private readonly postgreStore: Postgrestore) {}
  public async login(data: Auth): Promise<INewUserDb> {
    const login = await this.postgreStore.login(data);
    if (!login) {
      throw new Error("Authentication failed!!!");
    }
    const auth = await compare(data.password, login.password);
    if (!auth) {
      throw new Error("Authentication failed!!!");
    }
    const token = sign(
      {
        login: login.login,
        userId: login.id,
      },
      "Yi2ZyQmYBS7TBXHogEAC",
      { expiresIn: "9d" }
    );
    const loginToken = await this.postgreStore.token(login.login, token);
    return loginToken;
  }
}

export { LoginUseCase };
