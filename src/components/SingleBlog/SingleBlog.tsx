import React from "react";
import Header from "../Header/Header";
import Ads from "../Ads/Ads";
import Hero from "../HeroProps/HeroProps";
import SingleBlogHero from "./SingleBlogHero";
import TopPicks from "../TopPicks/TopPicks";
import Footer from "../Footer/Footer";
import RecentPosts from "./RecentPosts/RecentPosts";


const SingleBlog = () => {
  return (
    <div>
      <Header />
      <Hero pageTitle="Blog Post" pageID="blog posts" />
      <SingleBlogHero />
      <RecentPosts />
      <Ads />
      <TopPicks />
      <Footer />
    </div>
  );
};

export default SingleBlog;
