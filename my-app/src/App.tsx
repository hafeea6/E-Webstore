import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./compoenents/Test";
import Home from "./compoenents/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/Hamza" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
