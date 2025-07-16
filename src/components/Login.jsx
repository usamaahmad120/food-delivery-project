import React, { useState, useContext } from "react";
import { dataContext } from "../usecontext/UseContext";
import { toast } from "react-toastify";

function Login() {
  const { setShowAuthForm, setAuthFormType } = useContext(dataContext);

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passError, setPassError] = useState("");

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, "");
    setPhone(val);
    setPhoneError(
      val.length > 0 && val.length !== 11
        ? "Phone number must be exactly 11 digits"
        : ""
    );
  };

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    setPassError(
      val.length > 0 && val.length < 6
        ? "Password must be at least 6 characters"
        : ""
    );
  };

  const isFormValid =
    phone.length === 11 && password.length >= 6 && !phoneError && !passError;

  const handleLogin = () => {
    if (!isFormValid) return;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) => u.phone === phone && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("loggedUser", JSON.stringify(foundUser));
      toast.success(`Welcome ${foundUser.name}`);
      setShowAuthForm(false);

      // trigger navbar update
      window.dispatchEvent(new Event("storage"));
    } else {
      toast.error("Invalid phone or password!");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl w-[320px] relative">
      <button
        className="absolute top-2 right-3 text-gray-500 hover:text-red-500"
        onClick={() => setShowAuthForm(false)}
      >
        ✖
      </button>

      <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">
        Welcome Back!
      </h2>

      {/* Phone */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Phone Number"
          maxLength="11"
          className={`w-full p-2 border-b-2 outline-none ${
            phoneError
              ? "border-red-400 focus:border-red-500"
              : "border-gray-300 focus:border-orange-500"
          }`}
          value={phone}
          onChange={handlePhoneChange}
        />
        {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
      </div>

      {/* Password */}
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          className={`w-full p-2 border-b-2 outline-none ${
            passError
              ? "border-red-400 focus:border-red-500"
              : "border-gray-300 focus:border-orange-500"
          }`}
          value={password}
          onChange={handlePasswordChange}
        />
        {passError && <p className="text-red-500 text-sm mt-1">{passError}</p>}
      </div>

      <button
        className={`w-full py-2 rounded mt-2 ${
          isFormValid
            ? "bg-orange-500 hover:bg-orange-600 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={!isFormValid}
        onClick={handleLogin}
      >
        Login
      </button>

      <p className="text-sm text-center mt-3 text-gray-600">
        Don’t have an account?{" "}
        <span
          className="text-orange-500 font-semibold cursor-pointer hover:underline"
          onClick={() => setAuthFormType("register")}
        >
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;
