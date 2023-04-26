import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "../App.css";

const MainLayout = () => {
  return (
    <article>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </article>
  );
};
export default MainLayout;
