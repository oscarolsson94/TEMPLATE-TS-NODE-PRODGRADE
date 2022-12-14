import { Request, Response } from "express";
import { omit } from "lodash";
import { CreateUserInput } from "../schemas/user.schema";
import { createUser } from "../services/user.service";
import { log } from "../utils/logger";

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) => {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user, "password"));
  } catch (error: any) {
    log.error(error);
    /* 409 = conflict - if function throws it has violated unique restrictions*/
    return res.status(409).send(error.message);
  }
};
