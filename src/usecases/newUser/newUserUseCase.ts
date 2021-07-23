import { Postgrestore } from "../../infra/Postgres/Postgresql";
import { IUserDTO } from "./newUserDTO";
import { INewUserDb } from "../../infra/Postgres/IPostgresql";
import { hash } from "bcrypt";

class NewUserUseCase {
  constructor(private readonly postgreStore: Postgrestore) {}
  /**
   * createuser
   */
  public async createuser(data: IUserDTO): Promise<INewUserDb> {
    data.password = await hash(data.password, 12);
    const user = await this.postgreStore.newuser(data);
    if (!user) {
      throw new Error("User has not been created!!!");
    }
    return user;
  }
}

export { NewUserUseCase };
