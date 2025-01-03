"use client";

import Link from 'next/link';
import React,{useEffect, useState} from 'react';
import { GrYoutube } from "react-icons/gr";
import Blogs from "./Blogs"


const Navbar = () => {
const[ currentDateTime, setCurrentDateTime]= useState(``);
useEffect(()=>{
    const updateDateTime =()=>{
        const now=new Date();
        const option:Intl.DateTimeFormatOptions ={
            weekday: 'long',
            year: 'numeric',
            day: 'numeric',
            month: 'long',
           
        }
    setCurrentDateTime(now.toLocaleDateString('en-us',option)+ ' '+now.toLocaleTimeString('en-us',{hour12:false}))
    }
updateDateTime();
const interValId =setInterval(updateDateTime, 1000);
return()=> clearInterval(interValId);
});


    return (
    <header className='bg-black text-[#abd7be] body-font border-b-2 border-x-0 border-t-0 border-slate-300'>
        <div className='container mx-auto flex flex-wrap p-4 flex-col lg:flex-row items-center'>
        
        {/*Date and Time */}
            <div className='flex-1 text-white lg:text-lg text-md'>
            <h1 className='text-xl lg:text-2xl text-center lg:text-start text-indigo-200'>Alia Mujtaba Blogs</h1><br/>
                {currentDateTime}
            </div>
        {/*Links page */}
            <nav className=''>
                <ul className='text-white text-sm lg:text-lg mt-2 lg:mt-0 lg:ml-auto flex flex-wrap items-center justify-center lg:gap-4'>
                    <li><Link className='mr-8 hover:text-gray-500 transition-colors duration-300 transform hover:scale-105' 
                    href={"/"}>Home</Link></li>
                    <li><Link className='mr-8 hover:text-gray-500 transition-colors duration-300 transform hover:scale-105' 
                    href={"/about"}>About</Link></li>
                    <li><Link className='mr-8 hover:text-gray-500 transition-colors duration-300 transform hover:scale-105' 
                    href={"/blogs"}>Blogs</Link></li>
                    <li><Link className='mr-8 hover:text-gray-500 transition-colors duration-300 transform hover:scale-105' 
                    href={"/contact"}>Contact</Link></li>
                    <li><Link className='mr-8 hover:text-gray-500 transition-colors duration-300 transform hover:scale-105' 
                    href={"https://www.youtube.com/@aliamujtaba786"} target="_blank"><GrYoutube className="text-1xl lg:text-3xl mt-5"/></Link></li>
                </ul>                
            </nav>
        </div>
    </header>
    );
}


export default Navbar;