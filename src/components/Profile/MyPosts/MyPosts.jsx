import React from "react";
import c from "./MyPosts.module.css";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div className = {c.content}>
            <div className = {c.title}>
                My posts
            </div>
            <div>
                <Post name = "Petro" massage = "I don`t now" like = "15"/>
                <Post name = "Wasya" massage = "I am Wasya, mmne zbs!" like = "35"/>
            </div>
            <div>
                <NewPost/>
            </div>
        </div>
    );
}

export default MyPosts;