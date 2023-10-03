import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </>
  );
}

export default AppLayout;
