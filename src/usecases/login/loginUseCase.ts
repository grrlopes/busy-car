import { Postgrestore } from "../../infra/Postgres/Postgresql";
import { INewUserDb } from "../../infra/Postgres/IPostgresql";
import { Auth } from "../../entities/auth";
import { compare } from "bcrypt";

class LoginUseCase {
  constructor(private readonly postgreStore: Postgrestore) {}
  /**
   * Login
   */
  public async login(data: Auth): Promise<INewUserDb> {
    const login = await this.postgreStore.login(data);
    const auth = await compare(data.password, login.password);
    if (!auth) {
      throw new Error("Authentication failed!!!");
    }
    return login;
  }
}

export { LoginUseCase };
