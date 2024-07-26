import React, { useEffect, useState } from "react";
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import service from "../../assets/service.webp";
import bitfusion from "../../assets/bitfusionlogo.png";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const [showMenu, setShowMenu] = useState(false);

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[99] bg-navbar text-white border-b-[1px] border-primary/50">
        <nav className="container flex items-center justify-between h-[70px] py-2 px-2">
          {/* Logo section */}
          <div className="text-2xl md:text-3xl text-white">
            <a href="">
              Bit
              <span className="inline-block font-bold text-primary">
                Fusion
              </span>
            </a>
          </div>
          {/* Desktop section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px]">
                  Home{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                {/* Dropdown section */}
                <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md p-2 text-black rounded-md group-hover:block">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-violet-200">Service</li>
                    <li className="p-2 hover:bg-violet-200">About</li>
                    <li className="p-2 hover:bg-violet-200">Privacy Policy</li>
                  </ul>
                </div>
              </li>
              <li className="group  cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px]">
                  Services{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                {/* dropdown full width section */}
                <div className="absolute left-0 z-[99999] hidden w-full rounded-b-3xl bg-white p-2 text-black shadow-md group-hover:block">
                  <div className="grid grid-cols-3 gap-5">
                    <div className="overflow-hidden">
                      <img
                        // src="https://picsum.photos/200"
                        className="max-h-[300px] w-full object-fill rounded-b-3xl transition duration-700 hover:skew-x-2 hover:scale-110"
                        src={service}
                        alt="not found"
                      />
                    </div>
                    <div className="col-span-2">
                      <h1 className="text-xl font-semibold pb-3">
                        Best Services
                      </h1>
                      <p className="text-sm text-slate-600">
                        Customer satisfaction is our top priority, and we are
                        dedicated to delivering exceptional service and tailored
                        solutions that exceed client expectations.
                        <div className="grid grid-cols-3 mt-4">
                          <div>
                            <h1 className="pb-1 text-xl font-semibold">
                              Development
                            </h1>
                            <ul className="space-y-2">
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Web Development
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Android App Development
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Ios Development
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h1 className="pb-1 text-xl font-semibold">
                              Other
                            </h1>
                            <ul className="space-y-2">
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Cloud Solutions
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                UI/UX Design
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Consulting and Strategy
                              </li>
                            </ul>
                          </div>
                          <div>
                            <img
                              className="mx-auto h-[250px] w-full object-fill rounded-xl transition duration-700 hover:skew-x-2 hover:scale-110"
                              // src="https://picsum.photos/180"
                              src={bitfusion}
                              alt="not found"
                            />
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>Contact us</li>
              <li>
                <div className="flex items-center gap-4">
                  <div>
                    <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white bg-primary hover:bg-primary/90" />
                  </div>
                  <div>
                    <p>Call us on</p>
                    <p>
                      <a href="tel:+91123456789">+91 9348617318</a>
                    </p>
                  </div>
                </div>
              </li>
              {/* Light and Dark mode switcher */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>
          {/* Mobile header section */}
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                className="text-2xl"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidMoon
                className="text-2xl"
                onClick={() => setTheme("dark")}
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                className="cursor-pointer transition-all"
                size={30}
                onClick={toggleMenu}
              />
            ) : (
              <HiMenuAlt3
                className="cursor-pointer transition-all"
                size={30}
                onClick={toggleMenu}
              />
            )}
          </div>
        </nav>
      </header>
      {/* Mobile menu section */}
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
