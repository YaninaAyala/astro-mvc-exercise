import { Router } from "express";
import userDb from "../database/users.json";
import chartsDb from "../database/natal-charts.json";
import usersRouter from "./user-router";
import chartsRouter from "./chart-router";

const indexRouter = Router()

indexRouter.get("/", (request: any, response) => {
    console.log(userDb, chartsDb);
    const userInfo = userDb.info;
    const chartsInfo = chartsDb.info;
    const description = {
      userInfo,
      chartsInfo,
    };
    response.status(200).json(description);
  });

  indexRouter.use("/users", usersRouter)
  indexRouter.use("/charts", chartsRouter)

  export default indexRouter