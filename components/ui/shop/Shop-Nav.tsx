"use client"

import { useEffect, useState } from 'react'
import Button from './Button'
import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation';
import useCart from '@/hooks/use-cart';

const Nav = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
    const router = useRouter();
    const cart = useCart();
  
    if (!isMounted) {
      return null;
    }
  return (
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
  )
}

export default Nav;