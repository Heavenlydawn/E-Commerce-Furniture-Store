import React from "react";
import User from "../../../public/images/user.png";
import Calender from "../../../public/images/calender.svg";
import Tag from "../../../public/images/Blog-tag.svg";


interface BlogPost {
  id: number;
  image: any;
  title: string;
  content: string;
  date: string;
  calender: any;
  user: any;
  blogTag: any;
  tag: string;
}
const BlogData: BlogPost[] = [
    {
      id: 1,
      image: "Blog-1.png",
      title: "Going all-in with millennial design",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      date: "14 Oct 2022",
      calender: Calender,
      user: User,
      blogTag: Tag,
      tag: "Wood",
    },
    {
      id: 2,
      image: "Blog-2.png",
      title: "Exploring new ways of decorating",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      date: "14 Oct 2022",
      calender: Calender,
      user: User,
      blogTag: Tag,
      tag: "Handmade",
    },
    {
      id: 3,
      image: "Blog-3.png",
      title: "Handmade pieces that took time to make",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      date: "14 Oct 2022",
      calender: Calender,
      user: User,
      blogTag: Tag,
      tag: "Wood",
    },
    {
      id: 4,
      image: "Blog-3.png",
      title: "Going all-in with millennial design",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      date: "14 Oct 2022",
      calender: Calender,
      user: User,
      blogTag: Tag,
      tag: "Interior",
    },
    {
      id: 5,
      image: "Blog-1.png",
      title: "Exploring new ways of decorating",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      date: "14 Oct 2022",
      calender: Calender,
      user: User,
      blogTag: Tag,
      tag: "Design",
    },
    {
      id: 6,
      image: "Blog-2.png",
      title: "Handmade pieces that took time to make",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      date: "14 Oct 2022",
      calender: Calender,
      user: User,
      blogTag: Tag,
      tag: "Craft",
    },
    {
      id: 7,
      image: "Blog-2.png",
      title: "Going all-in with millennial design",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      date: "14 Oct 2022",
      calender: Calender,
      user: User,
      blogTag: Tag,
      tag: "Design",
    },
    {
      id: 8,
      image: "Blog-3.png",
      title: "Exploring new ways of decorating",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      date: "14 Oct 2022",
      calender: Calender,
      user: User,
      blogTag: Tag,
      tag: "Interior",
    },
    {
      id: 9,
      image: "Blog-1.png",
      title: "Handmade pieces that took time to make",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      date: "14 Oct 2022",
      calender: Calender,
      user: User,
      blogTag: Tag,
      tag: "Craft",
    },
  ];
  export default BlogData 