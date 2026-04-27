import axios from "axios";

export async function arrangeEmployees(employeesData) {
  try {
    const response = await axios.put("/api/employees", employeesData);
    return response;
  } catch (err) {
    console.log(err);
  }
}
