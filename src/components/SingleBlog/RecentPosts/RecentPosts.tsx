import React from "react";
import Image from "next/image";
import Blog1 from "../../../../public/images/Blog-1.png";
import Blog2 from "../../../../public/images/Blog-2.png";
import Blog3 from "../../../../public/images/Blog-3.png";
import User from "../../../../public/images/user.png";
import Calender from "../../../../public/images/calender.svg";
import Tag from "../../../../public/images/Blog-tag.svg";
import Heart from "../../../../public/images/heart.png"

interface BlogPost {
  id: number;
  image: any;
  title: string;
  date: string;
  calender: any;
  user: any;
  blogTag: any;
  tag: string;
}
const BlogData: BlogPost[] = [
  {
    id: 1,
    image: Blog1,
    title: "Going all-in with millennial design",
    date: "14 Oct 2022",
    calender: Calender,
    user: User,
    blogTag: Tag,
    tag: "Wood",
  },
  {
    id: 2,
    image: Blog2,
    title: "Exploring new ways of decorating",
    date: "14 Oct 2022",
    calender: Calender,
    user: User,
    blogTag: Tag,
    tag: "Handmade",
  },
  {
    id: 3,
    image: Blog3,
    title: "Handmade pieces",
    date: "14 Oct 2022",
    calender: Calender,
    user: User,
    blogTag: Tag,
    tag: "Craft",
  },
];
const RecentPosts = () => {
  return (
    <div className="flex justify-around items-center py-4 md:flex-row flex-col">
     {BlogData.map((blogPost) => (
        <div key={blogPost.id} >
          <Image src={blogPost.image} alt={`Blog post ${blogPost.id}`} width={400} height={400} />
          <div className="flex justify-between items-center py-4">
          <h2 className="text-xl font-medium">{blogPost.title}</h2>
          <p>{blogPost.date}</p>
          </div>
         <div className="flex justify-between items-center border-t border-b border-black hover:border-gold py-6">
         <p className="text-base font-medium">{blogPost.tag}</p>
         <Image src={Heart} alt="Like" />
         </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
