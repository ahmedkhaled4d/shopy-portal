import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        <Outlet />
      </div>
    </main>
  );
};

export default AdminLayout;
