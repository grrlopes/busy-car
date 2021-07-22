import { Auth } from "../../entities/auth";
import { LoginUseCase } from "./loginUseCase";

class Login {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  async loginUp(data: Auth): Promise<any> {
    try {
      return await this.loginUseCase.login(new Auth(data));
    } catch (error) {
      return { message: error.message };
    }
  }
}

export { Login };
