"use client";

import Breadcrumbs from "@/components/BreadCrumbs";

export default function CheckoutPage() {
  return (
    <div className="mx-5 md:mx-20 lg:mx-40 mt-[125px] pb-20">
      <h1 className="text-[24px] md:text-[28px] font-bold text-[#121417]">
        Checkout
      </h1>

      {/* Email */}
      <div className="mt-6 flex flex-col gap-2 w-full md:w-1/2">
        <label className="text-[16px] font-medium">Email</label>
        <input
          type="text"
          placeholder="Enter your Email"
          className="h-12 w-full p-4 rounded-lg border border-[#DBE0E5] outline-0"
        />
      </div>

      {/* First Name */}
      <div className="mt-6 flex flex-col gap-2 w-full md:w-1/2">
        <label className="text-[16px] font-medium">First name</label>
        <input
          type="text"
          placeholder="Enter your First name"
          className="h-12 w-full p-4 rounded-lg border border-[#DBE0E5] outline-0"
        />
      </div>

      {/* Last Name */}
      <div className="mt-6 flex flex-col gap-2 w-full md:w-1/2">
        <label className="text-[16px] font-medium">Last name</label>
        <input
          type="text"
          placeholder="Enter your Last name"
          className="h-12 w-full p-4 rounded-lg border border-[#DBE0E5] outline-0"
        />
      </div>

      {/* Address */}
      <div className="mt-6 flex flex-col gap-2 w-full md:w-1/2">
        <label className="text-[16px] font-medium">Address</label>
        <input
          type="text"
          placeholder="Enter your Address"
          className="h-12 w-full p-4 rounded-lg border border-[#DBE0E5] outline-0"
        />
      </div>

      {/* Optional Apt */}
      <div className="mt-6 flex flex-col gap-2 w-full md:w-1/2">
        <label className="text-[16px] font-medium">
          Apt, suite, etc. (optional)
        </label>
        <input
          type="text"
          placeholder="Enter your Apt, suite, etc."
          className="h-12 w-full p-4 rounded-lg border border-[#DBE0E5] outline-0"
        />
      </div>

      {/* City */}
      <div className="mt-6 flex flex-col gap-2 w-full md:w-1/2">
        <label className="text-[16px] font-medium">City</label>
        <input
          type="text"
          placeholder="Enter your City"
          className="h-12 w-full p-4 rounded-lg border border-[#DBE0E5] outline-0"
        />
      </div>

      {/* State + Zip (responsive layout) */}
      <div className="mt-6 flex flex-col md:flex-row gap-4 w-full md:w-1/2">
        {/* State */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[16px] font-medium">State</label>
          <input
            type="text"
            placeholder="Enter your State"
            className="h-12 w-full p-4 rounded-lg border border-[#DBE0E5] outline-0"
          />
        </div>

        {/* Zip */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[16px] font-medium">Zip Code</label>
          <input
            type="text"
            placeholder="Enter your Zip Code"
            className="h-12 w-full p-4 rounded-lg border border-[#DBE0E5] outline-0"
          />
        </div>
      </div>

      {/* Save Checkbox */}
      <div className="flex mt-6 items-center gap-3">
        <input type="checkbox" className="h-5 w-5 border-[#DBE0E5]" />
        <p className="text-[16px]">Save this information for next time</p>
      </div>

      {/* Continue Button */}
      <button className="
        mt-8 
        w-full md:w-1/2
        h-12
        
        bg-[#2B8CED] 
        text-white 
        rounded-lg 
        font-bold 
        text-[16px]
        hover:bg-[#2378ce]
      ">
        Continue to Payment
      </button>
    </div>
  );
}
