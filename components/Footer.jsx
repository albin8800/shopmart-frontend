"use client";

export default function Footer() {
  return (
    <div className="bg-white py-10 mt-10 border-t border-[#E5E8EB]">
      
      
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-6 px-6 md:px-20 lg:px-40">
        <p className="text-[16px] text-[#61758A] cursor-pointer">Privacy Policy</p>
        <p className="text-[16px] text-[#61758A] cursor-pointer">Terms and Conditions</p>
        <p className="text-[16px] text-[#61758A] cursor-pointer">Shipping and Returns</p>
      </div>

      
      <div className="flex justify-center mt-6 gap-6">
        <img className="w-6 h-6" src="/icons/twitter.svg" alt="twitter" />
        <img className="w-6 h-6" src="/icons/instagram.svg" alt="instagram" />
        <img className="w-6 h-6" src="/icons/facebook.svg" alt="facebook" />
      </div>

     
      <p className="text-center mt-6 text-[14px] md:text-[16px] text-[#61758A]">
        ©2025x ShopSmart. All rights reserved.
      </p>
    </div>
  );
}
