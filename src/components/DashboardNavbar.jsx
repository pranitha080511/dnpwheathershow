import { useNavigate } from "react-router-dom";

const DashboardNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        
        {/* BRAND */}
        <div className="text-yellow-400 font-extrabold text-xl">
          DNPWeather<span className="text-white"> Dashboard</span>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="text-white hover:text-yellow-400 transition"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
