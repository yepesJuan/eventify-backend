import { ObjectId } from "mongodb";

export interface sportEvent {
  _id?: ObjectId;
  name: string;
  sport: string;
  capacity: number;
  image: string;
  address: string;
  date: Date;
  description: string;
  userlist: string[];
  ownerId: string;
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
