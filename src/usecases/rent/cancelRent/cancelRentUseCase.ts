import { Postgrestore } from "../../../infra/Postgres/Postgresql";
import { IMessageDb } from "../../../infra/Postgres/IPostgresql";

class CancelRentUseCase {
  constructor(private readonly postgreStore: Postgrestore) {}
  public async cancelRent(id: string): Promise<IMessageDb> {
    return await this.postgreStore.cancelRent(id);
  }
}

export { CancelRentUseCase };
