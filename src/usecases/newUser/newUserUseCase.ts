import { Postgrestore } from "../../infra/Postgres/Postgresql";
import { IUserDTO } from "./newUserDTO";
import { INewUserDb } from "../../infra/Postgres/IPostgresql";

class NewUserUseCase {
  constructor(private readonly postgreStore: Postgrestore) {}
  /**
   * createuser
   */
  public async createuser(data: IUserDTO): Promise<INewUserDb> {
    return await this.postgreStore.newuser(data);
  }
}

export { NewUserUseCase };
