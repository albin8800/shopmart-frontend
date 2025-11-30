"use client";


export default function Breadcrumbs({ category }) {
  return (
    <div className="text-sm text-[#637381] flex items-center gap-2 mb-4">
      <a href="/" className="hover:underline">Home</a>
      <span>/</span>
      <a href="/shop" className="hover:underline">Shop</a>
      <span>/</span>
      <span className="text-[#212B36] font-medium capitalize">{category}</span>
    </div>
  );
}
