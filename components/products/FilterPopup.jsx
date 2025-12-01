"use client";

import { useState } from "react";

export default function FilterPopup({ name, filters, onClose }) {
  if (!name) return null;

  const {
    sizes = [],
    colors = [],
    brands = [],
    minPrice = 0,
    maxPrice = 0,
  } = filters || {};

  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 z-50">

        <h2 className="text-[18px] font-semibold mb-4">{name}</h2>

        {name === "Size" && (
          <div className="flex flex-wrap gap-2">
            {sizes.length === 0 ? (
              <p className="text-[#637381]">No sizes available.</p>
            ) : (
              sizes.map((s) => (
                <div onClick={() => setSelectedSize((s))} key={s} className="px-4 py-2 border rounded-lg">
                  {s}
                </div>
              ))
            )}
          </div>
        )}

        {name === "Color" && (
          <div className="flex flex-wrap gap-2">
            {colors.map((c) => (
              <div key={c} className="px-4 py-2 border rounded-lg">
                {c}
              </div>
            ))}
          </div>
        )}

        {name === "Brand" && (
          <div className="flex flex-col gap-2">
            {brands.length === 0 ? (
              <p className="text-[#637381]">No brands available.</p>
            ) : (
              brands.map((b) => (
                <div key={b} className="text-[14px]">
                  {b}
                </div>
              ))
            )}
          </div>
        )}

        {name === "Price" && (
          <p className="text-[14px] mt-3">
            ₹{minPrice} - ₹{maxPrice}
          </p>
        )}

      </div>
    </>
  );
}
