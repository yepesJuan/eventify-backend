import { Router } from "express";
import { sportEvent } from "../model/sportEvent";
import {
  getAllEvents,
  createEvent,
  deleteEvent,
  getEvent,
} from "../service/event";
import { withAuthorization } from "../withAuthorization";

export const sportEventRouter = Router();

sportEventRouter.get("/", async (req, res) => {
  try {
    const events = await getAllEvents();
    res.status(200).send(events);
    console.log("all events");
  } catch (err) {
    res.status(500).send(err);
  }
});

sportEventRouter.get("/:id", withAuthorization, async (req, res) => {
  try {
    const event = await getEvent(req.params.id);
    res.status(200).send(event);
    console.log("got by id");
  } catch (err) {
    res.status(500).send(err);
  }
});

sportEventRouter.post("/", withAuthorization, async (req, res) => {
  try {
    let body = req.body as sportEvent;
    const event = await createEvent(body);
    res.status(201).send(event);
    console.log("created eventsss");
  } catch (err) {
    res.status(500).send(err);
  }
});
sportEventRouter.delete("/:id", withAuthorization, async (req, res) => {
  try {
    const event = await deleteEvent(req.params.id);
    res.status(202).send(event);
    console.log("delete evento");
  } catch (err) {
    res.status(500).send(err);
  }
});
