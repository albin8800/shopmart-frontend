import Breadcrumbs from "@/components/BreadCrumbs";
import { products, reviews  } from "@/data/product";
import { use } from "react";

export default function ProductDetail({ params }) {
  const { id } = use(params);

  const product = products.find((p) => p.id == id); // get product by id

  if (!product) return <p className="mt-32 text-center">Product Not found.</p>;

  return (
    <div className="mx-5 md:mx-20 lg:mx-40 mt-[101px]">
      <Breadcrumbs category={product.category} />

      <div className="mt-9 gap-5 flex flex-col">
        <h1 className="text-[22px] font-bold text-[#121417]">
          {product.title}
        </h1>
        <p className="text-[14px] text-[#121417]">{product.description}</p>
      </div>

      <div className="w-full mt-7">
        <img
          className="w-full max-h-[619px] object-cover"
          src={product.image}
          alt="product"
        />
      </div>

      <div className="flex flex-col mt-8">
        <h1 className="text-[18px] font-bold">Product Details</h1>
        <div className="flex flex-col mt-6 gap-3">
          <h1 className="text-[18px] font-bold text-[#121417]">Price</h1>
          <p className="text-[16px] text-[#121417]">${product.price}</p>
        </div>

        <button className="bg-[#2B8CED] px-5 py-3 rounded-lg mt-6 text-white text-[16px] font-bold w-32 hover:cursor-pointer hover:bg-[#2378ce] ">
          Add to Cart
        </button>
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-x-6">
        <div className="w-[186px]">
          <div className="h-px mt-7 bg-[#E5E8EB]"></div>
          <div className="mt-5 gap-2">
            <p className="text-[14px] text-[#61758A]">Material</p>
            <p className="text-[14px] text-[#121417]">{product.material}</p>
          </div>
        </div>

        <div>
          <div className="h-px mt-7 bg-[#E5E8EB]"></div>
          <div className="mt-5 gap-2">
            <p className="text-[14px] text-[#61758A]">Instruction</p>
            <p className="text-[14px] text-[#121417]">{product.instruction}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-x-6">
        <div className="w-[186px]">
          <div className="h-px mt-7 bg-[#E5E8EB]"></div>
          <div className="mt-5 gap-2">
            <p className="text-[14px] text-[#61758A]">Fit</p>
            <p className="text-[14px] text-[#121417]">{product.fit}</p>
          </div>
        </div>

        <div>
          <div className="h-px mt-7 bg-[#E5E8EB]"></div>
          <div className="mt-5 gap-2">
            <p className="text-[14px] text-[#61758A]">Features</p>
            <p className="text-[14px] text-[#121417]">{product.features}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[52px]">
        <h1 className="text-[18px] font-bold text-[#121417]">
          Customer Reviews
        </h1>

        <div className="flex mt-6 flex-col gap-8 md:flex-row">
          <div className="flex flex-col gap-2">
            <h1 className="text-[36px] font-extrabold text-[#12117]">
              {product.rating}
            </h1>
            <div className="flex items-center gap-0.5">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <img
                    key={i}
                    src={
                      i < Math.round(product.rating || 4.5)
                        ? "/icons/star-filled.svg"
                        : "/icons/star-empty.svg"
                    }
                    className="w-[18px] h-[18px]"
                  />
                ))}
            </div>

            <p className="text-[16px] text-[121417]">
              {product.totalReviews} reviews
            </p>
          </div>

          <div className="flex flex-col gap-3 max-w-[400px]">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = product.ratingBreakdown?.[star];
              const total = product.totalReviews;
              const percent = (count / total) * 100;

              return (
                <div key={star} className="flex items-center gap-3">
                  <p className="text-[14px] text-[#121417]">{star}</p>

                  <div className="min-w-[340px] bg-[#DBE0E5] h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#121417] rounded-full"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>

                  <p className="text-[14px] text-[#61758A]">{Math.round(percent)}%</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

          <div className="flex flex-col gap-6 mt-8">
            {(reviews || []).slice(0, 3).map((review) => (
              <div className="flex flex-col gap-3 md:gap-3" key={review.id}>

                <div className="flex gap-3">
                  <img className="w-10 h-10 rounded-full" src={review.avatar} alt="" />

                  <div className="flex flex-col justify-center ">
                      <h1 className="text-[16px] font-medium text-[#121417]">{review.name}</h1>
                      <p className="text-[14px] text-[#61758A]">{review.date}</p>
                  </div>

                  </div>

                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <img className="w-5 h-5" key={i} src={i< review.rating ? "/icons/star-filled.svg": "/icons/star-empty.svg"} alt="" />
                    ))}
                  </div>

                  <p>
                    {review.text}
                  </p>

                  </div>                
              
            ))}
          </div>

    </div>
  );
}
