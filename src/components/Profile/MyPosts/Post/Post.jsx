import React from "react";
import c from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className = {c.posts}>
                <div className = {c.post}>
                    <img src="https://avatars.mds.yandex.net/i?id=4050c0ffbb107bdcf2de113fab36ed0f-5686193-images-thumbs&n=13" alt="avatar" />
                    <div>
                        {props.name} 
                    </div>
                    <div className = {c.text}>
                       <p>{props.massage}</p> 
                       <div>
                            {props.like} likes
                            <button>I like!</button>
                       </div>
                       
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Post;