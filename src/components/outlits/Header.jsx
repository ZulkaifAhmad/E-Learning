import { assets } from "../../assets/assets.js";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { User, LogOut } from "lucide-react"; // Import icons
import "./outlits.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("authData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData.isLogin) {
        setUser(parsedData);
      } else {
        setUser(null);
      }
    }
  }, [location]); 

  const handleLogout = () => {
    const storedData = localStorage.getItem("authData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const updatedData = { ...parsedData, isLogin: false };
      localStorage.setItem("authData", JSON.stringify(updatedData));
    }
    setUser(null);
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
  ];

  if (location.pathname === "/signup" || location.pathname === "/login")
    return null;

  return (
    <nav className="flex justify-between items-center box-border w-full h-20 px-8 bg-white shadow-sm sticky top-0 z-50">
      <img
        src={assets.Logo}
        alt="logo_image"
        title="TOTC"
        className="h-10 w-auto object-contain cursor-pointer"
        onClick={() => navigate("/")}
      />

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `text-base  tracking-wide transition-colors ${
                isActive ? "underline decoration-green-400 decoration-2 underline-offset-5" : "text-white"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-gray-50 py-1.5 px-4 rounded-full border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                    <User size={18} />
                </div>
                <span className="text-sm font-semibold text-gray-700 capitalize">
                    {user.username}
                </span>
            </div>

            <button 
                onClick={handleLogout}
                title="Logout"
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
            >
                <LogOut size={20} />
            </button>
          </div>
        ) : (
          <>
            <button
              type="button"
              className="px-5 cursor-pointer py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              type="button"
              className="px-5 cursor-pointer py-2 text-sm font-medium text-white bg-teal-400 hover:bg-teal-500 rounded-full  transition-all"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;