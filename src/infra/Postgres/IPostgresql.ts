import { User } from "src/entities/user";

interface INewUserDb {
  id?: string;
  user?: string;
  password?: string;
}

interface IMessageDb {
  message?: string;
}

interface IHandlePostgres {
  newuser: (data: User) => Promise<INewUserDb>;
  removeuser: (data: string) => Promise<IMessageDb>;
}

export { IHandlePostgres, IMessageDb, INewUserDb };
