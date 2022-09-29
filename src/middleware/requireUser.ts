import { Request, Response, NextFunction } from "express";

export const requireUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.locals.user;

  if (!user) return res.sendStatus(403);

  /* if deserializeUser doesnt find a user, we send back unauthorized */

  return next();
};
