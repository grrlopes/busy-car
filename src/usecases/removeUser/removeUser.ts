import { IMessageDb } from "../../infra/Postgres/IPostgresql";
import { IDelUserDTO } from "./removeUserDTO";
import { RemoveUserUseCase } from "./removeUserUseCase";

class RemoveUser {
  constructor(private readonly removeuserUseCase: RemoveUserUseCase) {}

  async removeUser(data: IDelUserDTO): Promise<IMessageDb> {
    try {
      await this.removeuserUseCase.removeuser(data);
      return { message: "User has been removed!" };
    } catch (error) {
      return { message: "User has not been removed!!!" };
    }
  }
}

export { RemoveUser };
