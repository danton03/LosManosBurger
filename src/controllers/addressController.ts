import { Request, Response } from "express";
import { addressService } from "../services/addressService";

export async function createAddress(req: Request, res: Response) {
	const addressData = req.body;
	await addressService.createAddress(addressData);
	return res.sendStatus(201);
}
