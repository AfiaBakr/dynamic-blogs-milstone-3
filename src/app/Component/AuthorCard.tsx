import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AuthorCard = () => {
    return (
    <div className='bg-black shadow-lg rounded-lg p-6 mx-1 lg:mx-36 mb-10 border-2 border-slate-300'>
        <div className=' flex items-center animation-fadeIn'>
{/*Author pic */}
            <Image src={"/authorcard/alia.png"}
            alt='Alia Mujtaba'
            width={64}
            height={64}
            className='rounded-full border-2 border-slate-300 mr-4 object-cover'/>

            <div>
                <h1 className='text-xl font-bold'>Alia Mujtaba</h1>
                <p className=' text-indigo-200'>Author | Content and Scriptwriter | Copywriter</p>
            </div>
        </div>
{/*Bio of Author */}
                <p className='mt-4 text-white leading-relaxed'>Hello! I&apos;m a passionate educator and author with a strong academic foundation and a love for storytelling. My journey began with creative and content writing, leading me to author some books that explore topics close to my heart. Writing has always been my way of connecting with others, sharing knowledge, and inspiring growth.
                    &nbsp;<Link href={"/about"}><button className='border p-1 bg-slate-700 text-indigo-200 rounded-md'>More About Author</button></Link>
                </p>
                <div className='mt-4 flex space-x-3'>
                    <Link href={"https://www.instagram.com/alia_mujtaba/?hl=en"} className='px-4 py-2 text-black  bg-slate-200 hover:bg-slate-400 rounded-md transition duration-300'>
                    Instagram
                    </Link>
                    <Link href={"https://www.linkedin.com/in/alia-mujtaba-edu"} className='px-4 py-2 text-black  bg-slate-200 hover:bg-slate-400 rounded-md transition duration-300'>
                    LinkedIn
                    </Link>
                    <Link href={"https://www.facebook.com/share/p/18PfxrpXXr/"} className='px-4 py-2 text-black  bg-slate-200 hover:bg-slate-400 rounded-md transition duration-300'>
                    Face Book
                    </Link>
                </div>
    </div>
    );
}


export default AuthorCard;
