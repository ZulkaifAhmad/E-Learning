import { useState } from "react";
import { Eye } from "lucide-react";
import { assets } from "../assets/assets";

export default function AuthPage() {
  const [active, setActive] = useState("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex overflow-hidden">

        <div className="w-1/2 hidden md:block">
          <img src={`${assets.kid}`} alt="students" className="h-full w-full object-cover" />
        </div>

        <div className="w-full md:w-1/2 p-10">
          <h3 className="text-center text-lg font-semibold mb-6">
            Welcome to E-Learning
          </h3>

          <div className="flex bg-gray-100 rounded-full p-1 mb-6">
            <button
              onClick={() => setActive("login")}
              className={`w-1/2 py-2 rounded-full text-sm ${
                active === "login" && "bg-teal-400 text-white"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActive("register")}
              className={`w-1/2 py-2 rounded-full text-sm ${
                active === "register" && "bg-teal-400 text-white"
              }`}
            >
              Register
            </button>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your user name"
              className="w-full px-4 py-2 border rounded-full outline-none"
            />

            {active === "register" && (
              <input
                type="email"
                placeholder="Email-address"
                className="w-full px-4 py-2 border rounded-full outline-none"
              />
            )}

            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-full outline-none"
              />
              <Eye className="absolute right-4 top-3 w-4 text-gray-400" />
            </div>

            {active === "login" && (
              <div className="flex justify-between text-sm">
                <label className="flex gap-2 items-center">
                  <input type="checkbox" /> Remember me
                </label>
                <span className="text-teal-500 cursor-pointer">
                  Forgot Password?
                </span>
              </div>
            )}

            <button className="w-full py-2 bg-teal-400 text-white rounded-full font-medium">
              {active === "login" ? "Login" : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
