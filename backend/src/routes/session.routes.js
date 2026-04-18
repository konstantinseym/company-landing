import { Router } from "express";
import {
  createSession,
  getSession,
} from "../controllers/session.controller.js";

export const sessionRouter = Router();

sessionRouter.get("/", getSession);
sessionRouter.post("/", createSession);
