import mongoose from "mongoose";
import config from "config";
import { log } from "./logger";

export const connect = async () => {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    log.info("Connected to DB");
  } catch (error) {
    log.error("Could not connect to DB");
    process.exit(1);
  }
};
