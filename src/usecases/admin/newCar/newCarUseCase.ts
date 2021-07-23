import { Postgrestore } from "../../../infra/Postgres/Postgresql";
import { ICarDTO } from "./newCarDTO";
import { INewCarDb } from "../../../infra/Postgres/IPostgresql";

class NewCarUseCase {
  constructor(private readonly postgreStore: Postgrestore) {}
  /**
   *  createcar
   */
  public async createcar(data: ICarDTO): Promise<INewCarDb> {
    const newcar = await this.postgreStore.newcar(data);
    if (!newcar) {
      throw new Error("Car has not been created!!!");
    }
    return newcar
  }
}

export { NewCarUseCase };
