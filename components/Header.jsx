"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <div className="min-h-[65px] w-full border-b border-b-[#E5E8EB] flex justify-between fixed z-50 top-0 left-0 bg-white">

        {/* LEFT SECTION */}
        <div className="ml-10 flex md:px-4">
          {/* LOGO */}
          <div className="flex gap-4 items-center justify-center">
            <img src="/icons/logo.svg" className="w-4 h-4" alt="" />
            <h1 className="text-[18px] font-bold text-[#212B36]">ShopMart</h1>
          </div>

          {/* NAV LINKS */}
          <div className="ml-32 items-center hidden md:flex">
            <ul className="flex gap-9">
              {navItems.map((item) => {
                const isActive = pathname === item.link;
                return (
                  <Link
                    key={item.name}
                    href={item.link}
                    className={`text-[14px] font-medium transition 
                      ${
                        isActive
                          ? "text-[#121417]"
                          : "text-[#878787] hover:text-[#121417]"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="mr-10 flex items-center gap-8">

          {/* SEARCH BAR */}
          <div className="hidden md:flex max-w-40 max-h-10 bg-[#F0F2F5] gap-2 rounded-lg items-center px-4 py-2">
            <img className="h-6 w-6" src="/icons/search.svg" alt="" />
            <input
              placeholder="Search"
              className="bg-transparent border-0 outline-none w-full text-4 text-[#61758A]"
              type="text"
            />
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-2">

            {/* WISHLIST */}
            <Link href="/wishlist">
              <div
                className={`
                  w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200
                  ${
                    pathname === "/wishlist"
                      ? "bg-[#D2D2D2]"
                      : "bg-[#F0F2F5] hover:bg-[#D2D2D2]"
                  }
                `}
              >
                <img className="h-5 w-5" src="/icons/wishlist.svg" alt="" />
              </div>
            </Link>

            {/* CART (YOU WROTE WRONG LINK — FIXED IT) */}
            <Link href="/cart">
              <div
                className={`
                  w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200
                  ${
                    pathname === "/cart"
                      ? "bg-[#D2D2D2]"
                      : "bg-[#F0F2F5] hover:bg-[#D2D2D2]"
                  }
                `}
              >
                <img className="h-5 w-5" src="/icons/cart.svg" alt="" />
              </div>
            </Link>

           
            <div
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-[#F0F2F5]"
            >
              <img src="/icons/menu.svg" className="w-6 h-6" alt="menu" />
            </div>
          </div>

          
          <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
            <img src="/user.jpg" alt="" />
          </div>
        </div>
      </div>

      
      {open && (
        <div className="md:hidden absolute top-[65px] left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-6">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.link;
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className={`text-[16px] font-medium 
                    ${
                      isActive
                        ? "text-[#121417]"
                        : "text-[#878787] hover:text-[#121417]"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
