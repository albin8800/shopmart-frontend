"use client";


export default function LoginForm() {
    return(
        <div className="mt-[72px] flex flex-col items-center">
            <div className="flex flex-col gap-2 w-full justify-center  max-w-[481px]">
                <label className="text-[16px] font-medium">Phone Number or Email</label>
                <input placeholder="Enter  your phone number or email" type="text" className="h-14  max-w-[481px] border border-[#DBE0E5] rounded-lg md:text-[16px] text-[14px] px-[15px] py-[15px] outline-0"/>
            </div>

            <button className="w-full max-w-[481px] flex  bg-[#2B8CED] justify-center py-[9.5px]  text-white font-bold text-[14px]  rounded-lg mt-6">
                Send OTP
            </button>
        </div>
    )
}