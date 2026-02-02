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
    remember: false,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    localStorage.setItem("authData", JSON.stringify(formData));
  };

  return (
    // h-screen ensures it never exceeds the viewport height
    <div className="h-screen w-full flex items-center justify-center bg-gray-50 overflow-hidden relative">
      
      {/* Back Button - Compact & Absolute */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 md:top-8 md:left-8 flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors z-10"
      >
        <div className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
            <ArrowLeft size={16} />
        </div>
        <span className="text-sm font-medium hidden md:block">Back</span>
      </button>

      {/* Main Card - Limited Height & Width */}
      <div className="w-full max-w-4xl h-[85vh] max-h-[600px] bg-white rounded-2xl shadow-xl flex overflow-hidden m-4">
        
        {/* Left Side: Image */}
        <div className="w-1/2 hidden md:block relative bg-gray-100">
          <img
            src={assets.kid}
            alt="students"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/40 flex items-end p-8">
             <div className="text-white">
                <h2 className="text-2xl font-bold">Welcome Back</h2>
                <p className="text-xs text-teal-100 opacity-90 mt-1">Join our community of learners.</p>
             </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="w-full max-w-sm mx-auto">
            
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-1">
              {isLogin ? "Hello Again!" : "Get Started"}
            </h3>
            <p className="text-gray-400 text-xs text-center mb-6">
              {isLogin ? "Enter your details to login." : "Create your account now."}
            </p>

            {/* Compact Toggle Switch */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6 relative h-10">
              <div 
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-md shadow-sm transition-all duration-300 ease-in-out ${isLogin ? 'left-1' : 'left-[calc(50%+2px)]'}`}
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

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-600 ml-1">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  className="w-full px-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all"
                />
              </div>

              {isSignup && (
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full px-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all"
                  />
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-600 ml-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full px-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex justify-between items-center text-xs pt-1">
                  <label className="flex gap-2 items-center cursor-pointer text-gray-500 hover:text-gray-700">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={formData.remember}
                      onChange={handleChange}
                      className="accent-teal-500 w-3 h-3 rounded"
                    />
                    Remember me
                  </label>
                  <span className="text-teal-600 font-medium cursor-pointer hover:underline">
                    Forgot Password?
                  </span>
                </div>
              )}

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