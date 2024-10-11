import { Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./pages/AppLayout";
import HomeIndex from "./pages/home/HomeIndex";
import ServicesIndex from "./pages/services/ServicesIndex";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<HomeIndex />} />
          <Route path="/services" element={<ServicesIndex />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
