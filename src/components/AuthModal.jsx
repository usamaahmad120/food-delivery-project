import React, { useContext, useEffect } from "react";
import { dataContext } from "../usecontext/UseContext";
import Login from "./Login";
import Register from "./Register";

function AuthModal() {
  const { showAuthForm, setShowAuthForm, authFormType } =
    useContext(dataContext);

  // ✅ Scroll hone pe modal close
  useEffect(() => {
    if (!showAuthForm) return; // sirf tab suno jab modal open ho

    const handleScroll = () => {
      setShowAuthForm(false); // modal close kar do
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAuthForm, setShowAuthForm]);

  // agar modal nahi khula to kuch mat dikhao
  if (!showAuthForm) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-start pt-24 z-50">
      {/* Background overlay (click karne pe close) */}
      <div
        className="absolute inset-0 bg-black/30"
        onClick={() => setShowAuthForm(false)}
      />

      {/* Modal box */}
      <div className="relative z-10">
        {authFormType === "login" ? <Login /> : <Register />}
      </div>
    </div>
  );
}

export default AuthModal;
