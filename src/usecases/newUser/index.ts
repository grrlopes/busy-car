import { NewUser } from "./newUser";
import { NewUserUseCase } from "./newUserUseCase";

const newuserusecase = new NewUserUseCase();
const newuser = new NewUser(newuserusecase);

export { newuser };
