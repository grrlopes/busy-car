import { Postgrestore } from "../../infra/Postgres/Postgresql";
import { IListAllCars } from "../../infra/Postgres/IPostgresql";

class ListAllCarUseCase {
  constructor(private readonly postgreStore: Postgrestore) {}
  public async listallCars(): Promise<IListAllCars[]> {
    const listallcar = await this.postgreStore.listallcars();
    if (!listallcar.length) {
      throw new Error("There are no cars!!!");
    }
    return listallcar;
  }
}

export { ListAllCarUseCase };
