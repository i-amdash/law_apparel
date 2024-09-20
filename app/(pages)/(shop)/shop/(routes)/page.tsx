"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/shop/Button";
import ProductList from "@/components/ui/shop/ProductList";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Shop = () => {
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }
  // const products = await getProducts({ isFeatured: true });
  const products: Product[] = [];

  return (
    <div>
      {/* <div className="bg-no-repeat bg-top bg-contain lg:bg-cover bg-[url('../public/images/nobilis.png')] w-full h-[70vh]"></div> */}
      <Container>
        <div className="space-y-10 pb-20 sm:pb-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-row justify-between items-center">
        <h2 className="text-5xl text-slate-950 font-semibold pt-8">
            Shop <span className="text-[#7B5D42]">O&B</span>
          </h2>
      <Button onClick={() => router.push('/shop/cart')} className="flex items-center cursor-pointer bg-slate-950 rounded-full">
        <ShoppingBag size={20} className="text-white"/>
        <span className="ml-2 text-sm font-medium text-white">
        {cart.items.length}
        </span>
      </Button>
        </div>
          
          <p className="w-1/2">
            Browsing for your next legal apparel to be delivered to you within 48hours with no hassle? Look no further, we sell them all here, tailored your taste.
          </p>
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList 
            title="All Packages"
            items={products}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
