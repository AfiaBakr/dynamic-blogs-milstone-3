"use client";

import React from 'react';
import CommentSection from '@/app/Component/CommentSection';
import AuthorCard from '@/app/Component/AuthorCard';
import { title } from 'process';
import Image from 'next/image';

const posts =[
        {
            id:"1",
            title: "Examples of Powerful Words to Enhance Professional Communication ",
            description: "Effective communication in a professional setting relies heavily on the words we choose.Using powerful words can inspire action, create emotional connections, and enhance clarity.Here are some impactful words and phrases that can elevate your professional communication.These action-oriented words convey urgency and decisiveness, Accelerate- Suggests speeding up processes or initiatives.Empower- Implies giving authority or power to others, fostering a sense of ownership. Catalyze- Indicates sparking change or action. Innovate- Encourages creativity and new solutions. Transform- Suggests significant change and improvement.",
            date: "October 15, 2024",
            imageUrl:"/blogs/professional communication.png",
            
        },
        
        {
            id:"2",
            title: "How to Start Writing and Sharing Your Professional Insights Today",
            description: "If you're a professional in your field, there's a good chance that people are eager to hear from you. They value your insights, experiences, and the practical advice you can offer. Do not let the fact that you have not written before hold you back. Now is the time to pick up the pen and start sharing your knowledge. Heres how you can begin writing and where to publish your work.Your readers are interested in the real-world experience and guidance you can provide. They arent looking for perfectly polished prose; they want valuable insights that can help them in their own journeys. Authenticity and practical advice resonate more than flowery language.",
            date: "August 31, 2024",
            imageUrl:"/blogs/share your prof.png",
            
        },
        
        
        {
            id:"3",
            title: "What is SEO and How Does It Work?",
            description: "Search Engine Optimization-SEO is the practice of enhancing a website's visibility and ranking on Search Engine Results Pages- SERPs to attract organic (non-paid) traffic. The main goal of SEO is to ensure that a website appears at the top of search engine results for relevant keywords and phrases. This involves optimizing various aspects of the website to make it more attractive to search engines like Google, Bing, and Yahoo. SEO works through a combination of techniques and strategies that align with the algorithms used by search engines to rank content. These strategies can be broadly categorized into on-page SEO, off-page SEO, and technical SEO.",
            date: "June 30, 2024",
            imageUrl:"/blogs/seo.png",
            
        },
        {
            id:"4",
            title: "Coping with the Heatwave in Karachi and Across Pakistan",
            description: "The sweltering heatwave currently gripping Karachi and other parts of Pakistan demands serious attention and proactive measures to stay safe and healthy. Here are some essential tips to help you cope with the extreme temperatures. 1. Stay Hydrated-One of the most crucial steps during a heatwave is to drink plenty of water. Staying hydrated helps regulate body temperature and prevents heat-related illnesses. Aim to drink at least 8-10 glasses of water a day. In addition to water, consider consuming natural hydrating beverages like coconut water, fresh fruit juices, and herbal teas. 2. Limit Outdoor Activities. The elderly and children are particularly vulnerable to heat. They should stay indoors as much as possible. If you need to go outside, please do so only when necessary and during the cooler parts of the day, such as early morning or late evening. Always wear light, loose-fitting clothing, and dont forget to wear a hat and sunscreen. 3. Opt for Light and Nutritious Meals. Heavy, spicy meals can increase your body temperature and make you uncomfortable. Instead, opt for light, easily digestible foods. Include plenty of fruits and vegetables in your diet, which are nutritious and hydrating. Lentil soup (dal), vegetable stews, and salads are excellent choices. Avoid street food and heavy, greasy meals that can lead to dehydration and stomach issues. 4. Keep Your Home Cool-Keeping your living space cool can significantly improve comfort during a heatwave. Use curtains or blinds to block out the sun during the hottest parts of the day. Utilize fans and air conditioners if available, and consider spending time in the coolest part of your home. Taking cool showers and using damp cloths on your skin can also help reduce body temperature.",
            date: "June 25, 2024",
            imageUrl:"/blogs/beat the heat.png",
            
        },
        {
            id:"5",
            title: "Top 10 reason why you should start free lancing?",
            description: "Freelancing offers a multitude of benefits that make it an attractive career option. Here are the top 10 reasons why you should consider starting freelancing.Freelancers can choose when and where they work, allowing for a better work-life balance.Whether it’s from home, a coffee shop, or another country, freelancing enables you to work from virtually any location.You have the freedom to pick the projects and clients that interest you and align with your skills and values",
            date: "June 16, 2024",
            imageUrl:"/blogs/free lancing.png",
            
        }
        
        
    ];

export default function PostId ({params}:{params:{id: string}}){
    const {id} =params;
    const post =posts.find ((p)=> p.id ===id);
    if (!post) {
        return(
            <h2 className='text-3xl font-bold text-center pt-20'>Post Not Found</h2>
        );
    }

    const renderParagraphs =(description: string)=>{
        return description.split("/n").map((para,index)=>(
            <p key={index} className='mt-4 text-justify'>
                {para.trim()}
            </p>
        ));
    };


    return(
        <div className="bg-black p-5">
            <h1 className='lg:text-4xl text-3xl font-bold text-indigo-200 text-center'>{post.title}</h1>
            {post.imageUrl && (
                <Image
                src={post.imageUrl}
                alt={post.title}
                width={1000}
                height={1000} className='w-auto h-auto  rounded-lg border mt-8 ml-1 lg:ml-[350px]'/>
            )};
                <div className='text-white justify-center ml-1 mb-10 lg:mx-[350px]'>{renderParagraphs(post.description)}</div>


            <CommentSection postId={post.id}/>
            <AuthorCard/>
        </div>
    )
}