import { ObjectId } from "mongodb";

export interface Eventos {
  _id?: ObjectId;
  userId: String;
  name: string;
  address: String;
  image: String;
  capacity: Number;
  description: String;
}
