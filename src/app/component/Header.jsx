"use client";
import trac from "../../../public/TrAC.png";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
// import UnderlineLink from "@/app/component/UnderlineLink";
import { RxMagnifyingGlass } from "react-icons/rx";
import Image from "next/image";

export default function Header({ openContact, setOpenContact }) {
  const [scroll, setScroll] = useState(0);
  const [height, setHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  let timeoutId = null;

  const handleScroll = () => {
    // Function to handle scroll events
    setScroll(window.scrollY);
    // Update the scroll state with the current vertical scroll position
    setHeight(window.innerHeight);

    // Clear the previous timeout if there's any
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Show the navbar when scrolling
    setIsVisible(true);

    // Set a timeout to hide the navbar after 2 seconds of no scrolling
    timeoutId = setTimeout(() => {
      console.log(window.scrollY);
      if (window.scrollY != 0 || scroll != 0) {
        setIsVisible(false);
      }
    }, 2000);
  };
  // useEffect hook to set up the scroll event listener
  useEffect(() => {
    // Attach the handleScroll function to the window's scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    // Grid for desktop/table header - will not show on mobile devices < 640px
    <div
      className={`grid w-full h-[5vh] fixed top-2 pl-5 z-10 sm:visible invisible transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ gridTemplateColumns: ".5fr minmax(0, 1.5fr) 1fr" }}
    >
      <Link
        className={`self-center transition-all duration-500 ${
          scroll && "opacity-0"
        }`}
        href="/"
      >
        <Image src={trac} height={30} alt="companylogo TraC Recruit" />
      </Link>
      {/* <nav
        className={`flex justify-center items-center 
          text-xs 
          md:text-base 
          lg:text-2xl
          xl:text-2xl 
          gap-16
          ${scroll > height / 2 ? "text-text-yellow-500" : "text-black"}`}
      >
        <div className="flex gap-10">
          <UnderlineLink href="#all">For Apprentices</UnderlineLink>
          <UnderlineLink href="#faq">For Businesses</UnderlineLink>
          <UnderlineLink href="#something">For Partners</UnderlineLink>
        </div>
      </nav> */}
      <div className="grid grid-cols-[1fr_50px] justify-self-center w-fit rounded-full bg-[#EC8400] outline outline-[#fbbf24]">
        <input
          className="rounded-l-full w-[350px] bg-[#EC8400] focus:outline-none text-white placeholder:text-white pl-6"
          placeholder="Job title, Postcode, keywords"
        />
        <div className="flex justify-center items-center mr-2">
          <button className="w-fit h-fit rounded-full bg-white p-2">
            <RxMagnifyingGlass className="w-8 h-8 " />
          </button>
        </div>
      </div>
      <div className="flex gap-3 justify-end mr-3">
        <button className="w-fit h-fit justify-self-end self-center mr-5 px-4 py-2 sm:px-3 sm:py-1 bg-[#007EF2] font-semibold text-white rounded-full transition-transform duration-200 transform hover:scale-95 text-xs md:text-base xl:text-lg">
          Register
        </button>
        {/* Contact us CTA on top right in header */}
        <button
          onClick={() => {
            setOpenContact(!openContact);
          }}
          className="w-fit h-fit justify-self-end self-center mr-5 px-4 py-2 sm:px-3 sm:py-1 bg-[#EC8400] font-semibold text-white rounded-full transition-transform duration-200 transform hover:scale-95 text-xs md:text-base xl:text-lg"
        >
          Contact us
        </button>
      </div>
    </div>
  );
}
