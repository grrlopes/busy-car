import { v4 as uuidv4, validate } from "uuid";

class User {
  public id?: string;
  public user: string;
  public password!: string;

  constructor(props: User) {
    this.user = props.user;
    this.password = props.password;
    !props.id ? (this.id = uuidv4()) : (this.id = props.id);
    if (!validate(this.id)) {
      throw {
        message: "id is not valid!",
      };
    }
  }
}

export { User };
