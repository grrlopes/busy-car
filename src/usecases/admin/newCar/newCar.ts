import { IMessageDb } from "../../../infra/Postgres/IPostgresql";
import { Car } from "../../../entities/car";
import { ICarDTO } from "./newCarDTO";
import { NewCarUseCase } from "./newCarUseCase";


class NewCar {
  constructor(private readonly newcarUseCase: NewCarUseCase) {}

  async createNewCar(data: ICarDTO): Promise<IMessageDb> {
    try {
      await this.newcarUseCase.createcar(new Car(data));
      return { message: "Car has been created!" };
    } catch (error) {
      return error.message;
    }
  }
}

export { NewCar };
