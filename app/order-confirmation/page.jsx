"use client";

import { useEffect, useState } from "react";

export default function OrderConfirmationPage() {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const getDeliveryEstimate = () => {
    const today = new Date();
    const min = new Date(today);
    const max = new Date(today);

    min.setDate(min.getDate() + 3);
    max.setDate(max.getDate() + 5);

    return `${min.toDateString().slice(4)} - ${max.toDateString().slice(4)}`;
  };

  const [deliveryRange, setDeliveryRange] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("checkout_selected");
    const raw = localStorage.getItem("checkout_addresses");
    const list = raw ? JSON.parse(raw) : [];

    const address = list.find((a) => a.id === id);
    setSelectedAddress(address || null);

    localStorage.removeItem("shopmart_cart");

    setDeliveryRange(getDeliveryEstimate());
  }, []);

  const orderNumber = "ORD" + Date.now().toString().slice(-8);
  return (
    <div className="mx-5 md:mx-20 lg:mx-40 mt-[101px]">
      <h1 className="md:text-[28px] text-[20px] font-bold text-center">
        Thank you for your order!
      </h1>
      <p className="mt-5 md:text-[16px] text-[14px] text-center w-full">
        Your order has been placed and will be shipped soon. You will receive an
        email confirmation with tracking information.
      </p>

      <div className="flex flex-col mt-7">
        <h1 className="text-[18px] font-bold">Order Summary</h1>
        <hr className="w-full mt-6 text-[#E5E8EB] " />

        <div className="flex mt-5 gap-30">
          <div className="flex flex-col">
            <p className="text-[#61758A] text-[14px]">Order Number</p>
            <p className="text-[14px]">{orderNumber}</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#61758A] text-[14px]">Estimated Delivery</p>
            <p className="text-[14px]">{deliveryRange}</p>
          </div>
        </div>

        <div className="flex flex-col mt-[52px]">
          <h1 className="text-[18px] font-bold ">Shipping Address</h1>

          {selectedAddress ? (
            <div className="mt-3">
              <p className="text-[16px]">{selectedAddress.fullName}</p>
              <p className="text-[16px]">{selectedAddress.address}</p>
              {selectedAddress.apt && (
                <p className="text-[16px]">{selectedAddress.apt}</p>
              )}
              <p className="text-[16px]">
                {selectedAddress.city}, {selectedAddress.state} -{" "}
                {selectedAddress.zip}
              </p>
              <p className="text-[16px]">Phone: {selectedAddress.phone}</p>
            </div>
          ) : (
            <p className="mt-3 text-[16px] text-[#637381]">No address found.</p>
          )}
        </div>

       
        <div className="flex flex-col mt-[52px] gap-3">
          <h1 className="text-[18px] font-bold">Payment Method</h1>
          <p className="text-[16px]">Cash on Delivery</p>
        </div>
      </div>
    </div>
  );
}