import { MongoClient } from "mongodb";
import { sportEvent } from "../model/sportEvent";
import { MONGO_URL } from "./configDB";

let _client: MongoClient;

const getClient = async () => {
  if (!_client) {
    _client = new MongoClient(MONGO_URL);
    _client = await _client.connect();
  }
  return _client;
};
export const getEventCollection = async () => {
  const client = await getClient();
  const db = client.db("db");
  const col = db.collection<sportEvent>("event");
  return col;
};
