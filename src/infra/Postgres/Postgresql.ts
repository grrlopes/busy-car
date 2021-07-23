import { Car } from "../../entities/car";
import { Auth } from "../../entities/auth";
import { User } from "../../entities/user";
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
  constructor() {}
  async removecar(data: string): Promise<IMessageDb> {
    const resp = this.tesla.find((car) => car.id === data);
    delete resp?.id;
    return { message: "ok" };
  }

  async newcar(data: Car): Promise<INewCarDb> {
    this.tesla.push({
      id: data.id,
      brand: data.brand,
      model: data.model,
    });
    const resp = this.tesla.find((carro) => carro.id === data.id);
    return { id: resp?.id, brand: resp?.brand, model: resp?.model };
  }

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
