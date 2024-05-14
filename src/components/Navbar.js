import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    let Links = [
      { name: "HOME", link: "/" },
      { name: "ABOUT", link: "/about" },
      { name: "PRODUCTS", link: "/products" },
      { name: "CONTACT", link: "/contact" },
    ];
   let [open, setOpen] = useState(false);

  return (
    <div className=" w-full sticky top-0 left-0 z-50 bg-white">
      <nav className="md:flex items-center justify-evenly bg-transparent md:px-10 py-4">
        <div className="ml-4 font-bold text-xl cursor-pointer flex items-center text-black">
          <a href="/" className="custom_text custom_text_main text-shadow-lg ">
            RAPTI FEED{" "}
          </a>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-black"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 bg-white  transition-all duration-500 ease-in ${
            open ? "top-15 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-black hover:text-gray-400 duration-500 cursor-pointer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
