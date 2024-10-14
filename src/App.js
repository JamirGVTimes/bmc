import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./pages/AppLayout";
import HomeIndex from "./pages/home/HomeIndex";
import ServicesIndex from "./pages/services/ServicesIndex";
import DepartmentsIndex from "./pages/departments/DepartmentsIndex";
import ContactsIndex from "./pages/contacts/ContactsIndex";
import ProgrammesIndex from "./pages/programmes/ProgrammesIndex";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout screenWidth={screenWidth} />}>
          <Route path="/" element={<HomeIndex screenWidth={screenWidth} />} />
          <Route path="/departments" element={<DepartmentsIndex />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/contacts" element={<ContactsIndex />} />
          <Route path="/programmes" element={<ProgrammesIndex />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
