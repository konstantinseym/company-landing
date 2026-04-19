import { deleteEmployee, newEmployee } from "../repositories/employees.repository.js";

export async function createEmployeeService(data) {
  await newEmployee(data);
}

export async function deleteEmployeeService(id) {
  await deleteEmployee(id);
}
