"use client"

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimesCircle } from "react-icons/fa";

export const Navbar = () => 
{
  
  const [navbar, setNavbar] = useState( false )

  return (
    <nav className='w-full bg-black text-white fixed top-0 right-0 z-10'>
      <div className='justify-between px-4 mx-auto md:flex md:items-center md:px-8 lg:max-w-6xl'>
        <div className='flex justify-between items-center py-3 md:py-6'>
          <Link href="/">
            <h2 className='text-3xl text-[var(--primary-color)] font-bold uppercase md:text-2xl'>snacky</h2>
          </Link>
        </div>
      </div>
    </nav>
  )  
  
  
}
