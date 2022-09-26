import { object, string } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "name is required",
    }),
    password: string({
      required_error: "password is required",
    }).min(6, "password is too short, should be a minimum of 6 characters"),
    passwordConfirmation: string({
      required_error: "passwordConfirmation is required",
    }),
    email: string({
      required_error: "email is required",
    }).email("not a valid email"),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});
