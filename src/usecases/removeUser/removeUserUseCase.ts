import { IMessageDb } from "src/infra/Postgres/IPostgresql";
import { Postgrestore } from "../../infra/Postgres/Postgresql";
import { IDelUserDTO } from "./removeUserDTO";

class RemoveUserUseCase {
  constructor(private readonly postgreStore: Postgrestore) {}
  /**
   * removeuser
   */
  public async removeuser(data: IDelUserDTO): Promise<IMessageDb> {
    const rmuser = await this.postgreStore.removeuser(data.id);
    if (!rmuser) {
      throw new Error("User has not been removed!!!");
    }
    return rmuser;
  }
}

export { RemoveUserUseCase };
