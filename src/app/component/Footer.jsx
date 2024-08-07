import Image from "next/image";
import logo from "../../../public/MooreNetworking_with.png";
import { useState } from "react";
import CalendlyEmbed from "./CalendlyEmbed";
// import Link from "next/link";
// import { FaFacebook } from "react-icons/fa";
// import { TiSocialInstagram } from "react-icons/ti";
// import { FaLinkedin } from "react-icons/fa";

export default function Footer({ setOpenContact }) {
  const [openCalendary, setOpenCalendary] = useState(false);
  return (
    <div
      className="bg-white border-t border-gray-200 pt-10
    pl-28 
    lg:pl-22"
    >
      <div
        className="max-w-7xl mx-auto 
      px-4 
      sm:px-6 
      lg:px-8"
      >
        {/* 3 Centered footer grid with 3 different text sizes and spacing (gaps) */}
        <div className="flex justify-center">
          <div
            className="grid gap-10 grid-cols-1 md:grid-cols-3
          md:text-sm
          md:gap-20
          lg:text-lg
          lg:gap-28
          xl:text-xl
          xl:gap-48"
          >
            <div>
              <Image
                src={logo}
                alt="boardgame friends logo"
                className="w-auto h-auto"
                priority
              />
              {/* <p className="text-gray-500">building business networks</p> */}
              <p className="mt-4 text-gray-900">01603 737 739</p>
              <p className="text-gray-900">contact@moorenetworking.co.uk</p>
              <p className="text-gray-500 mt-2">Company Number: 04426676</p>
            </div>
            <div>
              <p className="text-gray-900">
                Building 262B, Scottow Enterprise Park
                <br />
                Lamas Road, Badersfield
                <br />
                Scottow, NR10 5FB
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Building+262B%2C+Scottow+Enterprise+Park%2C+Lamas+Road%2C+Badersfield%2C+Scottow%2C+NR10+5FB"
                className="text-blue-500"
              >
                Find us on Google Maps
              </a>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#all" className="text-gray-900">
                    All Features
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-900">
                    FAQ
                  </a>
                </li>
                <li>
                  <div
                    className="hover:cursor-pointer"
                    href="#"
                    onClick={(e) => {
                      console.log(e);
                      setOpenCalendary((prev) => !prev); // Toggle the Calendly component
                    }}
                  >
                    Book a Demo
                  </div>
                </li>
                {openCalendary && <CalendlyEmbed setOpen={setOpenCalendary} />}
                <li>
                  <div
                    className="hover:cursor-pointer text-gray-900"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default link behavior
                      setOpenContact((prev) => !prev); // Toggle the contact form visibility
                    }}
                  >
                    Contact us
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-4/5 border-t border-gray-300 mx-auto my-4"></div>

        <div className="mt-0 flex justify-center items-center border-gray-200 pt-4">
          <p className="text-gray-500 text-sm">
            &copy; TrAC Limited © {new Date().getFullYear()}
          </p>
          {/* <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-500">Find us on:</p>
          </div>
          <Link href="/">
            <FaFacebook />
          </Link>
          <Link href="/">
            <TiSocialInstagram />
          </Link>
          <Link href="/">
            <FaLinkedin />
          </Link> */}
        </div>
      </div>
    </div>
  );
}
