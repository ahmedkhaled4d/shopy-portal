import { Outlet } from "react-router-dom";

const SiteLayout = () => {
  return (
    <main>
      <div className="">
        <Outlet />
      </div>
    </main>
  );
};

export default SiteLayout;
