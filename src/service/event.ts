import { getEventCollection } from "../gateway/dbConnect";
import { ObjectId } from "mongodb";
import { Eventos } from "../model/eventos";

export const getAllEvents = async () => {
  const col = await getEventCollection();
  const events = await col.find({}).toArray();
  return events;
};
export const getEvent = async (id: ObjectId) => {
  const col = await getEventCollection();
  return col.findOne({ _id: id });
};
export const createEvent = async (event: Eventos) => {
  const col = await getEventCollection();
  await col.insertOne(event);
};
export const deleteEvent = async (id: string) => {
  const col = await getEventCollection();
  const res = await col.deleteOne({ _id: new ObjectId(id) });
  console.log(res);
};
