import express from "express";

import './database'

import { usersRoutes } from "./routes/users.routes";
import { gamesRoutes } from "./routes/games.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use("/games", gamesRoutes);

export { app };