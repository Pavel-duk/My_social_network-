import React from "react";
import c from "./NewPost.module.css";

const NewPost = () => {
    return (
        <div>
            <div> 
                <p>New posts</p> 
                <div className = {c.newComment}>
                    <textarea name="Comment" cols="100" rows="5"></textarea>
                    <div className = {c.buttons}>
                        <button>Add comment</button>
                        <button>I like!</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default NewPost;