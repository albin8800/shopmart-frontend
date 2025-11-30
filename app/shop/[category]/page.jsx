"use client";

import React, { useState, use } from "react";
import Breadcrumbs from "@/components/BreadCrumbs";
import CategorySectionSwitcher from "@/components/products/CategorySectionSwitcher";
import Filters from "@/components/products/Filters";
import FilterPopup from "@/components/products/FilterPopup";
import { products } from "@/data/product";
import ProductGrid from "@/components/products/ProductGrid";
import Footer from "@/components/Footer";

export default function CategoryPage({ params }) {
  
  const { category } = use(params);

  const sections = [
    "Latest Arrivals",
    "Popular Products",
    "Best Deals"
  ];

  const [selectedSection, setSelectedSection] = useState(sections[0]);

  const [ activeFilter, setActiveFilter ] = useState(null);

  const categoryProducts = products.filter(
    (p) => p.category === category
  );

  const sizes = [...new Set(categoryProducts.flatMap((p) => p.sizes))];
  const colors = [...new Set(categoryProducts.flatMap((p) => p.colors))];
  const brands = [...new Set(categoryProducts.map((p) => p.brand))];
  const prices = categoryProducts.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const filtersData = {
    sizes,
    colors,
    brands,
    minPrice,
    maxPrice
  };

  return (
    <div className="mx-5 md:mx-20 lg:mx-40 mt-[110px] pb-20">

      <Breadcrumbs category={category} />

      <h1 className="text-[24px] md:text-[28px] font-bold capitalize text-[#121417]">
        {category}
      </h1>

      <p className="text-[#637381] text-[14px] mt-2">
        Showing {selectedSection.toLowerCase()} products for {category}.
      </p>

      <CategorySectionSwitcher
        sections={sections}
        onChange={setSelectedSection}
      />

      <Filters onOpen={setActiveFilter} />

      <FilterPopup name={activeFilter} filters= {filtersData} onClose={() => setActiveFilter(null)} />

        <ProductGrid products={categoryProducts} />

        <Footer />
      
    </div>
  );
}
