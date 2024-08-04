import React, { useState, useEffect } from "react";
import { getBlogbyid } from "../api/Api";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import dateFormat from "dateformat";


const Blog = () => {

  let { id } = useParams();

  const [blog, setBlog] = useState({});

  useEffect(() => {
    async function fetchData() {
      const allBlogs = await getBlogbyid(id);
      setBlog(allBlogs.data);
      console.log(allBlogs.data);
    }
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center ">
      {blog && (
        <div className="flex flex-col w-[60%] overflow-hidden">
          <h1 className="mt-1 text-3xl font-extrabold">{blog.title}</h1>

          <div className="flex mt-4 mb-4">
            <small>
              {dateFormat(blog.createdAt, "mmmm dS, yyyy, h:MM TT")}
            </small>
          </div>
          <div>{parse(''+blog.content)}</div>
        </div>
      )}
    </div>
  );
};

export default Blog;
