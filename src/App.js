import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./components/MainPage/Home";
import { useEffect } from "react";
import Departments from "./components/Departments/Departments";
import DceDept from "./components/Departments/DceDept";
import AutoDept from "./components/Departments/AutoDept";
import CseDept from "./components/Departments/CseDept";
import EceDept from "./components/Departments/EceDept";
import EeeDept from "./components/Departments/EeeDept";
import MechDept from "./components/Departments/MechDept";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Achievements from "./components/Achievements/Achievements";
import Facilities from "./components/Facility/Facilities";
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="departments">
          <Route index element={<Departments />} />
          <Route path="dce" element={<DceDept />} />
          <Route path="auto" element={<AutoDept />} />
          <Route path="cse" element={<CseDept />} />
          <Route path="ece" element={<EceDept />} />
          <Route path="eee" element={<EeeDept />} />
          <Route path="mech" element={<MechDept />} />
        </Route>
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="facility" element={<Facilities />} />
      </Route>
    </Routes>
  );
}

export default App;
