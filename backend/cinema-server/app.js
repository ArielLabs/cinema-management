import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { dbConnect } from "./db/mongoConnect.js";
import { routesInit } from "./routes/config_routes.js";
import { IP_SERVER, PORT_SERVER } from "./environment.js";

dbConnect();

const app = express();

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(cookieParser());

app.use(json());

routesInit(app);

app.listen((IP_SERVER, PORT_SERVER), () => {
  console.log(`cinema server running at http://${IP_SERVER}:${PORT_SERVER}`);
});
