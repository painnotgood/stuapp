import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";

interface SubjectStudied {
  subject: string;
  icon: ReactNode;
  bgColor: string;
}

export const Subject: React.FC<SubjectStudied> = ({
  subject,
  icon,
  bgColor,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (subject === "Math") {
      navigate("/grade/math");
    } else if (subject === "Literature") {
      navigate("/grade/literature");
    } else if (subject === "CS") {
      navigate("/grade/CS");
    }
  };
  return (
    <div
      onClick={handleClick}
      className={
        bgColor +
        " flex aspect-[4/5] cursor-pointer flex-col items-center rounded-lg p-4 hover:shadow-lg"
      }
    >
      <div className="flex h-1/3 w-full items-center justify-center">
        <p className="text-medium font-sans font-bold">{subject}</p>
      </div>
      <div className="flex h-2/3 w-full">
        <h1 className="flex h-full w-full items-center justify-center font-sans text-5xl font-bold">
          10
        </h1>
      </div>
    </div>
  );
};
