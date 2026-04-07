import axios from "axios";

export async function updateFooterLink(link) {
  try {
    const response = await axios.put("/api/updateFooterLink", link);
    return response.status;
  } catch (err) {
    console.log(err);
  }
}
