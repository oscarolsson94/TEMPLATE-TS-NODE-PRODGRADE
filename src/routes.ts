import { Express, Request, Response } from "express";
import {
  createSessionHandler,
  getUserSessionsHandler,
} from "./controllers/session.controller";
import { createUserHandler } from "./controllers/user.controller";
import { validateResource } from "./middleware/validateResource";
import { createSessionSchema } from "./schemas/session.schema";
import { createUserSchema } from "./schemas/user.schema";

export const routes = (app: Express) => {
  app.get("/healthscheck", (req: Request, res: Response) =>
    res.sendStatus(200)
  );

  app.post("/api/users", validateResource(createUserSchema), createUserHandler);

  app.post(
    "/api/sessions",
    validateResource(createSessionSchema),
    createSessionHandler
  );

  app.get("/api/sessions", getUserSessionsHandler);
};
