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
    return await this.postgreStore.newuser(data);
  }
}

export { NewUserUseCase };
