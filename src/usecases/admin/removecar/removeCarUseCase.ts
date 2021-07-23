import { Postgrestore } from "../../../infra/Postgres/Postgresql";
import { IMessageDb } from "../../../infra/Postgres/IPostgresql";

class RemoveCarUseCase {
  constructor(private readonly postgreStore: Postgrestore) {}
  /**
   * createuser
   */
  public async removeCar(id: string): Promise<IMessageDb> {
    const rmcar = await this.postgreStore.removecar(id);
    if (!rmcar) {
      throw new Error("User has not been removed!!!");
    }
    return rmcar;
  }
}

export { RemoveCarUseCase };
