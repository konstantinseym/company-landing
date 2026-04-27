import axios from "axios";

export async function updatePolicy(policyData) {
  try {
    const response = await axios.put("/api/hero-background", policyData);
    return response;
  } catch (err) {
    console.log(err);
  }
}
