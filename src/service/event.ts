import { getEventCollection } from "../gateway/dbConnect";
import { ObjectId } from "mongodb";
import { sportEvent } from "../model/sportEvent";

export const getAllEvents = async () => {
  const col = await getEventCollection();
  const events = await col.find().toArray(); //find({})
  console.log(events);
  return events;
};
export const getEvent = async (id: string) => {
  const col = await getEventCollection();
  return col.findOne({ _id: new ObjectId(id) });
};
export const createEvent = async (event: sportEvent) => {
  const col = await getEventCollection();
  await col.insertOne(event);
};
export const deleteEvent = async (id: string) => {
  const col = await getEventCollection();
  const res = await col.deleteOne({ _id: new ObjectId(id) });
  console.log(res);
};
