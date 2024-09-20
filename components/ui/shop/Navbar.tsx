"use client"

import { ShoppingBag } from "lucide-react";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";


const Navbar = () => {
    const router = useRouter();
  return (
    <nav className=" py-4 border-b border-gray-100 ">
        <div className="mx-auto max-w-7xl flex flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
      <div onClick={() => router.push('/')} className="flex bg-[url('../public/images/logo.png')] bg-no-repeat bg-contain h-10 w-10 cursor-pointer"/>
      <Button onClick={() => router.push('/shop/cart')} className="flex items-center cursor-pointer bg-slate-950 px-4 py-2 rounded-full">
        <ShoppingBag size={20} className="text-white"/>
        <span className="ml-2 text-sm font-medium text-white">
          2
        </span>
      </Button>
        </div>
    </nav>
  );
};

export default Navbar;
