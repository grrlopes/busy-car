import { User } from "src/entities/user";
import { IHandlePostgres, IMessageDb, INewUserDb } from "./IPostgresql";

class Postgrestore implements IHandlePostgres {
  private bucket: User[] = [];
  constructor() {}
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
    delete resp?.id
    return { message: "ok" };
  }
}

export { Postgrestore };
