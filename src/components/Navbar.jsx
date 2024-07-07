"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 px-56 h-28 py-1 fixed w-full z-50">
      <div className="flex justify-between items-center py-3 h-full">
        <Link className="h-full" href="/">
          <img className="max-h-full" src="/okt_logo_white.png" alt="logo" />
        </Link>
        <ul className="flex gap-10">
          <li className="font-medium text-lg relative group">
            <Link className="transition-colors duration-300" href="/">
              Accueil
            </Link>
            <span className="absolute w-full h-0.5 bg-black bottom-0 left-0 duration-300 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </li>
          <li className="font-medium text-lg relative group">
            <Link className="transition-colors duration-300" href="/about-us">
              A propos de nous
            </Link>
            <span className="absolute w-full h-0.5 bg-black bottom-0 left-0 duration-300 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </li>
          <li className="font-medium text-lg relative group">
            <div className="dropdown dropdown-end">
              <div
                className="transition-colors duration-300"
                tabIndex={0}
                role="button"
              >
                Nos Services
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
              >
                <li className="text-black">
                  <Link href="/all-in-cardboard">Tout en carton</Link>
                </li>
                <li className="text-black">
                  <Link href="/printing">Impression</Link>
                </li>
                <li className="text-black">
                  <Link href="/exhibition">Expositions</Link>
                </li>
                <li className="text-black">
                  <Link href="/web">Web</Link>
                </li>
              </ul>
            </div>
            <span className="absolute w-full h-0.5 bg-black bottom-0 left-0 duration-300 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </li>
          <li className="font-medium text-lg relative group">
            <Link
              className="transition-colors duration-300"
              href="/our-clients"
            >
              Nos Clients
            </Link>
            <span className="absolute w-full h-0.5 bg-black bottom-0 left-0 duration-300 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </li>
        </ul>
        <button className="btn m-0" type="button">
          <Link href="/contact-us">Contactez-Nous</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
