import { useState } from "react";
import axios from "axios";

export default function Auth({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const login = async () => {
    const res = await axios.post("https://your-backend-url/login", { email, password });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.token);
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}
