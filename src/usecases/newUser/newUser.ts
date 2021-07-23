import { User } from "../../entities/user";
import { IUserDTO } from "./newUserDTO";
import { NewUserUseCase } from "./newUserUseCase";

class NewUser {
  constructor(private readonly newuserUseCase: NewUserUseCase) {}

  async createNewUser(data: IUserDTO): Promise<any> {
    try {
      await this.newuserUseCase.createuser(new User(data));
      return { message: "User has been created!" };
    } catch (error) {
      return error.message;
    }
  }
}

export { NewUser };
