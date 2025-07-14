import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NavLinks = ({ vertical = false, onClick = () => {} }) => {
  const layout = vertical
    ? "flex-col items-start gap-6 px-6 py-4"
    : "flex-row gap-6";
  const textColor = vertical ? "text-gray-700" : "text-white";

  return (
    <div className={`flex ${layout} ${textColor} font-medium text-lg`}>
      <NavLink to="/" onClick={onClick}>
        Home
      </NavLink>
      <NavLink to="/about" onClick={onClick}>
        About
      </NavLink>
      <a
  href="/portal"
  target="_blank"
  rel="noopener noreferrer"
  onClick={onClick}
>
  Portal
</a>

      <NavLink to="/contact" onClick={onClick}>
        Contact
      </NavLink>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/30 backdrop-blur-sm z-50 md:hidden"
          onClick={toggleNavbar}
        ></div>
      )}

      <nav className="px-6 md: fixed top-0 z-50 w-full bg-[#800020]">
        <div className="max-w-screen-xl mx-auto md: flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Logo />
            <div className="text-white leading-tight">
              <p className="text-5xl uppercase font-rokkitt font-bold">Fidif</p>
              <p className="text-sm">SCHOOL COMPLEX</p>
            </div>
          </div>

          <div className="hidden md:flex">
            <NavLinks />
          </div>

          <div className="md:hidden z-50">
            <button onClick={toggleNavbar}>
              {isOpen ? (
                <X className="text-white" size={28} />
              ) : (
                <Menu className="text-white" size={28} />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavbar}>
            <X className="text-gray-700" size={28} />
          </button>
        </div>

        <NavLinks vertical={true} onClick={toggleNavbar} />
      </div>
    </>
  );
};

export default Navbar;
