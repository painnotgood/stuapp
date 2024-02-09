import React from "react";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="my-6 text-4xl font-bold">Hello</h1>
      <div className="flex w-full items-center justify-center">
        <button
          onClick={() => navigate("/register")}
          className="mr-12 w-24 rounded-xl border border-blue-700 bg-blue-500 p-3 text-white"
        >
          Register
        </button>
        <button
          onClick={() => navigate("/login")}
          className="w-24 rounded-xl border border-blue-700 bg-blue-500 p-3 text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
};
