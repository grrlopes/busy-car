import { Postgrestore } from "./../../../infra/Postgres/Postgresql";
import { RemoveCar } from "./removeCar";
import { RemoveCarUseCase } from "./removeCarUseCase";

const postgres = new Postgrestore()
const removecarusecase = new RemoveCarUseCase(postgres);
const removeCar = new RemoveCar(removecarusecase);

export { removeCar };
