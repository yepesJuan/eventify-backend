import { ObjectId } from "mongodb";

export interface sportEvent {
  _id?: ObjectId;
  userId: String;
  name: string;
  address: String;
  image: String;
  capacity: Number;
  description: String;
}

// json test
/*
 { "userId": "iamworking",
  "name": "soccer",
 " address": "boca raton",
  "image": "url",
  "capacity": 6,
  "description": "3v3"
 }
*/
