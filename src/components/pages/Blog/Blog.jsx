import React from "react";
import image1 from "../../../images/blog/blog-03.jpg";
import image2 from "../../../images/blog/blog-04.jpg";
import BlogItem from "./BlogItem";

const blogData = [
  {
    id: 1,
    image: image1,
    title: "15+ Free Startup Landing Page and Web Templates",
    description:
      "A landing page is a page designed to turn visitors into leads. It is separate from other pages on your...",
  },
  {
    id: 2,
    image: image2,
    title: "10+ Sources to Download Free SVG Illustrations",
    description:
      "There is no doubt about the importance of Scalable Vector Graphics illustration today.",
  },
];

const Blog = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {blogData.map((blog, id) => (
          <BlogItem blog={blog} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
