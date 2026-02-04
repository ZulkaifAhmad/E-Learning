import { assets } from "../../assets/assets.js";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { User, LogOut, Menu, X } from "lucide-react"; // Import Menu and X icons
import "./outlits.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

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

  useEffect(() => {
    setIsMenuOpen(false);
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
    <nav className="flex justify-between items-center box-border w-full h-20 px-8 bg-white sticky top-0 z-50">
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
              `text-base tracking-wide transition-colors ${
                isActive
                  ? "underline decoration-green-400 decoration-2 underline-offset-5"
                  : "text-white hover:text-teal-900" // Adjusted default text color for visibility on white bg
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-4">
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
              className="p-2 text-gray-400 bg-gray-200 cursor-pointer hover:text-black hover:bg-red-50 rounded-full transition-all"
            >
              <LogOut size={20} color="red" />
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
              className="px-5 cursor-pointer py-2 text-sm font-medium text-white bg-teal-400 hover:bg-teal-500 rounded-full transition-all"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </>
        )}
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-teal-500 transition-colors cursor-pointer"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white flex flex-col items-center gap-6 py-8 shadow-lg md:hidden border-t border-gray-100 animate-in slide-in-from-top-5">
          {navLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `text-lg tracking-wide transition-colors ${
                  isActive
                    ? "text-teal-500 font-semibold"
                    : "text-gray-600 hover:text-teal-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Auth Section */}
          <div className="flex flex-col items-center gap-4 w-full px-8 pt-4 border-t border-gray-100">
            {user ? (
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="flex items-center gap-3 bg-gray-50 py-2 px-6 rounded-full border border-gray-100 w-full justify-center">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                    <User size={18} />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 capitalize">
                    {user.username}
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-6 py-2 text-red-500 bg-red-50 hover:bg-red-100 rounded-full transition-all w-full justify-center"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 w-full">
                <button
                  type="button"
                  className="w-full py-2.5 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>

                <button
                  type="button"
                  className="w-full py-2.5 text-sm font-medium text-white bg-teal-400 hover:bg-teal-500 rounded-full transition-all"
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
