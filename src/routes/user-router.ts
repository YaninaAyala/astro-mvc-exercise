import { Router } from "express";
import userController from "../controllers/user-controller";

const usersRouter = Router();
usersRouter.get("/", (request, response) => {
});

usersRouter.get("/:id", (request, response) => {
  userController.getById(request, response)
});

usersRouter.post("/", (request, response) => {});

usersRouter.patch("/:id", (request, response) => {})

usersRouter.delete("/:id", (request, response) => {})


export default usersRouter;
