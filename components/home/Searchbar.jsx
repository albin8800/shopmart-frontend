"use client";

export default function Searchbar() {
    return (
      <div className="min-w-40 max-h-10 bg-[#F0F2F5] gap-2 rounded-lg flex items-center px-4 py-2 mt-[85px] mx-5 md:mx-20 lg:mx-40 ">
        <img className="h-6 w-6 " src="/icons/search.svg" alt="" />
        <input
          placeholder="Search for Products"
          className="bg-transparent border-0 outline-none w-full text-4 text-[#61758A]"
          type="text"
        />
      </div>
    );
}