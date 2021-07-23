import { v4 as uuidv4, validate } from "uuid";

class Car {
  public id?: string;
  public brand: string;
  public model: string;

  constructor(props: Car) {
    this.brand = props.brand;
    this.model = props.model;
    !props.id ? (this.id = uuidv4()) : (this.id = props.id);
    if (!validate(this.id)) {
      throw {
        message: "id is not valid!",
      };
    }
  }
}

export { Car };
