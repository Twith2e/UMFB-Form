import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-[#7d3330]">404</h1>
      <p className="text-2xl mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-lg mt-2 text-gray-600">
        It might have been moved or deleted.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2 bg-[#7d3330] text-white font-medium rounded hover:bg-[#904c49] transition"
      >
        Go Home
      </button>
    </div>
  );
}
