import type { User } from '@prisma/client';
import { Outlet, useRouteLoaderData } from '@remix-run/react';
import Navbar from '~/components/_nav/Navbar';

type LoaderData = {
  user: User;
};

export default function WithNavbarLayout() {
  const data = useRouteLoaderData('root') as LoaderData;

  return (
    <div className="flex h-full min-h-screen flex-col">
      <Navbar user={data.user} />

      <main className="flex h-full bg-white">
        <Outlet />
      </main>
    </div>
  );
}
