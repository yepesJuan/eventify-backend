import express from "express";
import cors from "cors";
import admin from "firebase-admin";
import { sportEventRouter } from "./routes/route";
import { firebaseConfig } from "./firebase-Config";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
});

app.use("/events", sportEventRouter);

app.listen(PORT, () => console.log(`Listening on port name ${PORT}...`));
