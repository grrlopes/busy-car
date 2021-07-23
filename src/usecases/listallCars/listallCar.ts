import { IListAllCars } from "../../infra/Postgres/IPostgresql";
import { ListAllCarUseCase } from "./listallCarUseCase";

class ListAllCar {
  constructor(private readonly listallcarUseCase: ListAllCarUseCase) {}

  async listAllCars(): Promise<IListAllCars[]> {
    try {
      return await this.listallcarUseCase.listallCars();
    } catch (error) {
      return error.message;
    }
  }
}

export { ListAllCar };
