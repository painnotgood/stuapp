import React from "react";

interface Scored {
  type: string;
  grade: string;
}

export const Score: React.FC<Scored> = ({ type, grade }) => {
  var bgColor = "bg-blue-100";
  var borderColor = "border-blue-200";
  if (type === "HS2")
    (bgColor = "bg-green-100"), (borderColor = "border-green-200");
  if (type === "HS3")
    (bgColor = "bg-red-100"), (borderColor = "border-red-200");
  return (
    <div
      className={
        bgColor +
        " " +
        borderColor +
        " flex aspect-[4/5] flex-col items-center rounded-lg border-2"
      }
    >
      <div
        className={
          borderColor +
          " flex h-1/3 w-full items-center justify-center border-b-2 border-dashed"
        }
      >
        <p className="font-sans text-base font-medium">{type}</p>
      </div>
      <div className="flex h-2/3 w-full items-center justify-center">
        <p className="font-sans text-4xl font-bold">{grade}</p>
      </div>
    </div>
  );
};
