import { DocumentDefinition } from "mongoose";
import { UserDocument, UserModel } from "../models/user.model";

export const createUser = async (input: DocumentDefinition<UserDocument>) => {
  try {
    return await UserModel.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
};
