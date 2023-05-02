import { useEffect, useState } from "react";
import { getAllBlogsRequest } from "../services/postService";
import BlogPostCard from "../components/BlogPostCard";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  const fetchAllBlogs = async () => {
    const response = await getAllBlogsRequest();
    setBlogs(response.payload);
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <div className="max-w-full m-0 p-0 mx-auto">
      <h1 className=" mt-10 text-3xl font-bold text-center">All Posts</h1>

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {blogs.length > 0 &&
            blogs.map((blog) => <BlogPostCard key={blog._id} blog={blog} />)}
        </div>
      </div>
    </div>
  );
}

export default Blog;
