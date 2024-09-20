/* eslint-disable react/jsx-key */

"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingBag, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { goldPkg, nobilisPkg } from "@/utils";
import Currency from "./Currency";
import { Product } from "@/types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import IconButton from "./icon-button";

interface ProductCard {
  data: Product
}

const ProductCard: React.FC<ProductCard> = ({
  data
}) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/shop/cart`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  useGSAP(() => {
    gsap.to(".cart", {
        y: 0,
        opacity: 1,
        backgroundColor: "#7B5D42",
        duration: 2,
        ease: "ease.in"
    });
    gsap.to(".remove", {
        opacity: 0,
        duration: 2,
        y: 2,
        ease: "power1.out"
    })
  }, []);
  
  return (
    <>
    <div
      onClick={handleClick}
      className="group cursor-pointer rounded-xl space-y-4"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />
        {
          // //   data.isSold ?
          //   <span className="inline-flex items-center rounded-md bg-secondary absolute px-6 top right-0 text-md font-medium">Sold Out</span>
          //   :
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex justify-center">
              <IconButton 
              onClick={onPreview} 
              icon={<Expand size={20} className="text-gray-600" />}
            />
            </div>
          </div>
        }
      </div>
      {/* Description */}
      <div className="flex justify-between items-start">
        <div>
          {/* <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p> */}
          <p className="font-semibold text-lg">{data.name}</p>
          <Currency value={data.price} />
          
        </div>
        {/* Price & Reiew */}
        <div className="flex flex-col items-end">
        <button className="">
            <span className="gap-x-2 border border-[#7B5D42] px-4 py-2 flex flex-row items-start text-xs  rounded-lg mb-2">
          <ShoppingBag size={14}  /> Add to cart 
            </span>
          </button>
         
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductCard;
