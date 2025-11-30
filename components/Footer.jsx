"use client";


export default function Footer() {
    return (
        <div className="h-[200px] bg-white flex flex-col  py-10 mt-5  ">
            <div className="flex justify-between mx-[180px]">
                <p className="text-[16px] text-[#61758A]">Privacy Policy</p>
                <p className="text-[16px] text-[#61758A]">Terms and Conditions</p>
                <p className="text-[16px] text-[#61758A]">Shipping and Returns</p>
            </div>

            <div className="flex justify-center mt-6 gap-4 items-center mx-[180px]">
                <img className="w-6 h-6" src="/icons/twitter.svg" alt="twitter" />
                <img className="w-6 h-6" src="/icons/instagram.svg" alt="instagram" />
                <img className="w-6 h-6" src="/icons/facebook.svg" alt="facebook" />
            </div>

            <p className="text-center mt-6 text-[16px] text-[#61758A]">@2024 ShopSmart. All rights reserved.</p>
        </div>
    )
}