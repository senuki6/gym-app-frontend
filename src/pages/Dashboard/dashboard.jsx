import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WarningIcon from "@mui/icons-material/Warning";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MenuIcon from "@mui/icons-material/Menu";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top bar */}
      <div className="w-full bg-slate-900 text-white flex p-3 justify-between items-center">
        <MenuIcon sx={{ cursor: "pointer" }} />
        <img
          className="w-8 h-8 rounded-full border-2"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
          alt="Profile"
        />
      </div>

      {/* Welcome message */}
      <div className="p-5 text-lg font-light text-gray-800">
        Hi, welcome to our Gym Management System. Feel free to ask any queries.
      </div>

      {/* Dashboard cards */}
      <div className="mt-5 w-full grid gap-5 grid-cols-1 md:grid-cols-3 pb-5 px-5">
        {/* Card Template */}
        <div className="bg-white rounded-lg shadow h-32 flex flex-col transition-all duration-300 hover:bg-black hover:text-white overflow-hidden">
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="flex-1 flex flex-col items-center justify-center space-y-2">
            <PeopleAltIcon sx={{ color: "green", fontSize: "50px" }} />
            <p className="text-xl font-mono font-semibold">Joined Members</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow h-32 flex flex-col transition-all duration-300 hover:bg-black hover:text-white overflow-hidden">
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="flex-1 flex flex-col items-center justify-center space-y-2">
            <TrendingUpIcon sx={{ color: "purple", fontSize: "50px" }} />
            <p className="text-xl font-mono font-semibold">Monthly Joined</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow h-32 flex flex-col transition-all duration-300 hover:bg-black hover:text-white overflow-hidden">
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="flex-1 flex flex-col items-center justify-center space-y-2">
            <AccessTimeIcon sx={{ color: "red", fontSize: "50px" }} />
            <p className="text-xl font-mono font-semibold">Expiring within 3 days</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow h-32 flex flex-col transition-all duration-300 hover:bg-black hover:text-white overflow-hidden">
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="flex-1 flex flex-col items-center justify-center space-y-2">
            <EventBusyIcon sx={{ color: "blue", fontSize: "50px" }} />
            <p className="text-xl font-mono font-semibold">Expiring within 4-7 days</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow h-32 flex flex-col transition-all duration-300 hover:bg-black hover:text-white overflow-hidden">
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="flex-1 flex flex-col items-center justify-center space-y-2">
            <WarningIcon sx={{ color: "red", fontSize: "50px" }} />
            <p className="text-xl font-mono font-semibold">Expired</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow h-32 flex flex-col transition-all duration-300 hover:bg-black hover:text-white overflow-hidden">
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="flex-1 flex flex-col items-center justify-center space-y-2">
            <PeopleAltIcon sx={{ color: "orange", fontSize: "50px" }} />
            <p className="text-xl font-mono font-semibold">Inactive Members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
