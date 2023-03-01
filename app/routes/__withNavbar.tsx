import { Outlet } from '@remix-run/react';
import Navbar from '~/components/_nav/Navbar.jsx';
import { useUser } from '~/utils/utils';

export default function HomeLayout() {
  const user = useUser();

  return (
    <div className="flex h-full min-h-screen flex-col">
      <Navbar user={user} />

      <main className="flex h-full bg-white">
        <Outlet />
      </main>
    </div>
  );
}
