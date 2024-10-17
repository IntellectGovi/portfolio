import Link from "next/link";
import Image from "next/image";
import "../app/globals.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link href="/">
          <img src="/govind.png" className="nav-logo" />
        </Link>
      </div>

      <ul className="space-y-4 items">
        <li className="relative group cursor-pointer">
          <span className="relative z-10">HOME</span>
          <span className="absolute left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        </li>
        <li className="relative group cursor-pointer">
          <span className="relative z-10">ABOUT</span>
          <span className="absolute left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        </li>
        <li className="relative group cursor-pointer">
          <span className="relative z-10">PROJECTS</span>
          <span className="absolute left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        </li>
        <li className="relative group cursor-pointer">
          <span className="relative z-10">CONTACT</span>
          <span className="absolute left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        </li>
      </ul>
    </div>
  );
};
