import React from 'react';
import BlogCard from './BlogCard';
import id from '@/app/posts/[id]/page';


const Blogs = () => {
    const posts =[
        {
            id:"1",
            title: "Examples of Powerful Words ",
            description: "Examples of Powerful Words to Enhance Professional Communication",
            date: "October 15, 2024",
            imageUrl:"/blogs/professional communication.png",
            
        },
        
        {
            id:"2",
            title: "Start Writing and Sharing",
            description: "How to Start Writing and Sharing Your Professional Insights Today",
            date: "August 31, 2024",
            imageUrl:"/blogs/share your prof.png",
            
        },
        
        
        {
            id:"3",
            title: "SEO",
            description: "What is SEO and How Does It Work?",
            date: "June 30, 2024",
            imageUrl:"/blogs/seo.png",
            
        },
        {
            id:"4",
            title: "Beat The Heat ",
            description: "Coping with the Heatwave in Karachi and Across Pakistan",
            date: "June 25, 2024",
            imageUrl:"/blogs/beat the heat.png",
            
        },
        {
            id:"5",
            title: "Start Free Lancing",
            description: "Top 10 reason why you should start free lancing?",
            date: "June 16, 2024",
            imageUrl:"/blogs/free lancing.png",
            
        }
        
        
    ];
    
    return (
        <div className='bg-black shadow-lg rounded-lg p-6 mx-1 lg:mx-24 mb-10 border-2 border-slate-300'>
            <h1 className='text-3xl font-bold py-8 text-indigo-200'>Explore the World with Alia Mujtaba </h1>
            <div className='grid gride-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {posts.map((post, index)=>(
                    <div key={post.id}>
                        <div className='blog-card'>
                            <BlogCard post={post} isDarkBackground ={index % 2 === 0}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        );
}


export default Blogs;