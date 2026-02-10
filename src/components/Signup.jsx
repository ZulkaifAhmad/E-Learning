import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { assets } from "../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLogin = location.pathname === "/login";
  const isSignup = location.pathname === "/signup";

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset();
  }, [isLogin, reset]);

  const onSubmit = (data) => {
    if (isSignup) {
      const newUserData = { ...data, isLogin: false };
      localStorage.setItem("authData", JSON.stringify(newUserData));
      
      toast.success("Account created successfully! Please login.");
      navigate("/login");
    } else {
      const storedData = localStorage.getItem("authData");

      if (!storedData) {
        toast.error("No user found. Please sign up first.");
        return;
      }

      const registeredData = JSON.parse(storedData);

      if (
        registeredData.username === data.username &&
        registeredData.password === data.password
      ) {
        toast.success("Login Successful!");
        navigate("/");
      } else {
        toast.error("Invalid username or password");
      }
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50 overflow-hidden relative">
      <Toaster 
        position="top-center" 
        reverseOrder={false}
        containerStyle={{ zIndex: 99999 }} 
      />

      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 md:top-8 md:left-8 flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors z-10"
      >
        <div className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
          <ArrowLeft size={16} />
        </div>
        <span className="text-sm font-medium hidden md:block">Back</span>
      </button>

      <div className="w-full max-w-4xl h-[85vh] max-h-[600px] bg-white rounded-2xl shadow-xl flex overflow-hidden m-4">
        <div className="w-1/2 hidden md:block relative bg-gray-100">
          <img
            src={assets.kid}
            alt="students"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/40 flex items-end p-8">
            <div className="text-white">
              <h2 className="text-2xl font-bold">Welcome Back</h2>
              <p className="text-xs text-teal-100 opacity-90 mt-1">
                Join our community of learners.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="w-full max-w-sm mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-1">
              {isLogin ? "Hello Again!" : "Get Started"}
            </h3>
            <p className="text-gray-400 text-xs text-center mb-6">
              {isLogin
                ? "Enter your details to login."
                : "Create your account now."}
            </p>

            <div className="flex bg-gray-100 rounded-lg p-1 mb-6 relative h-10">
              <div
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-md shadow-sm transition-all duration-300 ease-in-out ${isLogin ? "left-1" : "left-[calc(50%+2px)]"}`}
              ></div>
              <button
                onClick={() => navigate("/login")}
                className={`w-1/2 flex items-center justify-center text-xs font-semibold z-10 transition-colors ${isLogin ? "text-teal-600" : "text-gray-500"}`}
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className={`w-1/2 flex items-center justify-center text-xs font-semibold z-10 transition-colors ${isSignup ? "text-teal-600" : "text-gray-500"}`}
              >
                Signup
              </button>
            </div>

            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-600 ml-1">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter username"
                  {...register("username", { 
                    required: "Username is required",
                    minLength: { value: 3, message: "Username must be at least 3 characters" }
                  })}
                  className={`w-full px-4 py-2 text-sm bg-gray-50 border rounded-lg outline-none focus:bg-white focus:ring-2 transition-all ${
                    errors.username
                      ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                      : "border-gray-200 focus:border-teal-400 focus:ring-teal-50"
                  }`}
                />
                {errors.username && (
                  <p className="text-red-500 text-[10px] ml-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {isSignup && (
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format"
                      }
                    })}
                    className={`w-full px-4 py-2 text-sm bg-gray-50 border rounded-lg outline-none focus:bg-white focus:ring-2 transition-all ${
                      errors.email
                        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                        : "border-gray-200 focus:border-teal-400 focus:ring-teal-50"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[10px] ml-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-600 ml-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...register("password", { 
                      required: "Password is required",
                      minLength: { value: 6, message: "Password must be at least 6 characters" }
                    })}
                    className={`w-full px-4 py-2 text-sm bg-gray-50 border rounded-lg outline-none focus:bg-white focus:ring-2 transition-all ${
                      errors.password
                        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                        : "border-gray-200 focus:border-teal-400 focus:ring-teal-50"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-[10px] ml-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-teal-500 hover:bg-teal-600 text-white text-sm rounded-lg font-medium shadow-md hover:shadow-lg transform active:scale-[0.98] transition-all mt-4"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}