import axios from "axios";

export async function login(password) {
  await axios.post(
    "/api/session",
    { password: password },
    { withCredentials: true },
  );
}

export async function logout() {
  await axios.delete("/api/session", { withCredentials: true });
}
