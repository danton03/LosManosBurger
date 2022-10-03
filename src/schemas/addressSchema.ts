import joi from "joi";

export const addressSchema = joi.object({
	userId: joi.number().required(), 
	street: joi.string().trim().required(),
	houseNumber: joi.number().required(),
	districtId: joi.number().required(),
});
