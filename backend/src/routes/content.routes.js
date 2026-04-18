import { Router } from "express";
import { checkAuth } from "../middlewares/checkAuth.js";
import {
  updateCaptions,
  updateDetails,
  updateContacts,
  updateFooterLink,
} from "../controllers/content.controller.js";

export const contentRouter = Router();

contentRouter.put("/captions", checkAuth, updateCaptions);
contentRouter.put("/details", checkAuth, updateDetails);
contentRouter.put("/contacts", checkAuth, updateContacts);
contentRouter.put("/footer-link", checkAuth, updateFooterLink);
