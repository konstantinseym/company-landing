import { Router } from "express";
import {
  createSession,
  getSession,
  deleteSession,
} from "../controllers/session.controller.js";

export const sessionRouter = Router();

sessionRouter.get("/", getSession);
sessionRouter.post("/", createSession);
sessionRouter.delete("/", deleteSession);
