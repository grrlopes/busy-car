import { Car } from "../../entities/car";
import { Auth } from "../../entities/auth";
import { User } from "../../entities/user";
import { Postgresingle } from "./Postgresingle";
import { Knex } from "knex";
import {
  IHandlePostgres,
  ILoginDb,
  IMessageDb,
  INewUserDb,
  INewCarDb,
} from "./IPostgresql";

class Postgrestore implements IHandlePostgres {
  private readonly bucket: User[] = [];
  private readonly tesla: Car[] = [];
  public db: Knex;
  constructor() {
    this.db = Postgresingle.getInstance.getStore();
  }
  async removecar(id: string): Promise<IMessageDb> {
    return await this.db("car").delete().where("id", id).returning("id");
  }

  async newcar(data: Car): Promise<INewCarDb> {
    return await this.db("car")
      .insert({
        id: data.id,
        brand: data.brand,
        model: data.model,
        created_at: new Date(),
      })
      .returning("id");
  }

  async login(data: Auth): Promise<ILoginDb> {
    return {
      login: data.login,
      password: "$2b$12$BYSOQiV1ShSUgMOt2FAHru9sVwoP0yL50LgO4pemPFViGXwiEuqoy",
    };
  }

  async newuser(data: User): Promise<INewUserDb> {
    return await this.db("users")
      .insert({
        id: data.id,
        login: data.user,
        password: data.password,
        created_at: new Date(),
      })
      .returning("id");
  }

  async removeuser(id: string): Promise<IMessageDb> {
    return await this.db("users").delete().where("id", id).returning("id");
  }
}

export { Postgrestore };
