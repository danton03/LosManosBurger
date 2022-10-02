import joi from "joi";

export const signUpSchema = joi.object({
	name: joi.string().trim().required(),
	email: joi.string().email().required(), 
	password: joi.string().trim().required(),
	confirmPassword: joi.string().valid(joi.ref("password")).required(),
});

export const loginSchema = joi.object({
	email: joi.string().email().required(), 
	password: joi.string().trim().required(),
});