import { blogs } from "@/contents/blogs";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <section id="blog" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.slug} className="p-6 border rounded hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-700 mb-2">{blog.excerpt}</p>
            <p className="text-sm text-gray-500 mb-2">
              {blog.date} • {blog.readTime}
            </p>
            <Link href={`/blog/${blog.slug}`} className="text-blue-500 underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
