"use client";

import Link from "next/link";

export default function CategoryCardSection() {
  return (
    <div className="mt-6">
      <h2 className="text-[18px] md:text-[20px] font-semibold text-[#121417] mb-4">
        Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-2">

        {/* Kitchenware */}
        <Link
          href="/shop/kitchenware"
          className="bg-[#F0F2F5] p-4 rounded-lg hover:bg-[#DDE0E4] cursor-pointer transition block"
        >
          <div className="flex flex-col items-center">
            <img src="/images/homecategory1.svg" className="w-16 h-16" alt="" />
            <p className="mt-3 text-[15px] font-medium text-[#121417]">Kitchenware</p>
          </div>
        </Link>

        {/* Bedding */}
        <Link
          href="/shop/bedding"
          className="bg-[#F0F2F5] p-4 rounded-lg hover:bg-[#DDE0E4] cursor-pointer transition block"
        >
          <div className="flex flex-col items-center">
            <img src="/images/homecategory2.svg" className="w-16 h-16" alt="" />
            <p className="mt-3 text-[15px] font-medium text-[#121417]">Bedding</p>
          </div>
        </Link>

        {/* Home Decor */}
        <Link
          href="/shop/home-decor"
          className="bg-[#F0F2F5] p-4 rounded-lg hover:bg-[#DDE0E4] cursor-pointer transition block"
        >
          <div className="flex flex-col items-center">
            <img src="/images/homecategory3.svg" className="w-16 h-16" alt="" />
            <p className="mt-3 text-[15px] font-medium text-[#121417]">Home Decor</p>
          </div>
        </Link>

        {/* Furniture */}
        <Link
          href="/shop/furniture"
          className="bg-[#F0F2F5] p-4 rounded-lg hover:bg-[#DDE0E4] cursor-pointer transition block"
        >
          <div className="flex flex-col items-center">
            <img src="/images/homecategory4.svg" className="w-16 h-16" alt="" />
            <p className="mt-3 text-[15px] font-medium text-[#121417]">Furniture</p>
          </div>
        </Link>

        {/* Lighting */}
        <Link
          href="/shop/lighting"
          className="bg-[#F0F2F5] p-4 rounded-lg hover:bg-[#DDE0E4] cursor-pointer transition block"
        >
          <div className="flex flex-col items-center">
            <img src="/images/homecategory5.svg" className="w-16 h-16" alt="" />
            <p className="mt-3 text-[15px] font-medium text-[#121417]">Lighting</p>
          </div>
        </Link>

      </div>
    </div>
  );
}
