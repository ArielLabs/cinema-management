import express, { json } from "express";
import cors from "cors";
import { dbConnect } from "./db/mongoConnect.js";
import { IP_SERVER, PORT_SERVER } from "./environments.js";

dbConnect();

const app = express();

app.use(cors());

app.use(json());

app.listen((IP_SERVER, PORT_SERVER), () => {
  console.log(
    `subscriptions server running at http://${IP_SERVER}:${PORT_SERVER}`
  );
});
