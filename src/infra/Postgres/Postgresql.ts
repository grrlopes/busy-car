import { Car } from "../../entities/car";
import { Auth } from "../../entities/auth";
import { User } from "../../entities/user";
import { Rent } from "../../entities/rent";
import { Erent } from "../../entities/Erent";
import { Postgresingle } from "./Postgresingle";
import { Knex } from "knex";
import {
  IHandlePostgres,
  ILoginDb,
  IMessageDb,
  INewUserDb,
  INewCarDb,
  IAvailableCar,
  IListAllCars,
} from "./IPostgresql";

class Postgrestore implements IHandlePostgres {
  public db: Knex;
  constructor() {
    this.db = Postgresingle.getInstance.getStore();
  }
  async listallcars(): Promise<IListAllCars[]> {
    return this.db("car").select("*");
  }
  async availablecar(car_id: string): Promise<IAvailableCar> {
    return this.db("rent")
      .select("*")
      .innerJoin("car", "rent.car_id", "=", "car.id")
      .where("car_id", "=", car_id)
      .first();
  }
  async rentcar(data: Rent): Promise<IMessageDb> {
    return await this.db("rent")
      .insert({
        id: data.id,
        car_id: data.car_id,
        status: Erent.INDISPONIVEL,
        created_at: new Date(),
      })
      .returning("id");
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
    return this.db("users").select("*").where("login", "=", data.login).first();
  }

  async token(login: string, token: string): Promise<ILoginDb> {
    return this.db("users")
      .update({
        token: token,
        updated_at: new Date()
      })
      .where("login", "=", login)
      .returning(["id", "login", "token"]);
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
