import { newEmployee } from "../repositories/employees.repository.js";

export async function createEmployeeService(data) {
  await newEmployee(data);
}
