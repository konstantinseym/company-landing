import { Router } from "express";
import {
  createAnnouncement,
  deleteAnnouncement,
} from "../controllers/announcements.controller.js";
import { checkAuth } from "../middlewares/checkAuth.js";

export const announcementsRouter = Router();

announcementsRouter.post("/", checkAuth, createAnnouncement);
announcementsRouter.delete("/:id", checkAuth, deleteAnnouncement);
