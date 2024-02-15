import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grade } from "./GradeInput/Grade";
import { Math } from "./GradeInput/Subject/Math";
import { Literature } from "./GradeInput/Subject/Literature";
import { CS } from "./GradeInput/Subject/CS";
import { Homepage } from "./GradeInput/Homepage";
import { Register } from "./GradeInput/Register";
import { Login } from "./GradeInput/Login";
import { Profile } from "./GradeInput/Profile";
import axios from "axios";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen w-full items-center justify-center bg-[#e2efff]">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/grade"
            element={
              <PrivateRoute>
                <Grade />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/grade/math"
            element={
              <PrivateRoute>
                <Math />
              </PrivateRoute>
            }
          />
          <Route
            path="/grade/literature"
            element={
              <PrivateRoute>
                <Literature />
              </PrivateRoute>
            }
          />
          <Route
            path="/grade/CS"
            element={
              <PrivateRoute>
                <CS />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
