import { Outlet } from "react-router-dom";

const StoreLayout = () => {
  return (
    <main>
      <div className="">
        <Outlet />
      </div>
    </main>
  );
};

export default StoreLayout;
