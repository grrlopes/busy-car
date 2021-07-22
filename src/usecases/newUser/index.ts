import { Postgrestore } from "./../../infra/Postgres/Postgresql";
import { NewUser } from "./newUser";
import { NewUserUseCase } from "./newUserUseCase";

const postgres = new Postgrestore()
const newuserusecase = new NewUserUseCase(postgres);
const newuser = new NewUser(newuserusecase);

export { newuser };
