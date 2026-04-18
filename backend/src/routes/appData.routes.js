import { Router } from "express";
import { getAppData } from "../controllers/appData.controller.js";

export const appDataRouter = Router();

appDataRouter.get("/", getAppData);
