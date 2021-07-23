import { v4 as uuidv4 } from "uuid";

class Rent {
  public id?: string;
  public model: string;
  public car_id: string;

  constructor(props: Rent) {
    this.car_id = props.car_id;
    this.model = props.model;
    !props.id ? (this.id = uuidv4()) : (this.id = props.id);
  }
}

export { Rent };
