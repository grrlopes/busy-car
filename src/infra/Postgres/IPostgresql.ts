import { Rent } from "../../entities/rent";
import { Auth } from "../../entities/auth";
import { Car } from "../../entities/car";
import { User } from "./../../entities/user";

interface IAvailableCar {
  id: string;
  car_id: string;
  brand: string;
  model: string;
  status: string;
}

interface IListAllCars {
  id: string;
  brand: string;
  model: string;
}

interface INewUserDb {
  id?: string;
  user?: string;
  password?: string;
}

interface INewCarDb {
  id?: string;
  brand?: string;
  model?: string;
}

interface IMessageDb {
  message?: string;
}

interface ILoginDb {
  login: string;
  password: string;
}

interface IHandlePostgres {
  newuser: (data: User) => Promise<INewUserDb>;
  newcar: (data: Car) => Promise<INewCarDb>;
  removeuser: (data: string) => Promise<IMessageDb>;
  removecar: (data: string) => Promise<IMessageDb>;
  login: (data: Auth) => Promise<ILoginDb>;
  rentcar: (data: Rent) => Promise<IMessageDb>;
  availablecar: (car_id: string, status: string) => Promise<IAvailableCar>;
  listallcars: () => Promise<IListAllCars[]>;
}

export {
  IHandlePostgres,
  IMessageDb,
  INewUserDb,
  ILoginDb,
  INewCarDb,
  IAvailableCar,
  IListAllCars,
};
