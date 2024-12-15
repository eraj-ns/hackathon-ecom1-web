import React from "react";
import Image from "next/image";
import Logo from "@/app/public/Frame 168.png";
import { TbUserExclamation } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";


const Header = () => {
    return (
        <div>
            <Link href={"/"}></Link>
            <Link href={"shop"}></Link>
            <Link href={"blog"}></Link>
            <Link href={"contact"}></Link>

        <div className="flex item-left justify-left h-[20] w-full bg-white">
            <Image src={Logo} alt="logo" height={200} width={200}/>
     <div className="md:ml-auto md:mr-auto flex-wrap items-center justify-center text-base size-300 text-black pt-5 pb-5 gap-8 text-lg">
     <nav className="gap-8">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">Shop</a>
      <a className="mr-5 hover:text-gray-900">Blog</a>
      <a className="mr-5 hover:text-gray-900">Contact</a>
    </nav>
    </div>

    <div>
        <h1 className="flex size-6 w-[200px] text-black gap-8 pt-6 pb-6 text-lg">
        <TbUserExclamation />
        <FaSearch />
        <FaRegHeart />
        <AiOutlineShoppingCart />
        </h1>
    </div>
        </div>
        </div>
    )
}

export default Header