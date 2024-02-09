import React from "react";
import { useNavigate } from "react-router-dom";
import { Score } from "../Score";

export const CS = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="w-[50rem] rounded-lg bg-white p-16 shadow-xl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="flex text-4xl font-bold">Computer Science</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-12 w-12 cursor-pointer"
          onClick={handleHomeClick}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </div>
      <div className="flex w-full">
        <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-4">
          <Score type="HS1" grade="10" />
          <Score type="HS1" grade="10" />
          <Score type="HS1" grade="10" />
          <Score type="HS1" grade="10" />
          <Score type="HS1" grade="10" />
          <Score type="HS1" grade="10" />
          <Score type="HS2" grade="10" />
          <Score type="HS3" grade="10" />
        </div>
      </div>
      <form>
        <div className="mb-8 mt-8">
          <label htmlFor="math" className="mb-2 block text-lg font-semibold">
            Grade
          </label>
          <input
            type="number"
            id="math"
            name="math"
            className="w-full rounded-lg border-2 border-gray-200 p-3"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="type" className="mb-2 block text-lg font-semibold">
            Type
          </label>
          <select
            id="type"
            className="w-full rounded-lg border-2 border-gray-200 p-3"
          >
            <option value="HS1">Hệ số 1</option>
            <option value="HS2">Hệ số 2</option>
            <option value="HS3">Hệ số 3</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-[#2d9cdb] py-4 font-semibold text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
