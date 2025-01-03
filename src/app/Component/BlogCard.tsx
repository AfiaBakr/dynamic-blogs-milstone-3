import React from 'react';
import {Card, CardTitle, CardContent} from "../../components/ui/card";
import Image from 'next/image';
import Link from 'next/link';


interface BlogCardProps {
    post:{ id: string; title: string; description: string; date: string; imageUrl: string;};
    isDarkBackground: boolean;
}

export default function BlogCard ({post, isDarkBackground} : BlogCardProps) {
    return (
    <div>
        <Card className={`p-4 ${isDarkBackground? 'bg-slate-700 text-white' : 'text-slate-400'} rounded-lg  shadow-lg hover:shadow-xl`}>
            <Image src={post.imageUrl}
            alt={post.title}
            width={300}
            height={192} className='w-auto h-48 lg:pl-10 object-cover rounded-t-lg'/>
            <CardTitle className='text-xl font-normal text-center mt-4'>{post.title}</CardTitle>
            <br/>
            <CardContent className='text-center'>
                <p>{post.description}</p>
            </CardContent>

            <div className=' flex flex-col items-center mt-4'>
                <p className={`p-4 ${isDarkBackground? 'text-slate-200' : 'text-slate-400'}`}>
                    Published on: {post.date}
                </p>

                <Link href={`/posts/${post.id}`}
                className={`w-full px-6 text-slate-600 text-center bg-indigo-200 rounded hover:bg-indigo-400 ${isDarkBackground? 'bg-black hover:bg-indigo-500' :'bg-black hover:bg-indigo-500'}`}>
                    Read More
                </Link>
            </div>
        </Card>
    </div>
    );
}


