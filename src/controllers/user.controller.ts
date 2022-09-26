import { Request, Response } from "express";
import { createUser } from "../services/user.service";
import { log } from "../utils/logger";

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
  } catch (error: any) {
    log.error(error);
    /* 409 = conflict - if function throws it has violated unique restrictions*/
    return res.status(409).send(error.message);
  }
};
