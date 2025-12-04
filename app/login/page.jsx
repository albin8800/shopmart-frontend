import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    
    <div className="mx-5 md:mx-20 lg:mx-40 mt-[125px] justify-center">
        <h2 className="text-[28px] font-bold text-center ">
          Login to Continue
        </h2>
        <p className="w-full text-center mt-4 md:text-[16px] text-[14px]">Enter your phone number or email to receive a one-time password (OTP).</p>
        <LoginForm />
      </div>
  );
}
