import { Postgrestore } from "./../../../infra/Postgres/Postgresql";
import { RentCar } from "./rentCar";
import { RentCarUseCase } from "./rentCarUseCase";

const postgres = new Postgrestore();
const newuserusecase = new RentCarUseCase(postgres);
const rentcar = new RentCar(newuserusecase);

export { rentcar };
