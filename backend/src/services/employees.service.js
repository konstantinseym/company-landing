import {
  deleteEmployee,
  getEmployee,
  newEmployee,
} from "../repositories/employees.repository.js";
import { deleteFile } from "./file.service.js";

export async function createEmployeeService(data) {
  await newEmployee(data);
}

export async function deleteEmployeeService(id) {
  const employee = await getEmployee(id);
  await deleteEmployee(id);
  await deleteFile(employee.imageurl);
}
