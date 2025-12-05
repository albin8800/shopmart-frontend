"use client";


import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginForm() {

    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const validateInput = () => {
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!input) return "enter Phone number or email";
    if(!phoneRegex.test(input) && !emailRegex.test(input))
        return "Enter Valid Phone Number or Email";
    return "";
    
    }

    const handleSendOtp = () => {
        const validationMsg = validateInput();
        if(validationMsg) {
            setError(validationMsg);
            return;
        }

        localStorage.setItem("loginInput", input);
        router.push("/login/otp");

    }
    return(
        <div className="mt-[72px] flex flex-col items-center">
            <div className="flex flex-col gap-2 w-full justify-center  max-w-[481px]">
                <label className="text-[16px] font-medium">Phone Number or Email</label>
                <input 
                placeholder="Enter  your phone number or email" 
                type="text"
                value={input}
                onChange={(e) => {
                setInput(e.target.value)
                setError("");
            }}
                
                className="h-14  max-w-[481px] border border-[#DBE0E5] rounded-lg md:text-[16px] text-[14px] px-[15px] py-[15px] outline-0"/>

                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            <button onClick={handleSendOtp} disabled = {!input} 
            className={`w-full max-w-[481px] mt-6 py-2 rounded-lg text-white font-bold text-[14px]
          ${input ? "bg-[#2B8CED]" : "bg-[#9EC9F8] cursor-not-allowed"}`}
            >
                Send OTP
            </button>
        </div>
    )
}