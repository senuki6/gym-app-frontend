import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Replace this with real authentication logic
    if (email && password) {
      console.log("Email:", email);
      console.log("Password:", password);

      // ✅ Navigate to dashboard after login
      navigate("/dashboard");
    } else {
      alert("Please enter both email and password!");
    }
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

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white bg-opacity-90 backdrop-blur-lg border-2 border-blue-600 rounded-2xl shadow-lg p-8 mx-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Supreme Fitness Login
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
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

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {/* Forgot Password Link */}
            <div className="text-right mt-2">
              <Link
                to="/forgot-password"
                className="text-blue-500 text-sm hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Log In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-700">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;