import React, { useState, useContext } from "react";
import { dataContext } from "../usecontext/UseContext";

function Login() {
  const { showLoginForm, setShowLoginForm } = useContext(dataContext);

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passError, setPassError] = useState("");

  if (!showLoginForm) return null;

  //  Validate phone on change
  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, ""); 
    setPhone(val);

    if (val.length > 0 && val.length !== 11) {
      setPhoneError("Phone number must be exactly 11 digits");
    } else {
      setPhoneError("");
    }
  };

  // Validate password on change
  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);

    if (val.length > 0 && val.length < 6) {
      setPassError(" Password must be at least 6 characters");
    } else {
      setPassError("");
    }
  };

  const isFormValid =
    phone.length === 11 && password.length >= 6 && !phoneError && !passError;

  const handleLogin = () => {
    if (!isFormValid) return;
    
    setShowLoginForm(false);
  };

  return (
    <div className="fixed top-20 right-30 z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-[320px] relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500"
          onClick={() => setShowLoginForm(false)}
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">
          Welcome Back!
        </h2>

        {/* Phone Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Phone Number"
            maxLength="11"
            className={`w-full p-2 border-b-2 outline-none transition-all ${
              phoneError
                ? "border-red-400 focus:border-red-500"
                : "border-gray-300 focus:border-orange-500"
            }`}
            value={phone}
            onChange={handlePhoneChange}
          />
          {phoneError && (
            <p className="text-red-500 text-sm mt-1">{phoneError}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className={`w-full p-2 border-b-2 outline-none transition-all ${
              passError
                ? "border-red-400 focus:border-red-500"
                : "border-gray-300 focus:border-orange-500"
            }`}
            value={password}
            onChange={handlePasswordChange}
          />
          {passError && (
            <p className="text-red-500 text-sm mt-1">{passError}</p>
          )}
        </div>

        {/* login button */}
        <button
          className={`w-full py-2 rounded mt-2 transition-all ${
            isFormValid
              ? "bg-orange-500 hover:bg-orange-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={handleLogin}
          disabled={!isFormValid}
        >
          Login
        </button>

        {/* Forgot Password */}
        <p className="text-sm text-center mt-3 text-blue-500 cursor-pointer hover:underline">
          Forgot Password?
        </p>

        {/* Register Link */}
        <p className="text-sm text-center mt-2 text-gray-600">
          Don’t have an account?{" "}
          <span className="text-orange-500 font-semibold cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
