"use client"
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import BlogData from '@/components/SingleBlog/BlogData';

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the blog post with the matching ID
  const blogPost = BlogData.find((post) => post.id === Number(id));

  // If the blog post is not found, you can handle it here
  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="p-4 w-[597px]">
      <div className="mb-4">
        <Image src={blogPost.image} alt="BlogImage" />
      </div>
      <div className="flex items-center gap-4 my-4">
        <div className="flex items-center gap-2 text-[#9F9F9F] text-base">
          <Image src={blogPost.user} alt="User" width={20} height={20} />
          <p>Admin</p>
        </div>
        <div className="flex items-center gap-2 text-[#9F9F9F] text-base">
          <Image src={blogPost.calender} alt="Calender" width={20} height={20} />
          <p>{blogPost.date}</p>
        </div>
        <div className="flex items-center gap-2 text-[#9F9F9F] text-base">
          <Image src={blogPost.blogTag} alt="Tag" width={20} height={20} />
          <p>{blogPost.tag}</p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-medium my-4">{blogPost.title}</h2>
        <p className="text-[#9F9F9F] text-base leading-7">{blogPost.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
