import express, { json } from "express";
import userDb from "./database/users.json";
import chartsDb from "./database/natal-charts.json"

import chartsRouter from "./routes/chart-router";
import usersRouter from "./routes/user-router";

const PORT = 8080;
export const app = express();

app.use(json());

app.use("/api/charts", chartsRouter);
app.use("/api/users", usersRouter);

app.get("/", (request: any, response) => {
    response.status(200).json({ message: "soy la raíz" });
});

app.get("/api", (request: any, response) => {
    console.log(userDb, chartsDb);
    
    //response.status(200).json(db.description);
});

app.listen(PORT, () => {
    console.log("Server listening on port:", PORT);
});