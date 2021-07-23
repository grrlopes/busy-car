import { IMessageDb } from "src/infra/Postgres/IPostgresql";
import { Postgrestore } from "../../infra/Postgres/Postgresql";
import { IDelUserDTO } from "./removeUserDTO";

class RemoveUserUseCase {
  constructor(private readonly postgreStore: Postgrestore) {}
  public async removeuser(data: IDelUserDTO): Promise<IMessageDb> {
    return await this.postgreStore.removeuser(data.id);
  }
}

export { RemoveUserUseCase };
