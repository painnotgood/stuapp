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
        " flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg p-4 hover:shadow-lg"
      }
    >
      {icon}
      <p className="font-sans text-base font-medium">{subject}</p>
    </div>
  );
};
