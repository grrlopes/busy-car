import { Postgrestore } from "./../../../infra/Postgres/Postgresql";
import { CancelRent } from "./cancelRent";
import { CancelRentUseCase } from "./cancelRentUseCase";

const postgres = new Postgrestore();
const cancelrentusecase = new CancelRentUseCase(postgres);
const cancelrent = new CancelRent(cancelrentusecase);

export { cancelrent };
