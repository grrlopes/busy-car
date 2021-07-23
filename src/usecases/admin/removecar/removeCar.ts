import { IMessageDb } from "../../../infra/Postgres/IPostgresql";
import { RemoveCarUseCase } from "./removeCarUseCase";

class RemoveCar {
  constructor(private readonly removecarUseCase: RemoveCarUseCase) {}

  public async removeCars(id: string): Promise<IMessageDb> {
    try {
      await this.removecarUseCase.removeCar(id);
      return { message: "Car has been removed!" };
    } catch (error) {
      return { message: error.message };
    }
  }
}

export { RemoveCar };
