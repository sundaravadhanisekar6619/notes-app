import { NavLink } from "react-router-dom";

function Switch() {
  return (
    <nav className="inline-flex rounded-full overflow-hidden border-2 border-[#20734C]">
      <NavLink
        to="office"
        className={({ isActive }) =>
          `px-6 py-2 text-sm font-semibold transition duration-200 ${
            isActive
              ? "bg-[#20734C] text-gray-500"
              : "text-[#20734C] hover:bg-[#20734C] text-white"
          }`
        }
      >
        Office
      </NavLink>

      <NavLink
        to="home"
        className={({ isActive }) =>
          `px-6 py-2 text-sm font-semibold transition duration-200 ${
            isActive
              ? "bg-[#20734C] text-white"
              : "text-[#20734C] hover:bg-[#d3eadf]"
          }`
        }
      >
        Home
      </NavLink>
    </nav>
  );
}

export default Switch;
