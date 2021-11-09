import { Router } from "express";
import { Eventos } from "../model/eventos";
import { getAllEvents, createEvent, deleteEvent } from "../service/event";

export const eventosRouter = Router();

eventosRouter.get("/", async (req, res) => {
  const eventos = await getAllEvents();
  res.send(eventos);
});

eventosRouter.post("/", async (req, res) => {
  const evento = req.body as Eventos;
  await createEvent(evento);
  res.send().status(201);
});
eventosRouter.delete("/:id", async (req, res) => {
  await deleteEvent(req.params.id);
  res.send().status(201);
  console.log("delete evento");
});
