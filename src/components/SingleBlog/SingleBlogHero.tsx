import React from "react";
import Image from "next/image";
import BlogImage1 from "../../../public/images/Blog-1.png";
import BlogImage2 from "../../../public/images/Blog-2.png";
import BlogImage3 from "../../../public/images/Blog-3.png";
import RecentBlogs from "../Blog/RecentBlogs";
const SingleBlogHero = () => {
  return (
    <section>
      <h2 className="md:text-5xl text:2xl font-bold mb-5 text-center md:py-10 py-4">
        Going all-in with millennial design
      </h2>
      <main className="flex justify-center items-center flex-col md:flex-row">
        <div className="flex justify-center items-center flex-col">
          <div className="my-10">
            <Image src={BlogImage1} alt="Blog Image" />
          </div>

          <div className="w-[300px] md:w-[800px]  md:my-10 my-4">
            <h2 className="text-2xl font-bold mb-5">
              Going all-in with millennial design
            </h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              asperiores voluptas, ullam repellendus mollitia nostrum non
              perspiciatis nulla ad vitae incidunt quas nemo. Excepturi dolorem
              fugit pariatur doloribus. Autem soluta, deserunt, veritatis quia
              dicta mollitia optio fuga tempore sint placeat illum pariatur
              numquam sapiente consequuntur reiciendis rerum quam expedita
              obcaecati eaque cumque dolorum odio? Ipsa obcaecati nesciunt quis
              id quod asperiores perferendis, eos dolorem, alias eveniet
              voluptatibus ipsum? Ut sequi minima modi a sapiente necessitatibus
              recusandae. Hic nostrum quia harum distinctio pariatur porro
              quisquam error neque a corrupti ratione consequuntur, facilis
              voluptate maiores excepturi dolores, laudantium doloremque iste
              minus quasi!
            </p>
          </div>
        </div>

        <div className="ml-[100px] md:ml[0px]">
          <RecentBlogs />
        </div>
      </main>
    </section>
  );
};

export default SingleBlogHero;
