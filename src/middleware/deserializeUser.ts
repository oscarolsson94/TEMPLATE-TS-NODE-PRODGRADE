import { Request, Response, NextFunction } from "express";
import { get } from "lodash";

const deserializeUser = (req: Request, res: Response, next: NextFunction) => {
  /* get auth token from header */
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );
};
