import { Link, usePage } from "@inertiajs/react";

function Navbar() {
  const { auth } = usePage().props;

  return (
    <nav className="navbar bg-white shadow-md px-6 py-3 dark:bg-gray-900">
      {/* Logo / Brand */}
      <div className="flex-1">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 dark:text-white hover:text-primary transition duration-300"
        >
          MashaStore
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Cart Icon */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item bg-red-500 text-white">
                8
              </span>
            </div>
          </div>
          {/* Cart Dropdown */}
          <div
            tabIndex={0}
            className="dropdown-content card card-compact bg-white dark:bg-gray-800 z-10 mt-3 w-60 shadow-lg rounded-lg p-4 transition-opacity duration-300"
          >
            <div className="text-lg font-semibold text-gray-800 dark:text-white">
              8 Items
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Subtotal: <span className="font-bold text-primary">$999</span>
            </div>
            <div className="mt-3">
              <button className="btn btn-primary btn-block">View Cart</button>
            </div>
          </div>
        </div>

        {/* Authenticated User Dropdown */}
        {auth.user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-primary transition duration-300"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu menu-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-md shadow-lg z-10 mt-3 w-52 p-2"
            >
              <li>
                <Link
                  href={route("profile.edit")}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-3 py-2"
                >
                  Profile
                </Link>
              </li>
              <li>
                <a className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-3 py-2">
                  Settings
                </a>
              </li>
              <li>
                <Link
                  method="post"
                  href={route("logout")}
                  className="hover:bg-red-100 dark:hover:bg-red-700 rounded-md px-3 py-2 text-red-600 dark:text-red-400"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          // Guest Links
          <div className="flex gap-3">
            <Link
              href={route("login")}
              className="btn border border-primary text-primary hover:bg-primary hover:text-white transition duration-300"
            >
              Login
            </Link>
            <Link href={route("register")} className="btn btn-primary">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
