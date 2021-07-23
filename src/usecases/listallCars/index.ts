import { Postgrestore } from "./../../infra/Postgres/Postgresql";
import { ListAllCar } from "./listallCar";
import { ListAllCarUseCase } from "./listallCarUseCase";

const postgres = new Postgrestore();
const listallcarusecase = new ListAllCarUseCase(postgres);
const listallcar = new ListAllCar(listallcarusecase);

export { listallcar };
