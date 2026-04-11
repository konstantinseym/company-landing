import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    await axios.post(
      "/api/login",
      { password: passwordInputValue },
      { withCredentials: true },
    );
    navigate("/controlpanel");
  }

  return (
    <form
      onSubmit={handleLogin}
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="password"
        placeholder="password"
        value={passwordInputValue}
        onChange={(e) => setPasswordInputValue(e.target.value)}
      />
    </form>
  );
}
