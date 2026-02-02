import { assets } from "../../assets/assets.js";
import { NavLink } from "react-router-dom";
import "./outlits.css";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  let Nav = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Blog", path: "/blog" },
    { name: "Pricing", path: "/careers" },
  ];
  let navigation = useNavigate();
  let location = useLocation();
  if (location.pathname === "/signup" || location.pathname === "/login")
    return null;
  
  return (
    <nav className={`flex justify-between items-center box-border w-full h-20 px-8`}>
      <img
        src={assets.Logo}
        alt="logo_image"
        title="TOTC"
        className="h-1/2 w-15 object-fill"
      />

      <div className="menu_navigation flex items-center gap-10">
        {Nav.map((navigation, index) => (
          <NavLink
            key={index}
            to={navigation.path}
            className={({ isActive }) =>
              `tracking-wide ${isActive && " border-b-2 border-b-emerald-300"}`
            }
          >
            {navigation.name}
          </NavLink>
        ))}
      </div>
      <div className="menu_buttons flex justify-center items-center gap-4">
        <button
          type="button"
          className="cursor-pointer bg-white rounded text-black active:text-teal-300"
          onClick={() => navigation("/signup", { replace: true })}
        >
          Signup
        </button>

        <button
          type="button"
          className="cursor-pointer rounded bg-[#7fcecf] text-white active:text-teal-300"
          onClick={() => navigation("/login", { replace: true })}
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default Header;
