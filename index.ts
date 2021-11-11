import express from "express";
import cors from "cors";
import admin from "firebase-admin";
import { sportEventRouter } from "./src/routes/route";
import { firebaseConfig } from "./firebase-config";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
});

const withAuthorization = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const jwt = req.headers.authorization!;
  try {
    const id = await admin.auth().verifyIdToken(jwt);
    res.locals.userId = id.uid;
  } catch {
    res.status(403).send("Unathorized");
    return;
  }
  next();
};

app.get("/authenticated", withAuthorization, (req, res) => {
  return res.send({ your: "cool" }).status(200);
});

app.use("/events", sportEventRouter);

// app.get("/test", (req, res) => res.send("Works"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
