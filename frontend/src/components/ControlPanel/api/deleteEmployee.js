import axios from "axios";

export async function deleteEmployee(id) {
  try {
    const response = await axios.delete("/api/employees/" + id);
    return response;
  } catch (err) {
    console.log(err);
  }
}
