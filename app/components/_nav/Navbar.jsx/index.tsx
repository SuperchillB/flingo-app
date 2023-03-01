import { Menu, Transition } from '@headlessui/react';
import type { User } from '@prisma/client';
import { Form, Link, NavLink } from '@remix-run/react';

export type NavbarProps = {
  user: User;
};

export default function Navbar({ user }: NavbarProps) {
  return (
    <header className="flex items-center justify-between bg-slate-800 p-4 text-white">
      <nav className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              <Link to="/decks">Flingo</Link>
            </h1>
          </div>
          <div className="flex items-center">
            <NavLink
              to="/cards/new"
              className="mr-3 flex p-4  text-blue-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              New Card
            </NavLink>
            <div className="relative">
              <Menu>
                <Menu.Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </Menu.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg outline-none">
                    <div className="px-4 py-3">
                      <p className="text-sm leading-5 text-gray-900">Signed in as</p>
                      <p className="truncate text-sm font-medium leading-5 text-gray-900">
                        {user.email}
                      </p>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={`${
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } flex w-full justify-between px-4 py-2 text-left text-sm leading-5`}
                          >
                            Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#support"
                            className={`${
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } flex w-full justify-between px-4 py-2 text-left text-sm leading-5`}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item
                        as="span"
                        disabled
                        className="flex w-full cursor-not-allowed justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700 opacity-50"
                      >
                        New feature (soon)
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#license"
                            className={`${
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } flex w-full justify-between px-4 py-2 text-left text-sm leading-5`}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                    </div>

                    <div className="py-1">
                      <Menu.Item>
                        <Form
                          action="/logout"
                          method="post"
                        >
                          <button
                            type="submit"
                            className="flex w-full justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700"
                          >
                            Sign out
                          </button>
                        </Form>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
