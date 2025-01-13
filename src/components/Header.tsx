import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { toggleTab } from "../store/app/Cart";

const Header = () => {
  const disptach = useDispatch();
  const OpenTab = () => {
    disptach(toggleTab());
  };

  return (
    <header className="  w-[full] max-h-[84px]  h-[100%] absolute left-[162px] top-[40px] right-[162px] border-b-[1px] border-#F6F6F6">
      <div className="flex justify-between items-center w-[100%] h-[45px]  px-[12px] relative top-[20px]">
        <div className="flex items-center gap-[12px]">
          <div className="bg-[#0E1422] rounded-[100px] w-[40px] h-[40px] px-[7px] py-[6px] flex justify-center">
            <Link to="/">
              <img
                className="w-[16px] h-[26px] fill-white outline-none"
                src="/Images/logo.svg"
                alt="logo"
              />
            </Link>
          </div>
          <Link to="/">
            <h1 className="font-manrope font-[800] text-[20px] leading-[27.32px] tracking-[-3.5%] text-[#0E1422] outline-none">
              Ecommerce
            </h1>
          </Link>
        </div>
        <nav className="space-x-[32px] flex items-center">
          <Link
            className="font-inter font-[500] text-[14px] leading-[24.5px] text-[#717171] w-[40px] h-[25px] outline-none"
            to="/"
          >
            Home
          </Link>
          <div className="flex max-w-[106px] h-[25px] gap-[25px] items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-[#717171]">
                  Categories
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 w-5 text-gray-400"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <Link
                      to="/list"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      List
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Support
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      License
                    </Link>
                  </MenuItem>
                  <form action="#" method="POST">
                    <MenuItem>
                      <button
                        type="submit"
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        Sign out
                      </button>
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </Menu>
          </div>
          <Link
            className="font-inter font-[500] text-[14px] leading-[24.5px] text-[#717171] w-[40px] h-[25px] outline-none"
            to="/about"
          >
            About
          </Link>
          <Link
            className="font-inter font-[500] text-[14px] leading-[24.5px] text-[#717171] w-[40px] h-[25px] outline-none"
            to="/contact"
          >
            Contact
          </Link>
        </nav>
        <div className="w-[370px] h-[45px] gap-[32px] flex items-center">
          <div className="flex items-center w-[264px] h-[45px] rounded-[6px] border-[1px] px-[15px] py-[10px] gap-[8px] border-[#E6E7E8]">
            <img
              className="w-[24px] h-[24px] py-[1px] px-[2px] gap-[10px]"
              src="/Images/search.svg"
              alt="search-logo"
            />
            <input
              className="placeholder:text-[#878A92] placeholder:font-inter placeholder:font-[500] placeholder:text-[14px] placeholder:leading-[24.5px] outline-none "
              type="search"
              placeholder="Search products"
            />
          </div>
          <button onClick={OpenTab} className="relative">
            <img
              className="w-[18px] h-[18px] hover:cursor-pointer"
              src="/Images/cart.svg"
              alt="cart"
            />

          </button>
          <div className="flex max-w-[106px] h-[25px] gap-[25px] items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5  bg-white  py-2 text-sm font-semibold text-[#717171]">
                  <img
                    className="w-[18px] h-[18px] hover:cursor-pointer"
                    src="/Images/profile.svg"
                    alt="profile"
                  />
               
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <Link
                      to="/authantication"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Log In
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/authantication/sign-up"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Sign Up
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/authantication/forgot-password"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Forgot Password
                    </Link>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
