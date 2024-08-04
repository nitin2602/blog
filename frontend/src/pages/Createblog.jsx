import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createBlog } from "../api/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Createblog = () => {
  const blankBlog = {
    title: "",

    content: "<p><br></p>",
    category: "",
  };

  const [newblog, setNewblog] = useState(blankBlog);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    let createdBlog = await createBlog(newblog);
    toast.success("A new Blog created!", {
      onClose: () => {
        navigate("/");
      },
    });

    if (createdBlog.desc == 1) {
      setNewblog(blankBlog);

      // alert("Blog added successfully !");
    }
  };

  const menu = [
    { text: "Nature", path: "/" },
    { text: "Travel", path: "/" },
    { text: "Technology", path: "/" },
    { text: "Politics", path: "/" },
  ];
  return (
    <div className="flex w-full items-center justify-center">
      <div className="bg-slate-200 w-[60%] p-5 rounded-xl">
        {/* <small>{JSON.stringify(newblog)}</small> */}
        <h1 className="text-2xl mb-5">Create Blog Post</h1>
        <div className="flex flex-col">
          <label htmlFor="" className="ml-1 text-gray-500">
            Title
          </label>
          <input
            type="text"
            value={newblog.title}
            onChange={(e) => setNewblog({ ...newblog, title: e.target.value })}
            className="h-10 border border-gray-300 rounded my-2 p-2"
          />
          <label htmlFor="" className="ml-1 text-gray-500">
            Category
          </label>
          <select
            value={newblog.category}
            onChange={(e) =>
              setNewblog({ ...newblog, category: e.target.value })
            }
            name=""
            id=""
            className="h-10 border border-gray-300 rounded my-2 p-2"
          >
            <option value="" default disabled>
              Select Category
            </option>
            {menu.map((x) => {
              return <option value={x.text}>{x.text}</option>;
            })}
          </select>

          <label htmlFor="" className="ml-1 text-gray-500">
            Post
          </label>
          <ReactQuill
            className="bg-white rounded mb-2 mt-2 editingarea"
            theme="snow"
            value={newblog.content}
            onChange={(e) => {
              setNewblog({ ...newblog, content: e });
            }}
          />

          <hr />
          <button
            type="submit"
            onClick={() => handleSubmit()}
            className="bg-slate-500 text-white h-8 w-[100px] mt-2 rounded  hover:bg-blue-500"
          >
            Submit
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Createblog;
