import Breadcrumbs from "@/components/BreadCrumbs";
import { products } from "@/data/product";
import { use } from "react";

export default function ProductDetail({ params }) {
    const { id } = use(params);

    const product = products.find((p) => p.id == id); // get product by id

    if(!product) return <p className="mt-32 text-center">Product Not found.</p>

    return(
        <div className="mx-5 md:mx-20 lg:mx-40 mt-[101px]">
            <Breadcrumbs category={product.category}/>

            <div className="mt-9 gap-5 flex flex-col">
                <h1 className="text-[22px] font-bold text-[#121417]">{product.title}</h1>
                <p className="text-[14px] text-[#121417]">{product.description}</p>
            </div>

            <div className="w-full mt-7">
                <img className="w-full max-h-[619px] object-cover" src={product.image} alt="product" />
            </div>

            <div className="flex flex-col mt-8">

                <h1 className="text-[18px] font-bold">
                    Product Details
                </h1>
                <div className="flex flex-col mt-6 gap-3">
                    <h1 className="text-[18px] font-bold text-[#121417]">Price</h1>
                    <p className="text-[16px] text-[#121417]">${product.price}</p>
                </div>

                <button className="bg-[#2B8CED] px-5 py-3 rounded-lg mt-6 text-white text-[16px] font-bold w-32 hover:cursor-pointer hover:bg-[#2378ce] ">
                    Add to Cart
                </button>
            </div>

        <div className="">
            <div>
                <hr className="w-186 bg-[#E5E8EB]" />
                
            </div>
        </div>

        </div>
    )
}