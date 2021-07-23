import { Auth } from "../../entities/auth";
import { Car } from "../../entities/car";
import { User } from "./../../entities/user";

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
}

export { IHandlePostgres, IMessageDb, INewUserDb, ILoginDb, INewCarDb };
