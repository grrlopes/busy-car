import { Auth } from "../../entities/auth";
import { User } from "../../entities/user";
import {
  IHandlePostgres,
  ILoginDb,
  IMessageDb,
  INewUserDb,
} from "./IPostgresql";

class Postgrestore implements IHandlePostgres {
  private bucket: User[] = [];
  constructor() {}
  async login(data: Auth): Promise<ILoginDb> {
    return {
      login: data.login,
      password: "$2b$12$BYSOQiV1ShSUgMOt2FAHru9sVwoP0yL50LgO4pemPFViGXwiEuqoy",
    };
  }

  async newuser(data: User): Promise<INewUserDb> {
    this.bucket.push({
      id: data.id,
      password: data.password,
      user: data.user,
    });
    const resp = this.bucket.find((user) => user.id === data.id);
    return { user: resp?.user, password: resp?.password };
  }

  async removeuser(data: string): Promise<IMessageDb> {
    const resp = this.bucket.find((user) => user.id === data);
    delete resp?.id;
    return { message: "ok" };
  }
}

export { Postgrestore };
