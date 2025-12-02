"use client";

import Link from "next/link";
import { useEffect, useState } from "react";



export default function CartPage() {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("shopmart_cart");
        setCartItems(saved? JSON.parse(saved) : []);
    }, []);

    const increaseQty = (id) => {
        const updated = cartItems.map(item => item.id === id ? { ...item, qty: item.qty+1 } : item);

        setCartItems(updated);
        localStorage.setItem("shopmart_cart", JSON.stringify(updated));
    };

    const decreaseQty = (id) => {
        const updated = cartItems.map(item => item.id === id ? { ...item, qty: item.qty -1 } : item)
        .filter(item => item.qty > 0);

        setCartItems(updated);
        localStorage.setItem("shopmart_cart", JSON.stringify(updated));
    }

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.qty, 0
    );

    const shipping = 5;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax; 

    return(
        <div className="mx-5 md:mx-20 lg:mx-40 mt-[101px]">
            <h1 className="text-[24px] md:text-[32px] font-bold text-[#121417] ">Shopping Cart</h1>

            <div className="flex flex-col mt-6 gap-4">

            {cartItems.length === 0 && (
                <p className="text-[16px] mt-4 items-center text-center">Your Cart is Empty</p>
            )}

            {cartItems.map((item) => (

                <div key={item.id} className="flex justify-between">
                    <div className="flex gap-4 items-center">
                         <img className="w-14 h-14 " src={item.image} alt={item.title} />
                         <div className="flex flex-col">
                                <h3 className="text-[16px] text-[#121417] font-medium">{item.title}</h3>
                                <p className="text-[14px] text-[#121417] ">Size:{item.size}</p>
                         </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button onClick={() => decreaseQty(item.id)} className="w-7 h-7 bg-[#F0F2F5] rounded-full">
                            -
                        </button>

                        <p className="text-[16px] font-medium">
                            {item.qty}
                        </p>

                        <button onClick={() => increaseQty(item.id)} className="w-7 h-7 bg-[#F0F2F5] rounded-full">
                            +
                        </button>
                    </div>
                   
                </div>

            ))}

                
            </div>

           
            {cartItems.length > 0 && (

                <div className="mt-6">

                <h1 className="text-[18px] font-bold text-[#121417] ">Order Summary</h1>

                <div className="mt-6 flex flex-col gap-4">
                    <div className="flex justify-between">
                        <p className="text-[14px] text-[#61758A]">Subtotal</p>
                        <p className="text-[14px] text-[#121417]">${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-[14px] text-[#61758A]">Shipping</p>
                        <p className="text-[14px] text-[#121417]">${shipping.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-[14px] text-[#61758A]">Tax</p>
                        <p className="text-[14px] text-[#121417]">${tax.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-[14px] text-[#61758A]">Total</p>
                        <p className="text-[14px] text-[#121417]">${total.toFixed(2)}</p>
                    </div>
                </div>
                <div className="flex justify-end mt-9">
               <Link href='/checkout'> <button className="bg-[#2B8CED] text-white px-4 py-[9.5px] rounded-lg font-bold text-[14px] hover:cursor-pointer hover:bg-[#2378ce]">Proceed to Checkout</button></Link>
                </div>
            </div>

            )}
            
        </div>
    )
}
