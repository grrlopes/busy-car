import { User } from "../../entities/user";
import { IUserDTO } from "./newUserDTO";

class NewUserUseCase {
  constructor() {}
  /**
   * createuser
   */
  public async createuser(data: IUserDTO): Promise<User> {
    return {
      user: data.user,
      password: data.password,
    };
  }
}

export { NewUserUseCase };
