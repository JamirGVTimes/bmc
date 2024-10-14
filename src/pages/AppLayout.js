import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function AppLayout({ screenWidth }) {
  return (
    <>
      <Header screenWidth={screenWidth} />
      <div style={{ minHeight: "90vh", background: "#fff" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
