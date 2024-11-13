import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Toggle between Sign Up and Login
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({ name: "", email: "", password: "" });
    setError("");
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp && !formData.name) return setError("Full name is required.");
    if (!formData.email) return setError("Email is required.");
    if (!formData.password) return setError("Password is required.");

    // Reset form after successful submit
    setFormData({ name: "", email: "", password: "" });
    setError("");
    alert(isSignUp ? "Sign Up Successful!" : "Login Successful!");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>
        <div className="w-12 h-1 bg-primary mb-8"></div>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-[50px] px-4 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-black dark:text-white focus:outline-none"
              />
            </div>
          )}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-[50px] px-4 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-black dark:text-white focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-[50px] px-4 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-black dark:text-white focus:outline-none"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-3 rounded-md cursor-pointer hover:bg-yellow-600 transition"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              onClick={toggleForm}
              className="text-primary cursor-pointer hover:underline"
            >
              {isSignUp ? "Login" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
