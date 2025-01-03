import React from 'react';
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Image from 'next/image';


const Footer = () => {
    return (
        <footer className="bg-black text-gray-200 body-font border border-slate-300 border-t-1 border-x-0 border-b-0">
        <div className="container px-4 py-8 mx-auto flex items-center lg:flex-row flex-col">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-indigo-200">
            <Image className='border border-gray-400 rounded-md'
            src={"/authorcard/logo.jpeg"}
            alt='logo'
            width={80}
            height={80}
            />
            <span className="ml-3 text-xl">Alia Mujtaba</span>
          </div>
          <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-100 sm:py-2 sm:mt-0 mt-4">© 2025 Blogs —
            <Link href="https://twitter.com/knyttneve" className="text-gray-100 ml-1" rel="noopener noreferrer" target="_blank">@gmail.com</Link>
          </p>
          <span className="flex flex-row sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href={"/"} className="text-white text-xl">
              <FaFacebookF />
            </Link>
            <Link href={"/"} className="ml-3 text-white text-xl">
              <FaTwitter />
            </Link>
            <Link href={"/"} className="ml-3 text-white text-xl">
              <FaInstagram />            
            </Link>
            <Link href={"/"} className="ml-3 text-white text-xl">
              <FaLinkedinIn />
            </Link>
          </span>
        </div>
      </footer>
    );
}


export default Footer;