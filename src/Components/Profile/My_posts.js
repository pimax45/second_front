import React from "react";
import Post from "./Post";
import "./index.css";
import Header from "../Header";

const My_posts = (props) => {
  let postData = [
    { id: 1, post: "Привет, Андрей", likesCount: 15 },
    { id: 2, post: "Pasko", likesCount: 20 },
  ];

  return (
    <div class="space-y-4 ...">
      <Header />
      <div className="content">ava + description</div>
      <div>
        <div>My posts:</div>
        <div class="space-y-4 ...">
          <textarea class=" outline outline-2 outline-offset-2 ..."></textarea>
          <br></br>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Button
          </button>
          <Post
            message={postData[0].post}
            likesCount={postData[0].likesCount}
          />
          <Post
            message={postData[1].post}
            likesCount={postData[1].likesCount}
          />
        </div>
      </div>
    </div>
  );
};

export default My_posts;
