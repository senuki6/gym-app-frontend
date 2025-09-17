import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white flex flex-col fixed">
      {/* Logo & User */}
      <div className="p-6 flex items-center space-x-3 border-b border-gray-700">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
          alt="Gym"
          className="w-10 h-10"
        />
        <span className="text-xl font-bold">Power Zone</span>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <Link
          to="/"
          className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg transition"
        >
          <HomeIcon />
          <span>Home</span>
        </Link>

        <Link
          to="/dashboard"
          className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg transition"
        >
          <DashboardIcon />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/members"
          className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg transition"
        >
          <PeopleIcon />
          <span>Members</span>
        </Link>

        <Link
          to="/signup"
          className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg transition"
        >
          <PersonAddIcon />
          <span>Signup</span>
        </Link>

        <Link
          to="/login"
          className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg transition"
        >
          <LogoutIcon />
          <span>Logout</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
