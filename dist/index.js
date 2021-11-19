"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var firebase_admin_1 = __importDefault(require("firebase-admin"));
var route_1 = require("./src/routes/route");
var firebase_config_1 = require("./firebase-config");
var PORT = process.env.PORT || 5000;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(firebase_config_1.firebaseConfig),
});
// app.get("/authenticated", withAuthorization, (req, res) => {
//   return res.send({ your: "cool" }).status(200);
// });
app.use("/events", route_1.sportEventRouter);
// app.get("/test", (req, res) => res.send("Works"));
app.listen(PORT, function () { return console.log("Listening on port name " + PORT + "..."); });
// exports.app = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map