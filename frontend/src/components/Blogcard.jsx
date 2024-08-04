import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
const Blogcard = (props) => {
  let blogdata = props.blogdata;
  const apiURL = "http://localhost:3000/";
  return (
    <div className=" shadow-md overflow-hidden rounded-xl">
      <Link to={`/blogbyid/${blogdata.id}`}>
        <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
          <div className="rounded-[10px] bg-white p-4 !pt-5 sm:p-6">
            <small>
              {dateFormat(blogdata.createdAt, "mmmm dS, yyyy, h:MM TT")}
            </small>

            <a href="#">
              <h3 className="mt-0.5 text-2xl font-medium text-gray-900">
                {blogdata.title}
              </h3>
            </a>

            <div className="mt-4 flex flex-wrap gap-1">
              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-md text-purple-600">
                {blogdata.category}
              </span>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default Blogcard;
