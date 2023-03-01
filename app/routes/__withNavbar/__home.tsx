import { Form, NavLink, Outlet, useLocation } from '@remix-run/react';

export default function HomeLayout() {
  const location = useLocation();

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
      <div className="mx-auto w-full max-w-md px-2 py-16">
        <Form className="flex items-center">
          <label
            htmlFor="simple-search"
            className="sr-only"
          >
            Search for {location.pathname.replace(/\W/g, '')}
          </label>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder={`Search for ${location.pathname.replace(/\W/g, '')}`}
              required
            />
          </div>
          <button
            type="submit"
            className="ml-2 rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </Form>
      </div>
      <Outlet />
    </div>
  );
}
