import { Auth } from "../../entities/auth";
import { User } from "./../../entities/user";

interface INewUserDb {
  id?: string;
  user?: string;
  password?: string;
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
  removeuser: (data: string) => Promise<IMessageDb>;
  login: (data: Auth) => Promise<ILoginDb>;
}

export { IHandlePostgres, IMessageDb, INewUserDb, ILoginDb };
