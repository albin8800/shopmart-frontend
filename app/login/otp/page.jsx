"use client"

import { useEffect, useRef, useState } from "react";

export default function OtpPage() {

    const inputData = typeof window !== "undefined" ? localStorage.getItem("loginInput") : "";

    const [otp, setOtp] = useState(["","","","","","",]);
    const inputRefs = useRef([]);
    const [timer, setTimer] = useState(30);
    const [canResent, setCanResent] = useState(false);

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    useEffect(() => {
        if(timer === 0) return setCanResent(true);
        const interval = setTimeout(() => setTimer((t) => t-1), 1000);
        return () => clearTimeout(interval);

    }, [timer]);

    const handleChange = (val, index) => {
        if(!/^[0-9]?$/.test(val)) return;

        const newOtp = [...otp];
        newOtp[index] = val;
        setOtp(newOtp);

        if(val && index < 5 ) inputRefs.current[index + 1].focus();
    };

    const handleKeyDown = (e, index) => {
        if(e,key === "Backspace" && !otp[index] && index > 0)
            inputRefs.current[index-1].focus();
    };

    const handleVerify = () => {
        const code = otp.join("");
        if (code.length < 6) return alert("Enter 6 digits");

        alert("OTP Verified Succesfully");
        localStorage.removeItem("loginInput");
    }

    const resentOtp = () => {
        setTimer(30);
        setCanResent(false);
        alert("OTP resent")
    };

    
    return(
        <div className="mx-5 md:mx-20 lg:mx-40 mt-[125px] justify-center items-center flex flex-col">
            <h1 className="md:text-[28px] text-[20px] text-center font-bold">
        Enter Verification Code sent to
      </h1>
      <p className="mt-4 md:text-[16px] text-[14px] text-center text-gray-600">
        {inputData || "your number/email"}
      </p>
            <div className="flex gap-4 mt-6 justify-center">

            {otp.map((digit, i) => (

                
                <input type="text" 
                inputMode="numeric"
                maxLength={1}
                key={i}
                ref={(el) => (inputRefs.current[i] = el)}
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                
                className="h-14 max-w-12 border outline-none border-[#CFDBE8] rounded-lg flex text-center text-4 font-bold "
                />
            ))}
                
                
            </div>

            <p className="mt-4 text-center text-[14px] text-[#4D7399]">

            {canResent ? "00:00" : `00:${timer < 10 ? `0${timer}` : timer }`}

            </p>

            <button
            disabled ={!canResent}
            onClick={resentOtp}
            className={`mt-3 text-[15px] font-medium 
          ${canResent ? "text-[#2B8CED]" : "text-gray-400 cursor-not-allowed"}`}>
                Resend Code 
            </button> 

            <button
        onClick={handleVerify}
        className="mt-6 h-11 px-6 text-[16px] rounded-lg text-white font-bold bg-[#2B8CED]"
      >
        Verify Code
      </button>
            
        </div>
    )
}