import { Express, Request, Response } from "express";
import { createUserHandler } from "./controllers/user.controller";
import { validate } from "./middleware/validateResource";
import { createUserSchema } from "./schemas/user.schema";

export const routes = (app: Express) => {
  app.get("/healthscheck", (req: Request, res: Response) =>
    res.sendStatus(200)
  );

  app.post("/api/users", validate(createUserSchema), createUserHandler);
};
