"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Header() {

    const pathname = usePathname();

    const navItems = [
        { name: "Home", link: "/" },
        { name: "Shop", link: "/shop" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
    ]

    return(
        <div className="min-h-[65px] w-full border-b border-b-[#E5E8EB] flex justify-between ">

            <div className="ml-10 flex">
                <div className="flex gap-4 items-center justify-center">
                    <img src="/icons/logo.svg" className="w-4 h-4" alt="" />
                    <h1  className="text-[18px] font-bold text-[#212B36] ">ShopMart</h1>
                </div>
                

                <div className="ml-32 flex items-center ">
                    <ul className="flex gap-9">
                       { navItems.map((item) => {
                        const isActive = pathname === item.link;
                        return (
                            <Link key={item.name} href={item.link} className={`text-[14px] font-medium text=[#878787]                           
                            ${isActive ? "text=[#121417]" : "text-[#878787] hover:text-[#121417]"}
                            `}>
                                {item.name}
                            </Link>
                        )
                       })}
                        
                    </ul>
                </div>
            </div>
                
            <div className="mr-10 flex items-center gap-8">
                <div className="max-w-40 max-h-10 bg-[#F0F2F5] gap-2 rounded-lg flex items-center px-4 py-2">
                    <img className="h-6 w-6 " src="/icons/search.svg" alt="" />
                    <input placeholder="Search" className="bg-transparent border-0 outline-none w-full text-4 text-[#61758A]" type="text" />
                </div>

                <div className="flex items-center gap-2">

                       <Link href="/wishlist">
                        <div className={`w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#D2D2D2] transition-all .3s ease-in-out
                            ${pathname === "/wishlist" ? "bg-[#D2D2D2]" : "bg-[#F0F2F5]"}`}>
                         <img className="h-5 w-5" src="/icons/wishlist.svg" alt="" />
                        </div>
                       </Link>

                    
                    <Link href="/wishlist">
                        <div className={`w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#D2D2D2] transition-all .3s ease-in-out
                            ${pathname === "/cart" ? "bg-[#D2D2D2]" : "bg-[#F0F2F5]"}`}>
                         <img className="h-5 w-5" src="/icons/cart.svg" alt="" />
                        </div>
                       </Link>
                </div>

                <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                       <img src="/user.jpg" alt="" />
                </div>

            </div>
        
        </div>
    )
}