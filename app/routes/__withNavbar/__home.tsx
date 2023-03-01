import { NavLink, Outlet } from '@remix-run/react';

export default function HomeLayout() {
  return (
    <div className="flex-1 p-6">
      <div className="mx-auto w-full max-w-xs px-2 py-16">
        <ul className="flex  justify-center space-x-1 rounded-xl bg-blue-900/20 p-1 text-center text-sm font-medium text-gray-500">
          <li className="mr-0.25 w-full">
            <NavLink
              to="/decks"
              className={({ isActive }) =>
                `inline-block w-full rounded-lg px-4 py-3 ${
                  isActive
                    ? 'active bg-blue-600 text-white'
                    : 'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'
                }`
              }
              aria-current="page"
            >
              All decks
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/cards"
              className={({ isActive }) =>
                `inline-block w-full rounded-lg px-4 py-3 ${
                  isActive
                    ? 'active bg-blue-600 text-white'
                    : 'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'
                }`
              }
            >
              All cards
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
