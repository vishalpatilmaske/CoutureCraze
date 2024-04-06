import Joi from "joi";

export const signupValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
