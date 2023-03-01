import { Outlet } from "@remix-run/react";

export default function HomeLayout() {
  return (
    <>
      <h1>Home layout</h1>
      <div>Tabs go here</div>
      <Outlet />
    </>
  );
}
