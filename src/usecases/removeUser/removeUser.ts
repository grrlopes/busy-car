import { IMessageDb } from "../../infra/Postgres/IPostgresql";
import { IDelUserDTO } from "./removeUserDTO";
import { RemoveUserUseCase } from "./removeUserUseCase";

class RemoveUser {
  constructor(private readonly removeuserUseCase: RemoveUserUseCase) {}

  async removeUser(data: IDelUserDTO): Promise<IMessageDb> {
    try {
      return await this.removeuserUseCase.removeuser(data);
    } catch (error) {
      return { message: error.message };
    }
  }
}

export { RemoveUser };
