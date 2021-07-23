import { Postgrestore } from "../../../infra/Postgres/Postgresql";
import { IRentCarDTO } from "./rentCarDTO";
import { IMessageDb } from "../../../infra/Postgres/IPostgresql";

class RentCarUseCase {
  constructor(private readonly postgreStore: Postgrestore) {}
  public async rentCar(data: IRentCarDTO): Promise<IMessageDb> {
    const rent = await this.postgreStore.rentcar(data);
    return rent;
  }
}

export { RentCarUseCase };
