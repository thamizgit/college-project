import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./components/MainPage/Home";
import { useEffect } from "react";
import Departments from "./components/Departments/Departments";
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="departments" element={<Departments />} />
      </Route>
    </Routes>
  );
}

export default App;
