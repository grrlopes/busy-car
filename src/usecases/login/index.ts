import { Postgrestore } from "./../../infra/Postgres/Postgresql";
import { Login } from "./login";
import { LoginUseCase } from "./loginUseCase";

const postgres = new Postgrestore()
const loginusecase = new LoginUseCase(postgres);
const login = new Login(loginusecase);

export { login };
