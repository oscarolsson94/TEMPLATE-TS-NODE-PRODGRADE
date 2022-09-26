import { Express, Request, Response } from "express";

export const routes = (app: Express) => {
  app.get("/healthscheck", (req: Request, res: Response) =>
    res.sendStatus(200)
  );
};
