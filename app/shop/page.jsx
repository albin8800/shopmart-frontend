"use client";

import CategoryCardSection from "@/components/shop/CategoryCardSection";

export default function ShopPage() {
  return (
    <div className="mx-5 md:mx-20 lg:mx-40 mt-[110px] pb-20">
      <h1 className="text-[24px] md:text-[28px] font-bold text-[#121417]">
        Shop All Products
      </h1>

      <p className="text-[#637381] text-[14px] mt-2 mb-8">
        Choose a category to explore products.
      </p>

      <CategoryCardSection />
    </div>
  );
}
