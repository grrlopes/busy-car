import { IMessageDb } from "../../../infra/Postgres/IPostgresql";
import { Rent } from "../../../entities/rent";
import { availablecar } from "../availableCar";
import { IRentCarDTO } from "./rentCarDTO";
import { RentCarUseCase } from "./rentCarUseCase";
import { Erent } from "../../../entities/Erent";

class RentCar {
  constructor(private readonly rentuserUseCase: RentCarUseCase) {}

  async rentCar(data: IRentCarDTO): Promise<IMessageDb> {
    try {
      const availability = await availablecar.availablecar(data);
      if (availability.status === Erent.INDISPONIVEL) {
        throw new Error("Rent has not been done!");
      }
      await this.rentuserUseCase.rentCar(new Rent(data));
      return { message: "Rent has been done!" };
    } catch {
      return { message: "Rent has not been done!" };
    }
  }
}

export { RentCar };
