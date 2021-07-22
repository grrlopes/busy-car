import { Postgrestore } from "../../infra/Postgres/Postgresql";
import { RemoveUser } from "./removeUser";
import { RemoveUserUseCase } from "./removeUserUseCase";

const postgres = new Postgrestore()
const removeuserusecase = new RemoveUserUseCase(postgres);
const removeuser = new RemoveUser(removeuserusecase);

export { removeuser };
