import { Postgrestore } from "./../../../infra/Postgres/Postgresql";
import { RentCar } from "./rentCar";
import { RentCarUseCase } from "./rentCarUseCase";

const postgres = new Postgrestore();
const rentcarusecase = new RentCarUseCase(postgres);
const rentcar = new RentCar(rentcarusecase);

export { rentcar };
