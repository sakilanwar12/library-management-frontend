import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <h1>My Site</h1>
      <Outlet />
    </div>
  );
}
