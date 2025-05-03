import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavbarPage() {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contsct",
    },
  ];

  return (
    <div
      style={{
        background:
          "linear-gradient(to right, #000000 0%, #272727 50%, #494949 100%)",
      }}
    >
      <div className="navbar bg-[252734] text-white md:px-12 px-4 py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow pl-4 pt-4"
            >
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={`${link.path}`}
                  className="mb-4 text-base "
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl text-gray-300 gap-0">
            Robiul<span className="text-gray-500">Hasan</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link, index) => (
              <Link
                key={index}
                href={`${link.path}`}
                className="mr-8 text-base "
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={"/login"} className="btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
