import { Request, Response } from "express";
import { productsService } from "../services/productsService";

export async function getProducts(req: Request, res: Response) {
  const products = await productsService.getProducts();
  res.status(200).send(products);
}

/* export async function get(req: Request, res: Response) {
  // TODO
} */