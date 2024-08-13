import { mainlogo } from '@/utils';
import Image from 'next/image';
import { navLists } from '@/constants';
import { CiShop } from "react-icons/ci";

const Navbar = () => {
  return (
    <header className="">
      <nav className="flex max-w-fit md:min-w-[70vw] text-white lg:min-w-fit fixed z-[5000] top-5 lg:top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-2 lg:space-x-4"
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(114,85,60, 0.25)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.125)",
      }}
      >
        <Image
         src={mainlogo} 
         alt="logo" 
         width={32} 
         height={28} />

        <div className="flex flex-1 justify-center">
          {navLists.map((nav) => (
            <div key={nav} className="md:px-5 px-3  text-sm cursor-pointer hover:text-[#7a7a7a]">
              {nav}
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar