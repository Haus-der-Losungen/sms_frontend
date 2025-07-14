import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo2 from "../assets/logo2.png"; 

const PortalLogin = () => {
  const [role, setRole] = useState("Student");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const credentials = {
      userId,
      password,
      role
    };
  
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Save token or user info if returned
        localStorage.setItem("token", data.token);
        navigate("/portal/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  
  return (
    <div className="min-h-screen bg-[#E1A5C2] px-4 py-6 flex flex-col items-center">
   
      <div className="w-full max-w-6xl flex items-center gap-4 mb-6">
        <img src={logo2} alt="FIDIF Logo" className="ml-6  md:w-20 h-20 object-contain" />
        <div className="text-black">
          <h1 className="text-3xl font-bold">Fidif School</h1>
          <h2 className="text-2xl font-semibold">Complex</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl p-6 md:p-12 flex flex-col md:flex-row gap-6 items-center">

        {/* Left Info Section */}
        <div className="w-full md:w-1/2 text-left">
        <div className="bg-[#f7f6f6] rounded p-0 w-full mx-auto">
    
       <div className="bg-[#800020] rounded-t px-4 py-2">
        <p className="text-white text-sm font-bold">New Students / Applicants</p>
       </div>

       {/* Message body */}
       <div className="p-4">
      <p className="text-sm text-black font-semibold leading-relaxed">
        If you haven’t registered yet, visit Admin to: <br />
      <span className="font-bold">
        Apply, Register, Update Details, View Info, and Make Payments.
      </span>
      </p>
        </div>
      </div>

       </div>

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 bg-[#fefefe] p-6 md:p-8 rounded">
          <h2 className="text-xl font-bold text-[#800020] mb-4">Log In</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Role radio buttons */}
            <div className="flex flex-wrap gap-4 text-sm mb-2">
              {["Admin", "Student", "Staff", "Other"].map((r) => (
                <label key={r} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="role"
                    value={r}
                    checked={role === r}
                    onChange={() => setRole(r)}
                    className="accent-[#800020]"
                  />
                  {r}
                </label>
              ))}
            </div>

            {/* Inputs */}
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="User ID"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />

            <p className="text-xs text-gray-700">
              Forgot PIN/ID? Contact Admin
            </p>

            {/* Contact Info */}
            <div className="text-sm space-y-1 text-[#333] mt-2">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="font-semibold">fidifschoolcomplex2011@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span className="font-semibold">0200000000</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#800020] text-white py-2 rounded hover:bg-[#5e0017] transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PortalLogin;
