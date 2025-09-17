import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Member");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate(); // ✅ navigation hook

  const handleRegister = (e) => {
    e.preventDefault();

    // TODO: Replace this with real API registration logic
    if (fullName && email && password) {
      console.log("Full Name:", fullName);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Role:", role);
      console.log("Phone:", phone);

      // ✅ Redirect to Dashboard after successful signup
      navigate("/dashboard");
    } else {
      alert("Please fill in all required fields!");
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

      {/* Sign Up Card */}
      <div className="relative z-10 w-full max-w-md bg-white bg-opacity-90 backdrop-blur-lg border-2 border-blue-600 rounded-2xl shadow-lg p-8 mx-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Join Supreme Fitness
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

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
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="Member">Member</option>
              <option value="Trainer">Trainer</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone (Optional)
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
