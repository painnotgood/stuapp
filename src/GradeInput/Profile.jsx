import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/grade");
  };

  const [username, setUsername] = useState(null);
  const [math, setMath] = useState(null);
  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get("http://localhost:6001/username", {
          withCredentials: true,
        });
        setUsername(response.data.username);
        //setMath(response.data.math);
      } catch (error) {
        console.error("Failed to fetch username:", error);
      }
    };

    fetchUsername();
  }, []);
  useEffect(() => {
    const fetchMath = async () => {
      try {
        const response = await axios.get("http://localhost:6001/userMath", {
          withCredentials: true,
        });
        setMath(response.data.math);
      } catch (error) {
        console.error("Failed to fetch math:", error);
      }
    };

    fetchMath();
  }, []);
  return (
    <div className="w-[50rem] rounded-lg bg-white p-16 shadow-xl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="my-6 font-sans text-4xl font-bold">{username}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-12 w-12 cursor-pointer"
          onClick={handleHomeClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-5 md:grid-cols-4">
        <button
          onClick={() =>
            axios.get("http://localhost:6001/mathCheck", {
              withCredentials: true,
            })
          }
          className={`h-full w-full rounded-lg py-4 font-semibold text-white ${
            math === 1 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          Toán
        </button>
        <button
          onClick={() =>
            axios.get("http://localhost:6001/mathCheck", {
              withCredentials: true,
            })
          }
          className={`h-full w-full rounded-lg py-4 font-semibold text-white ${
            math === 1 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          Ngữ Văn
        </button>
        <button
          onClick={() =>
            axios.get("http://localhost:6001/mathCheck", {
              withCredentials: true,
            })
          }
          className={`h-full w-full rounded-lg py-4 font-semibold text-white ${
            math === 1 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          Ngoại ngữ 1
        </button>
        <button
          onClick={() =>
            axios.get("http://localhost:6001/mathCheck", {
              withCredentials: true,
            })
          }
          className={`h-full w-full rounded-lg py-4 font-semibold text-white ${
            math === 1 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          GDCD
        </button>
        <button
          onClick={() =>
            axios.get("http://localhost:6001/mathCheck", {
              withCredentials: true,
            })
          }
          className={`h-full w-full rounded-lg py-4 font-semibold text-white ${
            math === 1 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          KHTN
        </button>
        <button
          onClick={() =>
            axios.get("http://localhost:6001/mathCheck", {
              withCredentials: true,
            })
          }
          className={`h-full w-full rounded-lg py-4 font-semibold text-white ${
            math === 1 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          Lịch sử và Địa lí
        </button>
        <button
          onClick={() =>
            axios.get("http://localhost:6001/mathCheck", {
              withCredentials: true,
            })
          }
          className={`h-full w-full rounded-lg py-4 font-semibold text-white ${
            math === 1 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          Công nghệ
        </button>
        <button
          onClick={() =>
            axios.get("http://localhost:6001/mathCheck", {
              withCredentials: true,
            })
          }
          className={`h-full w-full rounded-lg py-4 font-semibold text-white ${
            math === 1 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          Tin học
        </button>
        <button
          onClick={() =>
            axios.get("http://localhost:6001/mathCheck", {
              withCredentials: true,
            })
          }
          className={`h-full w-full rounded-lg py-4 font-semibold text-white ${
            math === 1 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          Giáo dục Thể chất
        </button>
        <button
          onClick={() =>
            axios.get("http://localhost:6001/mathCheck", {
              withCredentials: true,
            })
          }
          className={`h-full w-full rounded-lg py-4 font-semibold text-white ${
            math === 1 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          Nghệ thuật
        </button>
        <button
          onClick={() =>
            axios.get("http://localhost:6001/mathCheck", {
              withCredentials: true,
            })
          }
          className={`h-full w-full rounded-lg py-4 font-semibold text-white ${
            math === 1 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          Giáo dục Quốc phòng và An ninh
        </button>
        <button
          onClick={() =>
            axios.get("http://localhost:6001/mathCheck", {
              withCredentials: true,
            })
          }
          className={`h-full w-full rounded-lg py-4 font-semibold text-white ${
            math === 1 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          Lịch sử
        </button>
        <button
          onClick={() =>
            axios.get("http://localhost:6001/mathCheck", {
              withCredentials: true,
            })
          }
          className={`h-full w-full rounded-lg py-4 font-semibold text-white ${
            math === 1 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          Địa lí
        </button>
        <button
          onClick={() =>
            axios.get("http://localhost:6001/mathCheck", {
              withCredentials: true,
            })
          }
          className={`h-full w-full rounded-lg py-4 font-semibold text-white ${
            math === 1 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          GDKT&PL
        </button>
        <button
          onClick={() =>
            axios.get("http://localhost:6001/mathCheck", {
              withCredentials: true,
            })
          }
          className={`h-full w-full rounded-lg py-4 font-semibold text-white ${
            math === 1 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          Vật lí
        </button>
        <button
          onClick={() =>
            axios.get("http://localhost:6001/mathCheck", {
              withCredentials: true,
            })
          }
          className={`h-full w-full rounded-lg py-4 font-semibold text-white ${
            math === 1 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          Hóa học
        </button>
        <button
          onClick={() =>
            axios.get("http://localhost:6001/mathCheck", {
              withCredentials: true,
            })
          }
          className={`h-full w-full rounded-lg py-4 font-semibold text-white ${
            math === 1 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          Sinh học
        </button>
      </div>
    </div>
  );
};
