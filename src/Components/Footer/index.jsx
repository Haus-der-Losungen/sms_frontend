import { Facebook, Phone, Mail, MessageSquare } from "lucide-react";
import logo from "../../assets/logo.png"; // update path as needed


const Footer = ({bgColor = 'bg-[#8B0000]'}) => {
  return (
    <footer className={`${bgColor} text-white pt-10`}>
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10">
        {/* Logo and Intro */}
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <img src={logo} alt="FIDIF logo" className="h-16" />
            <h2 className="text-xl sm:text-2xl font-bold leading-tight">
              FIDIF{" "}
              <span className="font-normal block sm:inline">
                SCHOOL COMPLEX
              </span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-md">
            With a proud history of academic excellence and student success,
            Fidif School Complex is committed to nurturing minds and shaping
            futures.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="portal" className="hover:underline">
                Portal
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Socials</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Facebook size={18} /> Facebook
            </li>
            <li className="flex items-center gap-2">
              <MessageSquare size={18} /> Whatsapp
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +233000000000
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-1" />
              <span className="break-words truncate">
                fidifschoolcomplex2011@gmail.com
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={`bg-[#800020] border-t border-white/20 py-4 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-2 px-4`}>
        <p>Powered by Arcadia</p>
        <p>© 2025 Fidif School Complex. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;

