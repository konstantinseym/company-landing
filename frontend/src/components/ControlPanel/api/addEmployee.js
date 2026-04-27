import axios from "axios";

export async function addEmployee(employeeData) {
  try {
    const response = await axios.post("/api/employees", employeeData);
    return response;
  } catch (err) {
    console.log(err);
  }
}
