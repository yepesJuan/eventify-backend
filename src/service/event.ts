import { getEventCollection } from "../gateway/dbConnect";
import { ObjectId } from "mongodb";
import { sportEvent } from "../model/sportEvent";

export const getAllEvents = async () => {
  const col = await getEventCollection();
  const events = await col.find().sort({ date: 1 }).toArray(); //find({})
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

export const addMember = async (eventId: string, name: string) => {
  const col = await getEventCollection();
  const event = await getEvent(eventId);
  const userlist = [...(event?.userlist || []), name];
  await col.updateOne({ _id: new ObjectId(eventId) }, { $set: { userlist } });
  return { ...event, userlist };
};
export const deleteEvent = async (id: string) => {
  const col = await getEventCollection();
  const res = await col.deleteOne({ _id: new ObjectId(id) });
  console.log(res);
};
