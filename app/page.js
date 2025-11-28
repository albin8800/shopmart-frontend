"use client";

import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import PopularCategories from "@/components/home/PopularCategories";
import Searchbar from "@/components/home/Searchbar";

export default function Home() {
  return (
    <div>
      <Searchbar />
      <FeaturedProducts/>
      <PopularCategories />
      <Footer />
    </div>
  );
}