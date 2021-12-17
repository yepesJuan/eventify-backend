"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var firebase_admin_1 = __importDefault(require("firebase-admin"));
var route_1 = require("./routes/route");
var firebaseConfig_1 = require("./firebaseConfig");
var PORT = process.env.PORT || 5000;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(firebaseConfig_1.firebaseConfig),
});
app.use("/events", route_1.sportEventRouter);
app.listen(PORT, function () { return console.log("Listening on port name " + PORT + "..."); });
//# sourceMappingURL=index.js.map