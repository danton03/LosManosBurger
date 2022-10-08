import dotenv from "dotenv";
import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import handleErrorsMiddleware from "./middlewares/errorMiddleware";
import router from "./routes/router";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());
app.use(router);
app.use(handleErrorsMiddleware);

export default app;
