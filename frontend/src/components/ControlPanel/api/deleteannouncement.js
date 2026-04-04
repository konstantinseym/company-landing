import axios from "axios";

export async function deleteAnnouncement(id) {
  try {
    const response = await axios.delete("/api/deleteAnnouncement/" + id, {
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
}
