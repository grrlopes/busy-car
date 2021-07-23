import { IAvailableCar } from "../../../infra/Postgres/IPostgresql";
import { IAvailableCarDTO } from "./availableCarDTO";
import { AvailableCarUseCase } from "./availableCarUseCase";

class AvailableCar {
  constructor(private readonly availableUseCase: AvailableCarUseCase) {}

  async availablecar(data: IAvailableCarDTO): Promise<IAvailableCar> {
    try {
      return await this.availableUseCase.availableCar(data);
    } catch (error) {
      return error.message;
    }
  }
}

export { AvailableCar };
