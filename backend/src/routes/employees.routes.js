import { Router } from "express";
import { checkAuth } from "../middlewares/checkAuth.js";
import { createEmployee, deleteEmployee } from "../controllers/employees.controller.js";
import { upload } from "../config/multer.js";

export const employeesRouter = Router();

employeesRouter.post("/", checkAuth, upload.single("file"), createEmployee);
employeesRouter.delete("/:id", checkAuth, deleteEmployee);
