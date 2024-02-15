import React from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  return (
    <div className="flex w-[50rem] flex-col items-center justify-center rounded-xl bg-white p-16">
      <h1 className="my-6 font-sans text-4xl font-bold">Register</h1>
      <div className="flex w-full items-center justify-center font-sans font-medium">
        <form action="http://localhost:6001/register" method="POST">
          <div className="forms grid w-full grid-cols-3">
            <label className="flex items-center" htmlFor="username">
              Username
            </label>
            <input
              className="col-span-2 rounded-lg border-2 border-gray-200 pl-2"
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="forms mt-4 grid w-full grid-cols-3">
            <label className="flex items-center" htmlFor="password">
              Password
            </label>
            <input
              className="col-span-2 rounded-lg border-2 border-gray-200 pl-2"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-[#2d9cdb] py-4 font-semibold text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
