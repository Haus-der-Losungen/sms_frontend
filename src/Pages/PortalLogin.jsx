import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const PortalLogin = () => {
  const [role, setRole] = useState("Student");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/portal/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E1A5C2] px-4 py-10">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        <div className=" mt-20 h-40  md:w-2/5  bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
          <div>
            <p className="bg-[#800020]  text-white text-center px-4 py-2 text-sm font-bold">
              New Students / Applicants
            </p>
            <p className="mt-4 text-sm font-extrabold leading-relaxed text-black">
              If you haven’t registered yet, visit Admin to: Apply, Register,
              Update Details, View Info, and Make Payments.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-3/5  bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-xl font-bold mb-4 text-[#800020]">Log In</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-wrap gap-4 text-sm">
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

            <input
              type="text"
              placeholder="User ID"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#800020]"
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#800020]"
              required
            />

            <p className="text-xs text-gray-600">
              Forgot PIN/ID? Contact Admin
            </p>

            <div className="text-sm space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={16} /> fidifschoolcomplex2011@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} /> 0200000000
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#800020] text-white py-2 rounded hover:bg-[#66001a] transition-colors"
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
