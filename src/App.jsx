import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grade } from "./GradeInput/Grade";
import { Math } from "./GradeInput/Subject/Math";
import { Literature } from "./GradeInput/Subject/Literature";
import { CS } from "./GradeInput/Subject/CS";
import { Homepage } from "./GradeInput/Homepage";
import { Register } from "./GradeInput/Register";
import { Login } from "./GradeInput/Login";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen w-full items-center justify-center bg-[#e2efff]">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/grade" element={<Grade />} />
          <Route path="/grade/math" element={<Math />} />
          <Route path="/grade/literature" element={<Literature />} />
          <Route path="/grade/CS" element={<CS />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
