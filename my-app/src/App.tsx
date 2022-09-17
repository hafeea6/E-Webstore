import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./compoenents/Home";
import { Login } from "./compoenents/Login";
import { Test } from "./compoenents/Test";
import { Movies } from "./compoenents/Movies";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
