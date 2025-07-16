import React, { useState, useContext } from "react";
import { dataContext } from "../usecontext/UseContext";
import { toast } from "react-toastify";

function Register() {
  const { setShowAuthForm, setAuthFormType } = useContext(dataContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passError, setPassError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const handleNameChange = (e) => {
    const val = e.target.value;
    setName(val);
    setNameError(
      val.length > 0 && val.length < 3
        ? "Name must be at least 3 characters"
        : ""
    );
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, "");
    setPhone(val);
    setPhoneError(
      val.length > 0 && val.length !== 11 ? "Phone must be 11 digits" : ""
    );
  };

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    setPassError(
      val.length > 0 && val.length < 6
        ? "Password must be at least 6 chars"
        : ""
    );
  };

  const handleConfirmPass = (e) => {
    const val = e.target.value;
    setConfirmPass(val);
    setConfirmError(val !== password ? "Passwords do not match" : "");
  };

  const isFormValid =
    name.length >= 3 &&
    phone.length === 11 &&
    password.length >= 6 &&
    confirmPass === password &&
    !nameError &&
    !phoneError &&
    !passError &&
    !confirmError;

  const handleRegister = () => {
    if (!isFormValid) return;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // check if exists
    if (users.some((u) => u.phone === phone)) {
      toast.error("User already exists!");
      return;
    }

    // add user
    const newUser = { name, phone, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Registered successfully!");
    setShowAuthForm(false);
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
        Create Account
      </h2>

      {/* Name */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Full Name"
          className={`w-full p-2 border-b-2 outline-none ${
            nameError
              ? "border-red-400 focus:border-red-500"
              : "border-gray-300 focus:border-orange-500"
          }`}
          value={name}
          onChange={handleNameChange}
        />
        {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
      </div>

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
        {phoneError && (
          <p className="text-red-500 text-sm mt-1">{phoneError}</p>
        )}
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

      {/* Confirm Password */}
      <div className="mb-4">
        <input
          type="password"
          placeholder="Confirm Password"
          className={`w-full p-2 border-b-2 outline-none ${
            confirmError
              ? "border-red-400 focus:border-red-500"
              : "border-gray-300 focus:border-orange-500"
          }`}
          value={confirmPass}
          onChange={handleConfirmPass}
        />
        {confirmError && (
          <p className="text-red-500 text-sm mt-1">{confirmError}</p>
        )}
      </div>

      <button
        className={`w-full py-2 rounded mt-2 ${
          isFormValid
            ? "bg-orange-500 hover:bg-orange-600 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        onClick={handleRegister}
        disabled={!isFormValid}
      >
        Register
      </button>

      <p className="text-sm text-center mt-3 text-gray-600">
        Already have an account?{" "}
        <span
          className="text-orange-500 font-semibold cursor-pointer hover:underline"
          onClick={() => setAuthFormType("login")}
        >
          Login
        </span>
      </p>
    </div>
  );
}

export default Register;
