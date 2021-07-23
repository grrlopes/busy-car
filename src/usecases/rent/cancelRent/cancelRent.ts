import { IMessageDb } from "../../../infra/Postgres/IPostgresql";
import { CancelRentUseCase } from "./cancelRentUseCase";

class CancelRent {
  constructor(private readonly cancelrentUseCase: CancelRentUseCase) {}

  async cancelRent(id: string): Promise<IMessageDb> {
    try {
      await this.cancelrentUseCase.cancelRent(id);
      return { message: "Rent has been cancelled!" };
    } catch {
      return { message: "Rent has not been cancelled!" };
    }
  }
}

export { CancelRent };
