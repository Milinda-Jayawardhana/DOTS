import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import Nav from './Nav';
import { TiUserAdd } from "react-icons/ti";
import { FaCircleUser } from "react-icons/fa6";



export default function Header() {
  return (
    <div>
      <div className='py-6 z-[100] md:mx-8 lg:mx-10 xl:py-10'>
        <div className='container flex items-center justify-between mx-auto'>
          <Link to ='/'>
            <img src="/logo.png" alt="" className='h-10 '/>
              
            
            
          </Link>

          <div className='z-10 items-center hidden gap-8 md:flex'>
            <Nav />
          </div>



          <div className='flex items-center gap-4'>
            <Link to ='/register' className='text-xl hover:text-green-600'>
              <TiUserAdd />
            </Link>

            <Link to ='/login' className='text-xl hover:text-green-600'>
              <FaCircleUser />
            </Link>
    
            <div>
              
            </div>
            <div className='md:hidden'>
              mobile nav
            </div>
            
          </div>

          
          
        </div>
      </div>
    </div>
  )
}




