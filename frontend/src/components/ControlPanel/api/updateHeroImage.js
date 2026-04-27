import axios from "axios";

export async function updateHeroImage(imageData) {
  try {
    const response = await axios.put("/api/hero-background", imageData);
    return response;
  } catch (err) {
    console.log(err);
  }
}
