"use client";

export default function FeaturedProducts() {
  return (
    <div className="mx-5 md:mx-20 lg:mx-40 flex flex-col mt-5">
      <h2 className="font-bold text-[20px] md:text-[22px] text-[#121417]">
        Featured Products
      </h2>

     
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-8">

        
        <div className="gap-3 flex flex-col">
          <img src="/images/homeproduct1.svg" alt="" />
          <div className="mt-4 flex flex-col">
            <h1 className="text-[16px] md:text-[18px] font-medium text-[#121417]">
              Cozy Living Room
            </h1>
            <p className="text-[14px] text-[#61758A]">
              Create a warm and inviting living space with our curated collection.
            </p>
          </div>
        </div>

       
        <div className="gap-3 flex flex-col">
          <img src="/images/homeproduct2.svg" alt="" />
          <div className="mt-4 flex flex-col">
            <h1 className="text-[16px] md:text-[18px] font-medium text-[#121417]">
              Cozy Living Room
            </h1>
            <p className="text-[14px] text-[#61758A]">
              Create a warm and inviting living space with our curated collection.
            </p>
          </div>
        </div>

        
        <div className="gap-3 flex flex-col">
          <img src="/images/homeproduct3.svg" alt="" />
          <div className="mt-4 flex flex-col">
            <h1 className="text-[16px] md:text-[18px] font-medium text-[#121417]">
              Cozy Living Room
            </h1>
            <p className="text-[14px] text-[#61758A]">
              Create a warm and inviting living space with our curated collection.
            </p>
          </div>
        </div>

        
        <div className="gap-3 flex flex-col">
          <img src="/images/homeproduct2.svg" alt="" />
          <div className="mt-4 flex flex-col">
            <h1 className="text-[16px] md:text-[18px] font-medium text-[#121417]">
              Cozy Living Room
            </h1>
            <p className="text-[14px] text-[#61758A]">
              Create a warm and inviting living space with our curated collection.
            </p>
          </div>
        </div>

        
        <div className="gap-3 flex flex-col">
          <img src="/images/homeproduct1.svg" alt="" />
          <div className="mt-4 flex flex-col">
            <h1 className="text-[16px] md:text-[18px] font-medium text-[#121417]">
              Cozy Living Room
            </h1>
            <p className="text-[14px] text-[#61758A]">
              Create a warm and inviting living space with our curated collection.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
