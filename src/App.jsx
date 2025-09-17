import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import SignUp from "./pages/SignUp/signUp";
import ForgotPassword from "./pages/ForgotPassword/forgotPassword";
import Dashboard from "./pages/Dashboard/dashboard";
import MainLayout from "./pages/MainLayout"; // Layout with sidebar

function App() {
  return (
    <Routes>
      {/* Pages WITH sidebar */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />

      {/* Pages WITHOUT sidebar */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
