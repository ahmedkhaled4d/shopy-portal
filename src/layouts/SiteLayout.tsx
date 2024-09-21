import { Outlet } from "react-router-dom";
import Header from "../components/site/Header";
import BasicFooter from "../components/site/Footer";

const SiteLayout = () => {
  return (
    <main>
      <div className="">
        <Header />
        <Outlet />
        <BasicFooter />
      </div>
    </main>
  );
};

export default SiteLayout;
