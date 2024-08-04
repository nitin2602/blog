import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const menu = [
    { text: "Nature", path: "/" },
    { text: "Travel", path: "/" },
    { text: "Technology", path: "/" },
    { text: "Politics", path: "/" },
  ];
  return (
    <div>
      {/* <Header></Header> */}
      <div className="border-b">
        <div className="px-5 py-5 flex justify-between">
          <Link to="/">
            <span className="font-extrabold text-2xl font-serif">
              BLOG/IT/DOWN
            </span>
          </Link>
          <div className="flex">
            <ul className="flex">
              {menu.map((x, i) => {
                return (
                  <li key={i}>
                    <Link
                      className="p-2 items-center justify-center flex hover:text-red-400"
                      to={`/?category=${x.text}`}
                    >
                      <span>{x.text}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button className="bg-slate-500 text-white px-2 py-1 rounded hover:bg-blue-500">
              <Link to="/create">+ New Post</Link>
            </button>
          </div>
        </div>
      </div>
      {/* <Body></Body> */}
      <div className="flex mx-auto px-5 md:px-20">
        <div className="mt-5 mb-5 min-h-[500px] w-full">
          <Outlet></Outlet>
        </div>
      </div>
      {/* <Footer></Footer> */}
      <div className="bg-slate-800 py-6">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-center">
          <p className="text-gray-400 text-sm md:text-base text-center font-semibold">
            Created with ❤️ by{" "}
            <a
              href="https://github.com/nitin2602"
              className="text-blue-400 hover:text-blue-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nitin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
