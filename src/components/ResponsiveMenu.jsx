import React from 'react'
// import { FaUserCircle } from "react-icons/fa";
import { FaChevronRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({ isNavOpen, setIsNavOpen }) => {
    return (
        <div className={`${isNavOpen ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-green-100 px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
            <div>
                 <div>
                    <h1 className='text-green-600 text-3xl font-bold'>FreshMart</h1>
                 </div>
                <nav className='mt-12'>
                    <ul className='flex flex-col gap-7 text-xl font-semibold '>
                    <Link to={'/'}><li className='cursor-pointer' onClick={()=>setIsNavOpen(false)}>Home</li></Link> 
                        <Link to={'/shop'}><li className='cursor-pointer' onClick={()=>setIsNavOpen(false)}>Shop</li></Link>
                        <Link to={'/about'}><li className='cursor-pointer' onClick={()=>setIsNavOpen(false)}>About</li></Link>
                       <Link to={'/contact'}><li className='cursor-pointer' onClick={()=>setIsNavOpen(false)}>Contact</li></Link> 
                        <Link href="#contact"><button onClick={()=>setIsNavOpen(false)} className='px-3 py-1 w-max rounded-md bg-green-600 text-white flex items-center gap-1 '>Login<FaChevronRight /></button></Link>
                    </ul>
                </nav>
            </div>
            <div className=''>
                <h1>
                    Made with ❤️ by Rohit
                </h1>
            </div>
        </div>
    )
}

export default ResponsiveMenu