import React from "react";
import Image from "next/image";
import "../../app/globals.css";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="hero flex items-center justify-center">
      <div className="hero-left">
        <h1 className="text-[5rem] font-extrabold">
          Creative Designer <br></br>& Developer.
        </h1>
        <p className="text-[1rem]">
          Hi I'm Govind Upadhyay. A passionate Full stack developer based in
          India❤️
        </p>
        <Link href={"/link"}>
          <li className="relative group cursor-pointer work">
            <span className="relative z-10">SEE MY WORK</span>
            <span className="absolute left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </li>
        </Link>
      </div>
      <div className="hero-right">
        <img
          src="./images/greek.png"
          className="heroRight-img rounded-full"
        ></img>
      </div>
    </div>
  );
};

export default HeroSection;
