"use client";

export default function Filters({ onOpen }) {
    return (
        <div className="flex flex-col gap-5 ">
            <h1 className="text-[18px] font-bold text-[#121417] mt-7 ">Filters</h1>
            <div className="flex gap-3 ">
                <button onClick={() => onOpen("Size")} className="text-[14px] font-medium px-4 py-1.5 bg-[#F0F2F5] rounded-lg">
                    Size
                </button>
                <button onClick={() => onOpen("Color")} className="text-[14px] font-medium px-4 py-1.5 bg-[#F0F2F5] rounded-lg">
                    Color
                </button>
                <button onClick={() => onOpen("Price")} className="text-[14px] font-medium px-4 py-1.5 bg-[#F0F2F5] rounded-lg">
                    Price
                </button>
                <button onClick={() => onOpen("Brand")} className="text-[14px] font-medium px-4 py-1.5 bg-[#F0F2F5] rounded-lg">
                    Brand
                </button>
            </div>
        </div>
    )
}