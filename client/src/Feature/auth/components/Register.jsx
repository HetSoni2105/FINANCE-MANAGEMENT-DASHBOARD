import React, { Children, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Register() {
  const { register, error } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfpassword, setCfpassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ name, email, password });
      navigate("/login");
    } catch (err) {
      console.error("Register error:", err);
    }
  };

  useEffect(() => {
    if (cfpassword == "" || password == "") return;
    if (cfpassword != password) {
      document.getElementById("errmsg").textContent = "password does not match";
    } else {
      document.getElementById("errmsg").textContent = "";
    }
  }, [cfpassword, password]);

  return (
    <div className="flex border-2 border-black mt-42 m-88 text-white h-150">
      <div className="bg-black min-w-1/2">
        <p className="m-64">The Intro</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-800 w-full">
        <div className="mt-12 mb-4 text-center text-4xl">User Registration</div>
        <div className="p-5 mt-2 flex flex-col">
          <div className="mb-3 self-center flex flex-col">
            <label className="mb-2" htmlFor="Full Name">
              FULL NAME:
            </label>
            <input
              id="email"
              className="bg-white text-black  mr-8 text-2xl w-96 p-1"
              type="text"
              autoComplete="off"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 self-center flex flex-col">
            <label className="mb-2" htmlFor="email">
              EMAIL:
            </label>
            <input
              id="email"
              className="bg-white text-black  mr-8 text-2xl w-96 p-1"
              type="text"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 self-center flex flex-col">
            <label className="mb-2" htmlFor="password">
              PASSWORD:
            </label>
            <input
              id="password"
              className="bg-white text-black mr-8 text-2xl w-96 p-1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-5 self-center flex flex-col">
            <label className="mb-2" htmlFor="password">
              CONFIRM PASSWORD:
            </label>
            <input
              id="cfpassword"
              className="bg-white text-black mr-8 text-2xl w-96 p-1"
              type="text"
              value={cfpassword}
              onChange={(e) => {
                setCfpassword(e.target.value);
              }}
              required
            />
            <p id="errmsg" className="text-red-500 italic"></p>
            <p className="text-center m-1">
              Already have a account?{" "}
              <Link to="/login" className="text-blue-500  hover:underline">
                Login Now
              </Link>
            </p>
          </div>

          <button
            id="register"
            className="bg-blue-600 w-24 h-10 text-2xl self-center "
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
