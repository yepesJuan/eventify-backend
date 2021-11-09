import { json } from "body-parser";
import express from "express";
import cors from "cors";
import { eventosRouter } from "./src/routes/route";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(json());

app.use("/events", eventosRouter);

// app.get("/test", (req, res) => res.send("Works"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));