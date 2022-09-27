import { FilterQuery } from "mongoose";
import { SessionDocument, SessionModel } from "../models/session.model";

export const createSession = async (userId: string, userAgent: string) => {
  const session = await SessionModel.create({ user: userId, userAgent });

  return session.toJSON();
};

export const findSessions = (query: FilterQuery<SessionDocument>) => {
  return SessionModel.find(query).lean();
};
