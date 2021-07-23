import { Postgrestore } from "./../../../infra/Postgres/Postgresql";
import { NewCar } from "./newCar";
import { NewCarUseCase } from "./newCarUseCase";

const postgres = new Postgrestore()
const newcarusecase = new NewCarUseCase(postgres);
const newcar = new NewCar(newcarusecase);

export { newcar };
