import AuthorCard from "@/app/Component/AuthorCard";
import BlogCard from "@/app/Component/BlogCard";
import CommentSection from "@/app/Component/CommentSection";
import Image from "next/image";
import React from "react";
import Blogs from "@/app/Component/Blogs";


export default function Home() {
  return (   
        <main className="bg-black">
        <title>Alia Mujtaba Blogs</title>
         <div className="py-12 px-1 lg:px-12">
          <Blogs/>
          </div>
          <div >          
          <AuthorCard/>
          </div>
          <div className="py-12">
          <CommentSection postId={""}/>
          </div>
       
        </main>
  );
}
