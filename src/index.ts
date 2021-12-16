import express from "express";
import cors from "cors";
import admin from "firebase-admin";
import { sportEventRouter } from "./routes/route";
import { firebaseConfig } from "./firebaseConfig";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
});

// app.get("/authenticated", withAuthorization, (req, res) => {
//   return res.send({ your: "cool" }).status(200);
// });

app.use("/events", sportEventRouter);

// app.get("/test", (req, res) => res.send("Works"));

app.listen(PORT, () => console.log(`Listening on port name ${PORT}...`));
// exports.app = functions.https.onRequest(app);
