import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useAuth();
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login({ email, password });
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className="flex border-2 border-black mt-42 m-88 text-white h-150 shadow-gray-600 shadow-2xl">
      <div className="bg-black min-w-1/2">
        <p className="m-64">The Intro</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-800 w-full">
        <div className="mt-16 mb-4 text-center text-4xl">User Login</div>

        <div className="p-4 flex flex-col">
          <div className="m-5 mt-2 mb-0 p-6 self-center flex flex-col">
            <label htmlFor="email">EMAIL:</label>
            <input
              id="email"
              className="bg-white text-black text-2xl w-96 p-1"
              type="text"
              autoComplete="off"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="m-5 mt-1 mb-2 p-6 self-center flex flex-col">
            <label htmlFor="password">PASSWORD:</label>
            <input
              id="password"
              className="bg-white text-black text-2xl w-96 p-1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div>
              <p className="text-center m-1 mt-4">
                Don't Have a account?
                <Link
                  className=" text-blue-500  hover:underline"
                  to="/register"
                >
                  Register Now
                </Link>
              </p>
              <p id="msg"></p>
            </div>
          </div>

          <button
            className="bg-blue-600 w-24 h-10 m-3 text-2xl self-center"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
