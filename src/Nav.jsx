import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavLinks = () => (
  <div className="flex gap-10">
    <NavLink to="/home" className="text-white hover:text-gray-300">Home</NavLink>
    <NavLink to="/about" className="text-white hover:text-gray-300">About</NavLink>
    <NavLink to="/portal" className="text-white hover:text-gray-300">Portal</NavLink>
    <NavLink to="/contact" className="text-white hover:text-gray-300">Contact</NavLink>
  </div>
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-white px-4 py-3 flex items-center justify-between">
      <div className="text-xl font-bold"></div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <NavLinks />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleNavbar}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

export default Nav;
