export default function PopularCategories() {
  return (
    <div className="mx-5 md:mx-20 lg:mx-40 flex flex-col mt-8">
      <h2 className="font-bold text-[20px] md:text-[22px] text-[#121417]">
        Popular Categories
      </h2>

      
      <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8">

        <div className="gap-3 flex flex-col">
          <img src="/images/homecategory1.svg" alt="" />
          <div className="mt-4 flex flex-col">
            <h1 className="text-[16px] md:text-[18px] font-medium text-[#121417]">
              Kitchenware
            </h1>
          </div>
        </div>

        <div className="gap-3 flex flex-col">
          <img src="/images/homecategory2.svg" alt="" />
          <div className="mt-4 flex flex-col">
            <h1 className="text-[16px] md:text-[18px] font-medium text-[#121417]">
              Bedding
            </h1>
          </div>
        </div>

        <div className="gap-3 flex flex-col">
          <img src="/images/homecategory3.svg" alt="" />
          <div className="mt-4 flex flex-col">
            <h1 className="text-[16px] md:text-[18px] font-medium text-[#121417]">
              Home Decor
            </h1>
          </div>
        </div>

        <div className="gap-3 flex flex-col">
          <img src="/images/homecategory4.svg" alt="" />
          <div className="mt-4 flex flex-col">
            <h1 className="text-[16px] md:text-[18px] font-medium text-[#121417]">
              Furniture
            </h1>
          </div>
        </div>

      </div>
    </div>
  );
}
