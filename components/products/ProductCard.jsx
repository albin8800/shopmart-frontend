import Link from "next/link"

export default function ProductCard({ product }) {
  return (

    <Link href={`/product/${product.id}`}>
    <div className="flex flex-col"> 
        <img className="rounded-lg" src={product.image} alt={product.title} />

        <div className="mt-3 flex flex-col">
            <h1 className="text-[16px] font-medium text-[#121417] ">
                {product.title}
            </h1>

            <p className="text-[14px] text-[#61758A]">
                ${product.price}
            </p>
        </div>
    </div>

    </Link>
  );
}
