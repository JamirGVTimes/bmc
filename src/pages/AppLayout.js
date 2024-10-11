import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Layout } from "antd";

export default function AppLayout() {
  return (
    <>
      <Header />
      <div style={{ minHeight: "90vh", background: "#fff" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
