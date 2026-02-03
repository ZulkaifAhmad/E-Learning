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
    isLogin: false,
  });
  
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Username Validation
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    // Email Validation (Only for Signup)
    if (isSignup) {
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
    }

    // Password Validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
    
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      if (isSignup) {
        // --- SIGNUP LOGIC ---
        localStorage.setItem("authData", JSON.stringify(formData));
        alert("Account created successfully! Please login.");
        navigate("/login");
      } else {
        // --- LOGIN LOGIC ---
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
          // navigate("/dashboard"); 
        } else {
          alert("Invalid username or password");
        }
      }
      // Reset form (optional)
      setFormData({ username: "", email: "", password: "", isLogin: false });
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50 overflow-hidden relative">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 md:top-8 md:left-8 flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors z-10"
      >
        <div className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
            <ArrowLeft size={16} />
        </div>
        <span className="text-sm font-medium hidden md:block">Back</span>
      </button>

      {/* Main Card */}
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

            {/* Toggle Switch */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6 relative h-10">
              <div 
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-md shadow-sm transition-all duration-300 ease-in-out ${isLogin ? 'left-1' : 'left-[calc(50%+2px)]'}`}
              ></div>
              <button
                onClick={() => { navigate("/login"); setErrors({}); }}
                className={`w-1/2 flex items-center justify-center text-xs font-semibold z-10 transition-colors ${isLogin ? "text-teal-600" : "text-gray-500"}`}
              >
                Login
              </button>
              <button
                onClick={() => { navigate("/signup"); setErrors({}); }}
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
                  className={`w-full px-4 py-2 text-sm bg-gray-50 border rounded-lg outline-none focus:bg-white focus:ring-2 transition-all ${
                    errors.username 
                    ? "border-red-400 focus:border-red-400 focus:ring-red-100" 
                    : "border-gray-200 focus:border-teal-400 focus:ring-teal-50"
                  }`}
                />
                {errors.username && <p className="text-red-500 text-[10px] ml-1">{errors.username}</p>}
              </div>

              {/* Email Input (Signup Only) */}
              {isSignup && (
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className={`w-full px-4 py-2 text-sm bg-gray-50 border rounded-lg outline-none focus:bg-white focus:ring-2 transition-all ${
                        errors.email 
                        ? "border-red-400 focus:border-red-400 focus:ring-red-100" 
                        : "border-gray-200 focus:border-teal-400 focus:ring-teal-50"
                      }`}
                  />
                  {errors.email && <p className="text-red-500 text-[10px] ml-1">{errors.email}</p>}
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
                {errors.password && <p className="text-red-500 text-[10px] ml-1">{errors.password}</p>}
              </div>


              {/* Submit Button */}
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