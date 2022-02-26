import React from "react";
import c from "./MyPosts.module.css";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className = {c.content}>
            <div className = {c.title}>
                My posts
            </div>
            <div>
                <Post/>
            </div>
            <div>
                <NewPost/>
            </div>
        </div>
    );
}

export default MyPosts;