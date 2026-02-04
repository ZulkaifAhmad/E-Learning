import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { assets } from "../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLogin = location.pathname === "/login";
  const isSignup = location.pathname === "/signup";

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (isSignup) {
      // FIX 2: Ensure email exists before trimming to prevent crash
      if (!formData.email || !formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (isSignup) {
        const newUserData = { ...formData, isLogin: false };
        localStorage.setItem("authData", JSON.stringify(newUserData));
        alert("Account created successfully! Please login.");
        navigate("/login");
      } else {
        const storedData = localStorage.getItem("authData");

        if (!storedData) {
          alert("No user found. Please sign up first.");
          return;
        }

        const registeredData = JSON.parse(storedData);

        if (
          registeredData.username === formData.username &&
          registeredData.password === formData.password
        ) {
          alert("Login Successful!");

          const updatedUser = { ...registeredData, isLogin: true };
          localStorage.setItem("authData", JSON.stringify(updatedUser));

          navigate("/");
        } else {
          alert("Invalid username or password");
        }
      }
      setFormData({ username: "", email: "", password: "" });
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50 overflow-hidden relative">
      <div
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 cursor-pointer flex gap-2 items-center text-gray-500 hover:text-teal-600 transition-colors z-10 group"
      >
        <div className="bg-white p-2 rounded-full shadow-sm group-hover:shadow-md transition-all">
          <ArrowLeft size={18} />
        </div>
        <p className="text-sm font-medium">Back</p>
      </div>

      <div className="w-full max-w-4xl h-[80vh] max-h-[550px] bg-white rounded-2xl shadow-xl flex overflow-hidden m-4 border border-gray-100">
        <div className="w-1/2 hidden md:block relative">
          <img
            src={assets.kid}
            alt="students"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/10"></div>
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">
              Welcome to E-Learning
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Please enter your details below.
            </p>
          </div>

          <div className="flex bg-gray-100 rounded-md p-1 mb-6 relative">
            <div
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-md shadow-sm transition-all duration-300 ${
                isLogin ? "left-1" : "left-[calc(50%+2px)]"
              }`}
            ></div>

            <button
              onClick={() => {
                navigate("/login");
                setErrors({});
              }}
              className={`w-1/2 py-1.5 rounded-full text-xs font-semibold z-10 transition-colors ${
                isLogin ? "text-teal-600" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => {
                navigate("/signup");
                setErrors({});
              }}
              className={`w-1/2 py-1.5 rounded-full text-xs font-semibold z-10 transition-colors ${
                isSignup ? "text-teal-600" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Signup
            </button>
          </div>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <p className="text-xs font-medium text-gray-600 ml-2">Username</p>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Type your username"
                className={`w-full px-4 py-2 text-sm bg-gray-50 border rounded-full outline-none focus:bg-white focus:ring-2 transition-all ${
                  errors.username
                    ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                    : "border-gray-200 focus:border-teal-400 focus:ring-teal-50"
                }`}
              />
              {errors.username && (
                <p className="text-red-500 text-[10px] ml-2">
                  {errors.username}
                </p>
              )}
            </div>

            {isSignup && (
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-600 ml-2">Email</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Type your email"
                  className={`w-full px-4 py-2 text-sm bg-gray-50 border rounded-full outline-none focus:bg-white focus:ring-2 transition-all ${
                    errors.email
                      ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                      : "border-gray-200 focus:border-teal-400 focus:ring-teal-50"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-[10px] ml-2">
                    {errors.email}
                  </p>
                )}
              </div>
            )}

            <div className="space-y-1">
              <p className="text-xs font-medium text-gray-600 ml-2">Password</p>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Type your password"
                  className={`w-full px-4 py-2 text-sm bg-gray-50 border rounded-full outline-none focus:bg-white focus:ring-2 transition-all ${
                    errors.password
                      ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                      : "border-gray-200 focus:border-teal-400 focus:ring-teal-50"
                  }`}
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-2.5 cursor-pointer text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 text-[10px] ml-2">
                  {errors.password}
                </p>
              )}
            </div>

            {isLogin && (
              <div className="flex justify-between text-xs px-2 pt-1">
                <label className="flex gap-2 items-center cursor-pointer text-gray-600">
                  <input type="checkbox" className="accent-teal-500 rounded" />
                  Remember me
                </label>
                <span className="text-teal-500 hover:text-teal-600 font-medium cursor-pointer">
                  Forgot Password?
                </span>
              </div>
            )}

            <button className="w-full py-2.5 bg-teal-400 hover:bg-teal-500 text-white rounded-full font-semibold text-sm shadow-md shadow-teal-100 hover:shadow-lg transition-all mt-2">
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
