import { Outlet } from "react-router-dom";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";

const SiteLayout = () => {
  return (
    <main>
      <div className="">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};

export default SiteLayout;
