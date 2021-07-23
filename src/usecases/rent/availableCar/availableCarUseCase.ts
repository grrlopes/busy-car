import { Postgrestore } from "../../../infra/Postgres/Postgresql";
import { IAvailableCar } from "../../../infra/Postgres/IPostgresql";
import { IAvailableCarDTO } from "./availableCarDTO";
import { Erent } from "../../../entities/Erent";

class AvailableCarUseCase {
  constructor(private readonly postgreStore: Postgrestore) {}
  public async availableCar(data: IAvailableCarDTO): Promise<IAvailableCar> {
    const listcar = await this.postgreStore.availablecar(
      data.car_id,
    );
    if (!listcar) {
      throw new Error("Something went wrong!!!");
    }
    return listcar;
  }
}

export { AvailableCarUseCase };
