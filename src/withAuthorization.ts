import express from "express";
import admin from "firebase-admin";

export const withAuthorization = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const jwt = req.headers.authorization!;
  try {
    const id = await admin.auth().verifyIdToken(jwt);
    res.locals.userId = id.uid;
  } catch {
    res.status(403).send("Unathorized!");
    return;
  }
  next();
};
