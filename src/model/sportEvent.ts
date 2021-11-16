import { ObjectId } from "mongodb";

export interface sportEvent {
  _id?: ObjectId;
  name: String;
  sport: String;
  capacity: Number;
  image: String;
  address: String;
  date: Date;
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
