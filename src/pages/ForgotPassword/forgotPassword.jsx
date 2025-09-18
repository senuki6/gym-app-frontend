import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("OTP:", otp);
    console.log("New Password:", newPassword);
    // Add your reset password logic here
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/gps-cs-s/AC9h4nongtlDpDXKE02nBCiq6gfUGQUGPIOmMHVfOFKcUqH5TCLoAUi7qlUAHBWFB_83VGAa4iLo_vynaX3DnNqs_6Lkb42iwnq977Qa9ACMTv-pLe3dC0b1jUDbpUTcmxphBacs9u5t6w=s680-w680-h510-rw')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-white bg-opacity-90 backdrop-blur-lg border-2 border-blue-600 rounded-2xl shadow-lg p-8 mx-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Reset Your Password
        </h2>

        <form onSubmit={handleReset} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Enter your email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* OTP */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Enter OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Enter new password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Reset Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Reset Password
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-700">
          Remember your password?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;