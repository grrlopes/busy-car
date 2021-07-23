import { Postgrestore } from "./../../../infra/Postgres/Postgresql";
import { AvailableCar } from "./availableCar";
import { AvailableCarUseCase } from "./availableCarUseCase";

const postgres = new Postgrestore();
const newuserusecase = new AvailableCarUseCase(postgres);
const availablecar = new AvailableCar(newuserusecase);

export { availablecar };
