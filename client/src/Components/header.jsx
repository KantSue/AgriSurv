import { useState, useEffect } from "react";
import { getToken, removeToken } from "../modules/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCalendar, faCloudSun, faLightbulb ,faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function BarNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [nom, setNom] = useState("");
  
  // Navigation links
  const navLinks = [
    { name: "Fandraisana", href: "/Acceuil", icon: faHouse },
    { name: "Torohevitra", href: "/Conseil/Type", icon: faLightbulb },
    { name: "Alimanaka", href: "/Activiter", icon:faCalendar },

    { name: "Toetrandro", href: "/Meteo", icon: faCloudSun },

  ];
  useEffect(() => {
    const token = getToken();
    if (!token) {
      alert("Avereno ny fisoratana anarana");
    } else {
      setNom(token.user.nom);
    }
  }, []);
  return (
    <nav className=" fixed w-full md:w-0 md:h-full insert-x-4 md:flex md:justify-start z-50   ">
      <div className="max-h-7xl m-h-auto">
        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col md:w-56 md:h-full  bg-[#03624C]  gap-12 shadow-xl rounded-2xl">
      
           {/* logo */}
          <div className="flex  flex-row-reverse  items-center justify-center gap-2 ">
            <a href="/" className="text-1xl font-bold text-green-100">
              AgriSurv
            </a>
            <img
              src="/images/logo.png"
              alt="Culture"
              className="w-7 h-9 md:w-12 md:h-16 object-cover"
            />
          </div>
<div className="hidden md:flex flex-col items-start pl-5 gap-6">
  {navLinks.map((link) => (
    <NavLink
      key={link.name}
      to={link.href}
      className={({ isActive }) =>
        `flex items-center gap-3 px-10 py-2 rounded-md transition-colors ${
          isActive
            ? "bg-white text-[#03624C]"
            : "text-green-200 hover:bg-white hover:text-[#03624C]"
        }`
      }
    >
      {link.icon && (
        <FontAwesomeIcon icon={link.icon} className="w-5 h-5 text-inherit" />
      )}
      <span>{link.name}</span>
    </NavLink>
  ))}

  <h1 className="flex items-center gap-2 mt-32 ml-10 justify-center text-green-100 cursor-pointer hover:text-red-500"  onClick={() => {
    removeToken();
    window.location.href = "/login";
  }}>
    Hiala <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-5 h-5" />
  </h1>
</div>


          </div> 
        {/* Mobile Menu Button */}
        <div className=" flex items-center justify-around md:hidden  bg-green-800/60 p-1 w-full ">
          {/* humberger */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                // Close Icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* logo */}
          <div className="flex  flex-col-reverse items-center">
            <a href="/" className="text-1xl font-bold text-green-600 ">
           
            </a>
            <img
              src="/images/logo.png"
              alt="Culture"
              className="w-7 h-9  object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          {/* profil */}
          
          <div>
            <div className="flex  flex-row-reverse  gap-3 items-center">
              <a href="/" className="text-1xl font-bold text-green-600 ">
              {nom}
              </a>
              <img
                src="/images/user.png"
                alt="Culture"
                className="w-7 h-7 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
     {isOpen && (
  <div className="md:hidden bg-white shadow-lg w-1/2 border border-gray-200 rounded-lg">
    <div className="px-4 py-3 space-y-2">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="block text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md py-2 px-3 transition-colors"
        >
          {link.name}
        </a>
      ))}
    </div>
  </div>
)}

    </nav>
  );
}
